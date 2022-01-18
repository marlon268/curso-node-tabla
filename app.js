require('colors');

const { createArchive } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

createArchive(argv.b, argv.l, argv.h)
	.then((nombreArchivo) => console.log(nombreArchivo.rainbow))
	.catch((err) => {
		console.log('Error al crear archivo');
		console.log(err);
	});
