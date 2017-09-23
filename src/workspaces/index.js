const { range } = require('lodash')
const { workspaceMock } = require('./workspaceMock')

const storage = []

function all () {
  return Promise.resolve([...storage, ...(range(100).map(workspaceMock))])
}

function create (workspace) {
  storage.push(workspace)
  return workspace
}
module.exports = { all, create }
