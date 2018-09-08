const server = require('./config/server')
require('./db/database')
require('../src/routes/routes')(server)