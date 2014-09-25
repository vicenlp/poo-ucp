var Equipo = require('../entidades/Equipo.js');
var Cancha = require('../entidades/Cancha.js');

var Entidad=(function(){
    var self=Object.create({});

     var j = require('../entidades/Jugador.js');

      self.listado=function(j){
        var lista=[];

       for (i=0;i<3;i++){
          lista.push=(j.getNombre+i);
       }

             return listado;
       }

       


       }
     

     return self;
});
module.exports=Entidad;


