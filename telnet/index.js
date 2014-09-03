var net = require('net');

var counter = 0;

var server = net.createServer(function(conn){
	console.log('\033[90m new connection!\033[39m');

	conn.setEncoding('utf8');
	conn.write(
		'\n > \033[90m welcome!\033[39m'+
		'\n > '+counter+' other peopel are connected at the moment'+
		'\n > plz enter your name and hit enter'
		);
	counter++;

	conn.on('data',function(data){
		console.log(data);
	})

	conn.on('close',function(){
		counter--;
	});
});

server.listen(3002,function(){
	console.log('\033[96m listen on port 3000 !\033[39m');
});