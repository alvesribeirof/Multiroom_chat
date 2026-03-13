/* Importar as configurações do servidor*/
var app = require('./config/server');
var Server = require('socket.io').Server;

/* parametrizar a porta de escuta */
var server = app.listen(81, function () {
	console.log('Servidor online');
})

var io = new Server(server);

app.set('io', io);

/* criar a conexão por websocket */
io.on('connection', function(socket) {
	console.log('Usuário conectou');

	socket.on('disconnect', function() {
		console.log('Usuário desconectou');
	});
});
