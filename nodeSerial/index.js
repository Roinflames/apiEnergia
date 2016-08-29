//Incluir la biblioteca serialport
var serialport = require('serialport');

//Creacion de variable local
var SerialPort = serialport.SerialPort;

//Listar los puertos seriales disponibles
serialport.list(function (err, ports) {
	ports.forEach(function(port) {
		console.log(port.comName);
  });
});

//Puerto que recibe los datos
portName = '/dev/ttyUSB0';

//Funciones de llamado

function showPortOpen() {
	console.log('Puerto abierto');
}

//Eventos
//myPort.on('open', showPortOpen);
//myPort.on('data', sendSerialData);
//myPort.on('close', showPortClose);
//myPort.on('error', showError);

//Colectar datos desde puerto serial
//Se entrega el puerto predefinido
var port = new SerialPort(portName, function (err) {
  if (err) {
    return console.log('Error: ', err.message);
	// Error de creacion del puerto?
  }
  port.write('main screen turn on', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
	// Error de escritura en el puerto
    }
    console.log('Mensaje escrito');
  });
  port.on('data', function (data) {
  console.log('Potencia medida en ' + port.name + ': ' + data);
});
});
