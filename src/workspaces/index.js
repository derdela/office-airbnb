const { range } = require('lodash')
const { workspaceMock } = require('./workspaceMock')
const { ticket } = require('../ticket')

const storage = []

function all () {
  return Promise.resolve([...storage, ...(range(100).map(workspaceMock))])
}

function create (workspace) {
  storage.push(workspace)
  return workspace
}

function book (data) {
  return {
    ticket: ticket(data)
  }
}

module.exports = { all, create, book }
