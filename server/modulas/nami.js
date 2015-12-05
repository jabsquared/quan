/*
  Nami
*/

'use strict';

module.exports = function(socket) {
  // body...
  console.log('connection', socket.handshake.address);
  socket.on('Ask Question', function(data) {
    console.log(data);
    // console.log(data);
    // if (!data) {
    //
    // }
  });
};
