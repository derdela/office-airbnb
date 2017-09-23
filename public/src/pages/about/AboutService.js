(function(){
  'use strict';

  angular.module('about')
         .service('aboutService', ['$q', AboutService]);

  /**
   * About DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadContent: Function}}
   * @constructor
   */
  function AboutService($q){
    var data = {
      name  : 'Sharespace & co',
      image : 'http://dreamstop.com/wp-content/uploads/2013/07/office-dream-meaning.jpeg',
      price : 34,
      address: {
        street: 'Haupstrasse',
        number: 12,
        city: 'Berlin',
        plz: 19228
      }
    };

    // Promise-based API
    return {
      loadContent : function() {
        // Simulate async nature of real remote calls
        return $q.when(data);
      }
    };
  }

})();
