var http = require('http').createServer();
var io = require('socket.io')(http,{
  cors:{
    origin: ["http://localhost:8000", "http://127.0.0.1:8000"],
    methods: ["GET", "POST", "DELETE", "OPTIONS"]
  }
});
var port = process.env.PORT || 3000;
http.listen(port,function(){
  console.log('listen the node js listen the node js listen the node js listen the node js');
});