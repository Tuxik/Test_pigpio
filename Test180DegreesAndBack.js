//Script needs to be executed as root on raspberry 
//use $ sudo node Testpigpio.js
// from https://www.npmjs.com/package/pigpio

var Gpio = require('pigpio').Gpio,
  motor = new Gpio(10, {mode: Gpio.OUTPUT}),
  initialState = 600,
  pulseWidth = initialState,//1000,
  increment = 100, //1000 = 1/4 tour environ
  maxDegree = 2500; //180Degree = 2000
 
setInterval(function () {

  if (pulseWidth == maxDegree) { 
    pulseWidth = initialState;//increment = -500;
  } else if (pulseWidth == initialState ){//if (pulseWidth <= 1000) {
    pulseWidth = maxDegree;//increment = 500;
  }
  console.log(pulseWidth);
  motor.servoWrite(pulseWidth);
}, 500);
