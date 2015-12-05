/*
  Nami
*/

'use strict';

module.exports = function(socket) {
  // body...
  console.log('connection', socket.handshake.address);
  socket.on('Teacher Asks', function(data) {
    console.log(data);
    // console.log(data);
    // if (!data) {
    //
    // }
    socket.emit('Student Receives', data);
  });
};
