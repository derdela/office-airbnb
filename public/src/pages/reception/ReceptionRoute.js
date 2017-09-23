(function () {
  'use strict'

  angular.module('reception')
      .config(['$routeProvider', '$locationProvider', ReceptionRoutes])

  function ReceptionRoutes ($routeProvider, $locationProvider, $q) {
    $routeProvider
        .when('/reception', {
          templateUrl: '/src/pages/reception/view/reception.html',
          controller: 'ReceptionController',
          controllerAs: 'page'
        })
  }
})()
