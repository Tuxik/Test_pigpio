//Script needs to be executed as root on raspberry 
//Module pour controller le servo RC via Raspberry PI.
//use $ sudo node Testpigpio.js
 
  var Gpio = require('pigpio').Gpio;
	
		//Initialisation du controller du servo sur le GPIO précisé en param.
	  function ServoController(gpioNbr){
		this.initialState = 600,	  // Valeur de l'angle par defaut (semble être la valeur la plus petite admissible
		this.currentState = 600,
		this.increment = 100, 
		this.maxDegree = 2500, 
		this.motor = new Gpio(gpioNbr, {mode: Gpio.OUTPUT});
	  }
	ServoController.prototype.toInitialState = function() {
	  console.log("Initial State");
	  this.currentState = this.initialState;
	  this.motor.servoWrite(this.currentState);
	},
	ServoController.prototype.toMaxDegree = function(){
	  console.log("Max Degree");
	  this.currentState = this.maxDegree;
	  this.motor.servoWrite(this.currentState);
	},
	ServoController.prototype.switchState = function(){
		if (this.currentState === this.maxDegree){
			this.toInitialState();
		}else{
			this.toMaxDegree();
		}
	},
	ServoController.prototype.getState = function(){
		if (this.currentState === this.maxDegree){
			return "maxDegree";
		}else{
			return "initial State";
		}
	}

	module.exports = ServoController