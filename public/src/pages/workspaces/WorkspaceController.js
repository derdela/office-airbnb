(function () {
  angular
    .module('workspace')
    .controller('WorkspaceListController', [
      'workspaceService', '$mdBottomSheet', '$q',
      WorkspaceListController
    ])
    .controller('WorkspaceCreateController', [
      'workspaceService',
      WorkspaceCreateController])

  /**
   * About Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function WorkspaceListController (workplaceService, $mdBottomSheet, $q) {
    var self = this

    self.content = []

    workplaceService
      .loadContent()
      .then(function (workspaces) {
        self.workspaces = workspaces
      }).catch(console.log)
  }

  function WorkspaceCreateController (workspaceService) {
    this.workspace = {}
    this.submit = () => {
      workspaceService.create(this.workspace)
    }
  }
})()
