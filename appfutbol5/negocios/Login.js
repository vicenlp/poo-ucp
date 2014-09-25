var Login = (function(){
	var self = Object.create({});

	var usuario;
	self.getUsuario = function(){
		return usuario;
	}
	self.setUsuario = function(valor){
		usuario = valor;
	}

	var password;
	self.getPassword = function(){
		return password;
	}
	self.setPassword = function(valor){
		password = valor;
	}

	self.validar = function(u, p){
		return ((u==p)&&(u.length>=4));
	}	

	return self;
});
module.exports = Login;