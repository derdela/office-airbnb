(function () {
  angular
    .module('workspace')
    .controller('WorkspaceListController', [
      'workspaceService', '$mdBottomSheet', '$q',
      WorkspaceListController
    ])
    .controller('WorkspaceCreateController', [
      'workspaceService', '$http',
      WorkspaceCreateController])
    .controller('WorkspaceDetailController', [
      'workspaceService', '$routeParams', '$mdToast',
      WorkspaceDetailController])

  function WorkspaceListController (workspaceService, $mdBottomSheet, $q) {
    this.content = []

    workspaceService
      .loadContent()
      .then((workspaces) => {
        this.workspaces = workspaces
        this.randomImage = () => { return Math.floor(Math.random() * 7) + 1 }
      }).catch(console.log)
  }

  function WorkspaceCreateController (workspaceService, $http) {
    this.workspace = {}
    this.districts = []
    this.deskTypes = [
      'Open Space',
      'Shared Room',
      'Individual Room'
    ]
    $http.get('/api/districts').then(res => {
      this.districts = res.data
    })
    this.submit = () => {
      workspaceService.create(this.workspace)
    }
  }

  function WorkspaceDetailController (workspaceService, $routeParams, $mdToast) {
    this.booking = {
      workspaceId: $routeParams.id
    }

    workspaceService.get($routeParams.id).then(workspace => {
      this.workspace = workspace
    })

    this.book = (workspaceId) => {
      workspaceService.book(this.booking)
        .then(ticket => {
          this.ticket = ticket
          $mdToast.show(
            $mdToast.simple()
              .textContent('Booked successfully')
              .hideDelay(3000)
          )
        })
    }
  }
})()
