const routes = [];
const { check } = require('express-validator');

routes.push({
  path: '/api/Account/Login',
  method: 'POST',
  auth: false,
  scopes: [],
  rules: [
    check('username', 'Field này là bắt buộc')
    .isLength({ min: 3, max: 40 }),
    check('password', 'Field này là bắt buộc')
    .isLength({ min: 6, max: 6 }).withMessage('Mật khẩu gồm 6 số')
    .isNumeric().withMessage('Mật khẩu gồm 6 số'),
  ]
});

module.exports = routes;