(function () {
  'use strict'

  angular.module('scanner')
    .config(['$routeProvider', '$locationProvider', ScannerRoutes])

  function ScannerRoutes ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/scan', {
        templateUrl: '/src/pages/scanner/view/scanner.html',
        controller: 'ScannerController',
        controllerAs: 'vm'
      })
  }
})()
