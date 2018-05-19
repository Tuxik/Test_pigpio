//Script de test de ServoController
//180° = 1900 

var ServoController = require('./ServoController');
var controller = new ServoController(10);//initialisation du gpio 10
var direction = 1;
 setInterval(function(){
	 console.log("min " + controller.initialValue);
	 console.log("max " + controller.maxValue);
	 var val = controller.getValue();
	  console.log("current " + val);
	  if (val <= controller.initialValue){
		  direction = Math.abs(direction);
	  }
	  if(val >= controller.maxValue){
		direction = -1;
	  }
	  var finalValue = (475 * direction);
	  console.log(finalValue);
	  controller.addRotate(finalValue);
 },500);


