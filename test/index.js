const path = require('path');
const getapp = require('../app');

getapp.config.set('cwd', path.join(__dirname, '../apps'))

console.log(getapp.getAll())
