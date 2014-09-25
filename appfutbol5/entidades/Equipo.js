var Equipo = (function(){
	var self = Object.create({});

	var nombre;
	self.getNombre = function(){
		return nombre;
	}
	self.setNombre = function(valor){
		nombre = valor;
	}

	var completo;
	self.getCompleto = function(){
		return completo;
	}
	self.setCompleto = function(valor){
		completo = valor;
	}

	var categoria;
	self.getCategoria = function(){
		return categoria;
	}
	self.setCategoria = function(valor){
		categoria = valor;
	} 

	self.informacion = function(){
		var string1 = getNombre;
		var info = "Equipo: " + string1;
		return info;
	}

	self.toString = function(){
		return self.getNombre+" "+self.getCategoria;
	}

	//var equipoArray = [];

	//self.listado = function(){
		//var j = null;
		//for (var i = 1; i <= 51; i++){
			//j = new Jugador();
			//.setNombre('Jugador ' i);
			//equipoArray.push(j)

		//};

		//return equipoArray;
	//}

	//self.buscar = function(){

	//}


	//self.agregarJugador = function(j){
		//return equipoArray.push(j);
	//}

	//self.quitarJugador = function(j){
		//return equipoArray.remove(j);
	//}

	return self;
});
module.exports = Equipo;