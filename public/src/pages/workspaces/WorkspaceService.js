(function () {
  'use strict'

  angular.module('workspace')
    .service('workspaceService', ['$http', WorkspaceList])

  /**
   * About DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadContent: Function}}
   * @constructor
   */
  function WorkspaceList ($http) {
    return {
      loadContent: () => {
        return $http
          .get('/api/workspaces')
          .then(res => {
            return res.data
          })
      },
      create: (workspace) => {
        return $http
          .post('/api/workspaces', workspace)
          .then(res => res.data)
      },
      districts: (workspace) => {
        return $http
          .get('/api/districts')
          .then(res => res.data)
      },
      desks: (desks) => {
        return $http
          .get('/api/desks')
          .then(res => res.data)
      },
      book: (data) => {
        return $http
          .post(`/api/workspaces/${data.workspaceId}/book`, data)
          .then(res => res.data)
      },
      get: (id) => {
        return $http
          .get(`/api/workspaces/${id}`)
          .then(res => {
            return res.data
          })
      }
    }
  }
})()
