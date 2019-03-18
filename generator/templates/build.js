const shell = require('shelljs')
let projecName = require('./package.json').name;
projecName = projecName.includes('/') ? projecName.split('/')[1] : projecName

shell.exec(`vue-cli-service build --target lib --name ${projecName} ./src/index.js`)
