var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const PORT = process.env.PORT || 5000

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('disconnect', function(){
      console.log('user disconnected');
    });

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    });

    socket.on('contentcontroller', function(data){
        io.emit('contentcontroller', data);
    });

    socket.on('reedonly', function(data){
      io.emit('reedonly', data);
    });

    socket.on('dev1', function(data){
      io.emit('dev1', data);
    });

    socket.on('dev2', function(data){
      io.emit('dev2', data);
    });

    socket.on('dev3', function(data){
      io.emit('dev3', data);
    });

    socket.on('demo1', function(data){
      io.emit('demo1', data);
    });

    socket.on('demo2', function(data){
      io.emit('demo2', data);
    });

    socket.on('demo3', function(data){
      io.emit('demo3', data);
    });

  });


http.listen(PORT, function(){
  console.log(`listening on *:${PORT}`);
});