var http = require('http');
var fs = require("fs");
var requestListener = function(req,res){
	console.log(req.url);
	if(req.url.match(/[.html][.css][.js]/))
		res.end(fs.readFileSync('.'+req.url,"UTF-8"));
	res.end(fs.readFileSync('.'+req.url));
}
var server = http.createServer(requestListener);
server.listen(4000);