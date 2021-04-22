const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./Cors')

server.use( bodyParser.urlencoded( { extended: true } ) )
server.use( bodyParser.json() )
server.use( allowCors )
// padrão chain of responsability

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}`)

})

module.exports = server 