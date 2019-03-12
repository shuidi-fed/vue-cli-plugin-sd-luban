const shell = require('shelljs')
const projecName = require('./package.json').name;

shell.exec(`vue-cli-service build --target lib --name ${projecName} ./src/index.js`)
