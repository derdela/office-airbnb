(function () {
  angular
    .module('scanner')
    .controller('ScannerController', [
      '$scope',
      'jwtHelper',
      '$route',
      ScannerController
    ])

  /**
   * @param $scope
   * @constructor
   */
  function ScannerController ($scope, jwtHelper, $route) {
    
    
    $scope.scanner = new window.Instascan.Scanner({ video: document.getElementById('preview'), mirror: false });
    $scope.active = true

    $scope.scanner.addListener('scan', function (content) {
      let ticket = JSON.parse(content).ticket
      $scope.ticket = jwtHelper.decodeToken(ticket)
      $scope.scanner.stop()
      $scope.active = false
      $scope.$apply()
    })

    window.Instascan.Camera.getCameras().then(function (cameras) {
      if (cameras.length > 0) {
        $scope.scanner.start(cameras[1] ? cameras[1] : cameras[0]);
      } else {
        console.error('No cameras found.');
      }
    }).catch(function (e) {
      console.error(e);
    });

    $scope.reload = function () {
      $route.reload()
    }
  

  }
})()
