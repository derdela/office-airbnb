(function () {
  'use strict'

  angular.module('menu')
    .service('menuService', ['$q', MenuService])

  /**
   * Menu DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadMenu: Function}}
   * @constructor
   */
  function MenuService ($q) {
    var menuItems = [
      {
        title: 'Home',
        href: '#!/home',
        colorHex: 'FF595B',
        style: 'landing'
      },
      {
        title: 'Workspaces',
        href: '#!/workspaces',
        colorHex: 'FF595B'
      },
      {
        title: 'Create',
        href: '#!/workspaces/create',
        colorHex: 'FF595B'
      },
      {
        title: 'Reception',
        href: '#!/reception'
      },
      {
        title: 'scan',
        href: '#!/scan',
        colorHex: 'FF595B'
      }
    ]

    // Promise-based API
    return {
      loadMenu: function () {
        // Simulate async nature of real remote calls
        return $q.when(menuItems)
      }
    }
  }
})()
