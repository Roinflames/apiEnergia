//Incluir la biblioteca serialport
var serialport = require('serialport');

//Creacion de variable local
var SerialPort = serialport.SerialPort;

//Recibe el puerto como parametro en linea de comando
portName = process.argv[2]

var myPort = new SerialPort(portName, {
	baudRate: 9600,
	parser: serialport.parsers.readline("\n")
});
