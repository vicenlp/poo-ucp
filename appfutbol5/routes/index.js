var express = require('express');
var router = express.Router();

var Login = require('../negocios/Login.js');
var Entidad = require('../negocios/Entidad.js');
var Equipo = require('../entidades/Equipo.js');
var Polimorfismo = require('../negocios/Polimorfismo.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Futbol 5' });
});

/* GET Login */
router.get('/login', function(req, res) {
  res.render('login', { mensajeError: '' });
});

/* POST Login */
router.post('/login', function(req, res) {
	//Recuperando datos del formulario
	var usuario = req.body.usuario;
	var password = req.body.password;

	//Instanciando Login
	var login = new Login();
	var esValido = login.validar(usuario,password);

	if (esValido) {
		res.render('Index');
	}else{
		res.render('login', { mensajeError: 'Datos incorrectos. Verifique.' });
	};
 
});

/* GET Jugadores */
router.get('/Jugadores', function(req, res) {
	var jr = new JugadoresNegocio();

   res.render('jugadores', {jugadores: jr.listado()});
	
 
});

/* GET Polimorfismo */
router.get('/Polimorfismo', function(req, res) {
	var p = new Polimorfismo();

   res.render('polimorfismo', {polimorfismo: p.listaVarios()});
	
 
});

module.exports = router;
