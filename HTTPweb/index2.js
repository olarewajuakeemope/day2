const http = require('http');

function handler(request, response){
	console.log(request.url);
	response.end("Hello World!");
}

const server = http.createServer(handler);

server.listen(81, function(){
	console.log("Server is listening at http://localhost:81");
})