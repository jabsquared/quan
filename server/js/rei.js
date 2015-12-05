/*
  Rei
  She put documents into my pouch
*/

'use strict';

var PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-upsert'));

var secret = require('./saria').cloudantAuth;

exports.db = (secret.url === 'lab') ? {
  users: new PouchDB('http://127.0.0.1:5984' + '/users'),
  images: new PouchDB('http://127.0.0.1:5984' + '/images')
} : {
  users: new PouchDB(secret.url + '/users', {
    auth: {
      username: secret.user,
      password: secret.pass,
    },
  }),
  images: new PouchDB(secret.url + '/images', {
    auth: {
      username: secret.user,
      password: secret.pass,
    },
  }),
};

exports.pushData = function(db, id, cb) {
  db.upsert(id, cb)
    .then(function(res) {
      // console.log(res);
    }).catch(function(err) {
      // console.log(err);
    });
};

module.exports = exports;
