(function () {
  'use strict'

  angular.module('workspace')
    .config(['$routeProvider', '$locationProvider', WorkspaceRoutes])

  function WorkspaceRoutes ($routeProvider, $locationProvider, $q) {
    $routeProvider
      .when('/workspaces', {
        templateUrl: '/src/pages/workspaces/view/content.html',
        controller: 'WorkspaceController',
        controllerAs: 'page'
      })
      .when('/', {
        templateUrl: '/src/pages/workspaces/view/content.html',
        controller: 'WorkspaceController',
        controllerAs: 'page'
      })
  }
})()
