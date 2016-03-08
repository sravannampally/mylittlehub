var express =require('express');
var server = express();
server.use(express.static('../My3_angular'));
var port = 10001;
server.listen(port,function(){
	console.log('server listening on port ' + port);
});
