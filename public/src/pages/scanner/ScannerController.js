(function () {
  angular
    .module('scanner')
    .controller('ScannerController', [
      '$scope',
      ScannerController
    ])

  /**
   * @param $scope
   * @constructor
   */
  function ScannerController ($scope) {
      $scope.scanner = new window.Instascan.Scanner({ video: document.getElementById('preview') });

      $scope.scanner.addListener('scan', function (content) {
        console.log(content);
      });
      window.Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
          $scope.scanner.start(cameras[0]);
        } else {
          console.error('No cameras found.');
        }
      }).catch(function (e) {
        console.error(e);
      });
    

  }
})()
