const routes = require('../routes');
const _ = require('lodash');

module.exports = function handler(req, res, next) {
  const { method, originalUrl } = req;
  const authObj = _.find(routes, el => el.path === originalUrl && el.method === method);
  if (!authObj || _.get(authObj, 'auth', true) === false)
    return next();

  const authInfo = _.get(req, 'session.authInfo', false)
  if (authInfo !== false) {
    const sharedScopes = _.intersection(_.get(authInfo, 'scopes', []), _.get(authObj, 'scopes', []));
    if (!_.isEmpty(sharedScopes))
      return next();
  }
    
  // return res.status(401).json({ message: 'Unauthorized' })
  return res.status(200).json({
    code: 0,
    message: 'Unauthorized'
  })
}