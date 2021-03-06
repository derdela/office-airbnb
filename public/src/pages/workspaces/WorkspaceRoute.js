(function () {
  'use strict'

  angular.module('workspace')
    .config(['$routeProvider', '$locationProvider', WorkspaceRoutes])

  function WorkspaceRoutes ($routeProvider, $locationProvider, $q) {
    $routeProvider
      .when('/workspaces/create', {
        templateUrl: '/src/pages/workspaces/view/create.html',
        controller: 'WorkspaceCreateController',
        controllerAs: 'page'
      })
      .when('/workspaces', {
        templateUrl: '/src/pages/workspaces/view/content.html',
        controller: 'WorkspaceListController',
        controllerAs: 'page'
      })
      .when('/workspaces/:id', {
        templateUrl: '/src/pages/workspaces/view/detail.html',
        controller: 'WorkspaceDetailController',
        controllerAs: 'page'
      })
      .when('/', {
        templateUrl: '/src/pages/home/view/landing.html'
      })
  }
})()
