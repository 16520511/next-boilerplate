const { validationResult } = require('express-validator');
const _ = require('lodash');
const routes = require('../routes');

module.exports = async function handler(req, res, next) {
  const { method, originalUrl } = req;
  const validateObj = _.find(routes, el => el.path === originalUrl && el.method === method);
  if (!validateObj)
    return next();
  await Promise.all(_.map(validateObj.rules, async (rule) => await rule.run(req)));
  const result = validationResult(req);
  if (_.isEmpty(_.get(result, 'errors', []))) {
    return next();
  }
  return res.status(200).json({ 
    code: 0,
    errors: _.get(result, 'errors', []) 
  });
}