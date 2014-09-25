var Jugador = require('../entidades/Jugador.js');

var JugadoresNegocio=(function(){
    var self=Object.create({});

     //var j = require('../entidades/Jugador.js');

     
      var jugadorArray = [];
      self.listado=function(){
        

        var j = null;
        if (jugadorArray.length){
          return jugadorArray;

        };

       for (var i = 1; i <= 100; i++){
        j = new Jugador();
        j.setNombre('Jugador: ' + i);
        jugadorArray.push(j);

       };

             return jugadorArray;
      }
     

     return self;
});
module.exports=JugadoresNegocio;


