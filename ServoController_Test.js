//Script de test de ServoController


var ServoController = require('./ServoController');
var controller = new ServoController(10);//initialisation du gpio 10


setInterval(function(){
	controller.switchState();
	controller.getState();
},1000);