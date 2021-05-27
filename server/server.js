const express = require('express');
const next = require('next');
const session = require('express-session');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const AuthMiddleware = require('./middlewares/authentication');
const ValidateMiddleware = require('./middlewares/validate-request');

app.prepare().then(() => {
  const server = express();

  /* --- Session --- */
  const sess = {
    secret: 'huylhd',
    resave: false,
    saveUninitialized: true,
  }
  if (server.get('env') === 'production') {
    server.set('trust proxy', 1);
    sess.cookie.secure = true;
  }
  server.use(session(sess));
  
  /* --- API middlewares --- */
  server.use('/api/*', express.urlencoded({ extended: true }));
  server.use('/api/*', express.json());
  server.use('/api/*', AuthMiddleware);
  server.use('/api/*', ValidateMiddleware);

  // Default Next.js routing
  server.all('*', async (req, res) => {
    return handle(req, res);
  })

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  })
})