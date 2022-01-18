const fs = require('fs');
const colors = require('colors');

const createArchive = async (base = 5, listar = false, hasta = 10) => {
	try {
		let salida = '';
		let consola = '';

		for (let i = 1; i <= hasta; i++) {
			salida += `${base} ${'x'} ${i} ${'='} ${base * i}\n`;
			consola += `${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`;
		}
		if (listar) {
			console.log('===================='.green);
			console.log(`    Table of: ${base}`.blue);
			console.log('===================='.green);

			console.log(consola);
		}

		fs.writeFileSync(`./salida/table-${base}.txt`, salida);

		return `table-${base}.txt created successfully`;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	createArchive,
};
