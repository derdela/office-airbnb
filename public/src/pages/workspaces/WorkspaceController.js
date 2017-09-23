(function () {
  angular
    .module('workspace')
    .controller('WorkspaceController', [
      'workspaceService', '$mdBottomSheet', '$q',
      WorkspaceController
    ])

  /**
   * About Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function WorkspaceController (aboutService, $mdBottomSheet, $q) {
    var self = this

    self.content = {}

    aboutService
      .loadContent()
      .then(function (workspaces) {
        self.workspaces = workspaces
      }).catch(console.log)
  }
})()
