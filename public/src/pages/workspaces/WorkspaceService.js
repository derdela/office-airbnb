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
    // Promise-based API
    return {
      loadContent: function () {
        return $http
          .get('/api/workspaces')
          .then(res => res.data)
      },
      create: function (workspace) {
        return $http
          .post('/api/workspaces', workspace)
          .then(res => res.data)
      }
    }
  }
})()
