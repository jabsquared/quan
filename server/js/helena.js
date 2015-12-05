/*
  Helena
  She told Rei what I wanted to say...
*/

'use strict';

var rei = require('./rei');

var db = rei.db;

function upsertUserData(data) {
  // console.log(data);
  rei.pushData(db.users, data.udata.uid,
    function(doc) {
      if (!doc.urls) {
        doc.urls = [];
      }
      if (!doc.dates) {
        doc.dates = [];
      }
      if (!doc.count) {
        doc.count = 0;
      }

      doc.media = data.umedia.exist ?
        data.umedia : null;

      doc.urls.push(data.url);

      doc.dates.push(data.utimestamp);
      ++doc.count;
      return doc;
    }
  );
}

function upsertImageData(data) {
  // body...
  /*
    0 1
    2 3
  */
  // console.log(data);
  rei.pushData(db.images, data.url,
    function(doc) {
      /*
      dates: [data.utimestamp],
      */
      if (!doc.grids) {
        doc.grids = [];
      }
      if (!doc.uids) {
        doc.uids = [];
      }
      if (!doc.count) {
        doc.count = 0;
      }
      if (!doc.dates) {
        doc.dates = [];
      }
      doc.dates.push(data.utimestamp);
      doc.grids.push(data.urls);
      doc.uids.push(data.udata.uid);
      ++doc.count;
      return doc;
    }
  );
}

exports.receive = function(data) {

  upsertUserData(data);

  upsertImageData(data);
};

module.exports = exports;
