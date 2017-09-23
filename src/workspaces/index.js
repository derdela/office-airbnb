const { range } = require('lodash')
const { workspaceMock } = require('./workspaceMock')
const clusterMaker = require('clusters')
const districts = require('../data/districts.json')
const desks = require('../data/desks.json')
const storage = range(100).map(workspaceMock)
const kmeans = require('node-kmeans')

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

  return new Promise((resolve, reject) => {
    let features = storage.map(generateFeatures)

    // Label based on class 
    kmeans.clusterize(features, {k: 3}, (err,res) => {
      if (err) console.error(err);
      else {

        // Order clusters based on total score
        res.sort((a, b) => {
          return a.centroid.reduce((total, num) => {return total + num;}) - b.centroid.reduce((total, num) => {return total + num;}) 
        })

        // Set labels 
        const types = ['Deluxe', 'Premium', 'Basic']
        for (let i = 0; i < 3; i++) {
          res[i].clusterInd.forEach(workspaceIndex => {
            storage[workspaceIndex].class = types[i]
          })
        }

        resolve(storage)
      }
    });
  })
}

function create (workspace) {
  storage.push(workspace)
  return workspace
}
module.exports = { all, create, cluster }
