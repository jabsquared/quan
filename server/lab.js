var socketio = require('socket.io');
var restify = require('restify');
var server = restify.createServer();
var io = socketio.listen(server.server);

server.listen(process.env.VCAP_APP_PORT || 1314, function () {
  console.log('%s listening at %s', server.name, server.url);
});

io.sockets.on('connection', function (socket) {
  console.log('connection', socket.handshake.address);
  socket.on('Teacher Asks', function (data) {
    console.log(data);
    // console.log(data);
    // if (!data) {
    //
    // }
    io.emit('Student Receives', data);
  });
});
