const bodyParser = require('body-parser')
const express = require('express')
const queryParser = require('express-query-int')

const allowCors = require('./cors')

const port = 3003
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, () => {
  console.log(`BACKEND is running on port ${ port }`)
})

module.exports = server