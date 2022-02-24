var http = require('http').createServer();
var port = process.env.PORT || 3000;
http.listen(port,function(){
  console.log('listen the node js');
});