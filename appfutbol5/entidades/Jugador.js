var Jugador = (function(){
	var self = Object.create({});

	var nombre;
	self.getNombre = function(){
		return nombre;
	}
	self.setNombre = function(valor){
		nombre = valor;
	}

	var apellido;
	self.getApellido = function(){
		return apellido;
	}
	self.setApellido = function(valor){
		apellido = valor;
	}

	var posicion;
	self.getPosicion = function(){
		return posicion;
	}
	self.setPosicion = function(valor){
		posicion = valor;
	}

	self.informacion = function(){
		var string1 = getNombre;
		var string2 = getApellido;
		var string3 = getPosicion;
		var info = "Nombre completo: " + string1 + " " + string2 + " Posicion: " + string3;
		return info;
	}

	self.toString = function(){
		return self.getNombre+" "+self.getApellido;
	}

	return self;
});
module.exports = Jugador;