var socketio = require('socket.io');
var restify = require('restify');
var server = restify.createServer();
var io = socketio.listen(server.server);

server.listen(process.env.VCAP_APP_PORT || 1314, function () {
  console.log('%s listening at %s', server.name, server.url);
});

io.sockets.on('connection', function (socket) {
  console.log('connection', socket.handshake.address);
  // io.emit('CONNECTED');
  socket.on('Teacher Asks', function (data) {
    console.log(data);
    // console.log(data);
    // if (!data) {
    //
    // }
    socket.broadcast.emit('Student Receives', data);
  });

  socket.on('Student Answers', function (data) {
    console.log(data);
    // console.log(data);
    // if (!data) {
    //
    // }
    socket.broadcast.emit('Teacher Receives', data);
  });
});
