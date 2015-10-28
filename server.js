var http = require('http');
var fs = require("fs");
var showPage = function(){
	var file = fs.readFileSync("swamijisWork.html","UTF-8");
	return file;
};

var requestListener = function (req,res){
	res.end(showPage());
};
var server = http.createServer(requestListener);
server.listen(4000);