const server = require('./config/server')
require('./db/database')
require('./routes/routes')(server)