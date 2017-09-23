const jwt = require('jsonwebtoken')

function ticket (data) {
  return jwt.sign(data, 'secret')
}

module.exports = { ticket }
