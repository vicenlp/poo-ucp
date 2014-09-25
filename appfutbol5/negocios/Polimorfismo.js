var Equipo = require('../entidades/Equipo.js');
var Cancha = require('../entidades/Cancha.js');
var Cancha = require('../entidades/Jugador.js');
var Polimorfismo=(function(){
    var self=Object.create({});

     //var j = require('../entidades/Jugador.js');

      self.listaVarios=function(j){
        var varios = [];
        var jug;
        var equi;
        var can;

       for(var i = 1; 1<= 10; i++){
        jug = new Jugador();
        jug.setNombre('Jugador '+i);
        jug.setPosicion(1+i);

        equi = new Equipo();
        equi.setNombre('Jugador '+i);
        equi.setCategoria('A');

        can = new Cancha();
        can.setNombre('Cancha '+i);
        can.setUbicacion('calle '+i);

        varios.push(jug);
        varios.push(equi);
        varios.push(can);
       }

       return varios;

       }

       
     return self;
});
module.exports=Polimorfismo;