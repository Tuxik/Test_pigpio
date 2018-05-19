//Script needs to be executed as root on raspberry 
//Module pour controller le servo RC via Raspberry PI.
//use $ sudo node Testpigpio.js
 
  var Gpio = require('pigpio').Gpio;
	
		//Initialisation du controller du servo sur le GPIO précisé en param.
	  function ServoController(gpioNbr){
		this.initialValue = 600,	  // Valeur de l'angle par defaut (semble être la valeur la plus petite admissible
		this.currentValue = 600,
		this.maxValue = 2500, 
		this.motor = new Gpio(gpioNbr, {mode: Gpio.OUTPUT});
	  }
	ServoController.prototype.toInitialValue = function() {
	  console.log("Initial Value : " + this.initialValue);
	  this.currentValue = this.initialValue;
	  this.motor.servoWrite(this.currentValue);
	}
	ServoController.prototype.toMaxValue = function(){
	  console.log("Max Value : " + this.maxValue);
	  this.currentValue = this.maxValue;
	  this.motor.servoWrite(this.currentValue);
	}
	ServoController.prototype.switchState = function(){
		if (this.currentValue === this.maxValue){
			this.toInitialValue();
		}else{
			this.toMaxValue();
		}
	}
	ServoController.prototype.addRotate = function(value){
		if ((value + this.currentValue) >= this.initialValue && (value + this.currentValue) <= this.maxValue){
			this.currentValue += value;
			this.motor.servoWrite(this.currentValue);
		}
	}
	 ServoController.prototype.getValue = function(){
		 return this.currentValue;
		// if (this.currentValue === this.maxValue){
			// return "maxDegree";
		// }else{
			// return "initial State";
		// }
	 }	
	// ServoController.prototype.rotateOf = function(degrees){
		// if (degrees && degrees !== undefined && degrees !== "" && degrees <= 180){
			// var ratioDegrees = degrees / 180;
			// console.log(ratioDegrees);
			// var maxRotate = this.maxValue - this.initialValue;
			// var ratioRotate = maxRotate * ratioDegrees;
			// console.log(ratioRotate);
			// var rotateValue = ratioRotate + this.initialValue;
			// console.log(rotateValue);
			// this.motor.servoWrite(rotateValue);
		// }
	// }
	
	ServoController.prototype.rotateOf90 = function(){
		this.motor.servoWrite(1950);
	}
	module.exports = ServoController