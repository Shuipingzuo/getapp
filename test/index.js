const path = require('path');
const getapp = require('../app');

getapp.config.set('cwd', path.join(__dirname, '../apps'))


getapp.getAll().then(arr => console.log(arr))
