module.exports.iniciaChat = function(application, req, res){
	
	var dadosForm = req.body;

	var apelido = (dadosForm.apelido || '').trim();
	var erros = [];

	if (!apelido) {
		erros.push({ msg: 'Nome ou apelido é obrigatório' });
	}

	if (apelido.length < 3 || apelido.length > 16) {
		erros.push({ msg: 'Nome ou apelido deve conter entre 3 e 16 caracteres' });
	}

	if(erros){
		res.render("index", { validacao : erros})
		return;
	}

	application.get('io').emit(
		'msgParaCliente', 
		{apelido : apelido, mensagem : ' acabou de entrar no chat'}

	)

	res.render("chat");
};