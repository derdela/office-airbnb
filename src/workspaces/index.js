const { range } = require('lodash')
const { workspaceMock } = require('./workspaceMock')
const clusterMaker = require('clusters')
const districts = require('../data/districts.json')
const desks = require('../data/desks.json')

const storage = []

function all () {
  return Promise.resolve([...storage, ...(range(100).map(workspaceMock))])
}

/**
 * Pics the data and generates it into different dimensions
 * 
 * Features:
 * - District price
 * - Desk type
 * - Meeting rooms
 * 
 * @param {Object} workspace 
 * @return Array of features
 */
function generateFeatures (workspace) {
  if (typeof workspace === 'undefined') {
    return []
  }

  let districtIndex = districts.find(district => {
    return district.name === workspace.address.district
  }).priceIndex



  let deskIndex = desks.find(desk => {
    return desk.name === workspace.desk.type
  }).qualityIndex


  let meetingIndex = workspace.features.meetingRooms ? 1 : 0

  return [
    districtIndex,
    deskIndex,
    meetingIndex
  ]
}

/**
 * Clusters the workspaces returned by all in 3 groups
 * @return Promise
 */
function cluster () {
  clusterMaker.k(3)

  all().then(workspaces => {
    let features = workspaces.map(generateFeatures)

    clusterMaker.data(features)
    console.log(clusterMaker.clusters())

  })
  .catch((err) => {
    console.log('err' + err)
  })
}

function create (workspace) {
  storage.push(workspace)
  return workspace
}
module.exports = { all, create, cluster }
