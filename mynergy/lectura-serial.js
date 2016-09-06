																var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

//Ubicacion de conexion arduino
portName = '/dev/ttyUSB0';

var port = new SerialPort(portName, function (err) {
  port.on('data', function (data) {
  console.log(""+data);
  });
});

