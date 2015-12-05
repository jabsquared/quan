/*
  Sideria
  She recalls things fast...
*/

'use strict';

var redis = require('redis');
var secret = require('./saria')
  .redisAuth;
var count = 9000000000;

var client;
var sub;

if (secret.host === 'lab') {
  client = redis.createClient();
  sub = redis.createClient();
} else {
  client = redis.createClient(secret.port, secret.host, {
    no_ready_check: true
  });
  sub = redis.createClient(secret.port, secret.host, {
    no_ready_check: true
  });
  client.auth(secret.pass, function(err) {
    if (err) {
      console.log(err);
    }
  });
  sub.auth(secret.pass, function(err) {
    if (err) {
      console.log(err);
    }
  });
}

client.on('error', function(err) {
  console.log('Error ' + err);
});

sub.on('error', function(err) {
  console.log('Error ' + err);
});

client.get('count', function(err, res) {
  if (err) {
    return console.log(err);
  }
  if (!res) {
    client.set('count', count);
    return;
  }
});

// Subscribe to countDown Channel
sub.subscribe('countDown', function (){});

exports.count = function(callback) {
  client.get('count', callback);
};

exports.countDown = function(callback) {
  client.decr('count', callback);
};

exports.client = client;
exports.sub = sub;

module.exports = exports;
