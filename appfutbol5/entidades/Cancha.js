var Cancha = (function(){
	var self = Object.create({});

	var nombre;
	self.getNombre = function(){
		return nombre;
	}
	self.setNombre = function(valor){
		nombre = valor;
	}

	var ubicacion;
	self.getUbicacion = function(){
		return ubicacion;
	}
	self.setUbicacion = function(valor){
		ubicacion = valor;
	}

	var disponible;
	self.getDisponible = function(){
		return disponible;
	}
	self.setDisponible = function(valor){
		disponible = valor;
	}

	self.informacion = function(){
		var string1 = getNombre;
		var string2 = getUbicacion;
		var info = "Cancha: " + string1 + " " + string3;
		return info;
	}

	self.toString = function(){
		return self.getNombre+" "+self.getUbicacion;
	}

	
	return self;
});

//ejemplo crear objeto

//var c1 = new Cancha();
//c1.setNombre("La costa");

//var c2 = new Cancha();
//c2.setNombre("Rodolfito");

//console.log(c1.getNombre());
//console.log(c2.getNombre());

module.exports = Cancha;