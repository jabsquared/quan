/*
  Saria
  Holding links to the unknown, Sarina is my secret keeper.
*/

'use strict';

var cloudantAuth = {
  url: 'lab',
};

var redisAuth = {
  host: 'lab',
};

// Check if ENV from BLUEMIX exist
if (process.env.VCAP_SERVICES) {
  var vcapServices = JSON.parse(process.env.VCAP_SERVICES || '{}');

  var cloudantCred = vcapServices.cloudantNoSQLDB[0].credentials;

  cloudantAuth = {
    user: cloudantCred.username,
    pass: cloudantCred.password,
    url: cloudantCred.url,
  };

  var redisCred = vcapServices.rediscloud[0].credentials;

  redisAuth = {
    host: redisCred.hostname,
    pass: redisCred.password,
    port: redisCred.port,
  };
}

// Export keys
exports.cloudantAuth = cloudantAuth;
exports.redisAuth = redisAuth;
module.exports = exports;
