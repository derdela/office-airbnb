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
    .controller('WorkspaceDetailController', [
      'workspaceService', '$routeParams',
      WorkspaceDetailController])

  /**
   * About Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function WorkspaceListController (workspaceService, $mdBottomSheet, $q) {
    this.content = []

    workspaceService
      .loadContent()
      .then((workspaces) => {
        this.workspaces = workspaces
      }).catch(console.log)
  }

  function WorkspaceCreateController (workspaceService) {
    this.workspace = {}
    this.submit = () => {
      workspaceService.create(this.workspace)
    }
  }

  function WorkspaceDetailController (workspaceService, $routeParams) {
    this.workspace = {
      id: $routeParams.id
    }

    this.book = (workspaceId) => {
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      workspaceService.book({ workspaceId, name: 'dela', from: new Date(), to: tomorrow })
        .then(ticket => {
          this.ticket = ticket
        })
    }
  }
})()
