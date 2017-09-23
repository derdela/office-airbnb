const { range } = require('lodash')
const { workspaceMock } = require('./workspaceMock')
const clusterMaker = require('clusters')
const districts = require('../data/districts.json')
const desks = require('../data/desks.json')
const storage = range(100).map(workspaceMock)

function all () {
  return storage
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
  }).qualityIndex * 4


  let meetingIndex = workspace.features.meetingRooms ? 13 : 7

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
  let features = storage.map(generateFeatures)
  
  clusterMaker.k(3)
  clusterMaker.data(features)
  clusterMaker.clusters()

  // Label based on class 
  

}

function create (workspace) {
  storage.push(workspace)
  return workspace
}
module.exports = { all, create, cluster }
