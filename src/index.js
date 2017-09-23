const { app } = require('./http')
const https = require('https')
const fs = require('fs')


// SSL options
var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt'),
  passphrase: 'geheim'
}

https.createServer(options, app.callback()).listen(3000)

