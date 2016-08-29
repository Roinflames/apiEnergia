var serialport = require('serialport'); //Incluir la biblioteca serialport
Serialport = serialport.Serialport; //crea una 'instancia local'
portname = process.argv[2]; //Obtiene el nombre del puerto

console.log("Puerto seleccionado: " + portname)
