(function () {
  angular.module('reception')
        .controller('ReceptionController', ['workspaceService',
          ReceptionController])

  function ReceptionController (workspaceService) {
    this.guests = []

    workspaceService
            .get(1)
            .then(workspace => {
              this.guests = workspace.bookings
            })
  }
})()
