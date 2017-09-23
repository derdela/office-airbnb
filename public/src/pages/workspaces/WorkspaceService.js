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
          .get('/api/workspaces/cluster')
          .then(res => res.data)
      },
      create: (workspace) => {
        return $http
          .post('/api/workspaces', workspace)
          .then(res => res.data)
      },
      book: (data) => {
        return $http
          .post(`/api/workspaces/${data.workspaceId}/book`, data)
          .then(res => res.data)
      }
    }
  }
})()
