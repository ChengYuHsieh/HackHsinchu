(function() {
  'use strict';

  angular
    .module('hackHsinchu')
    .directive('navbar', Navbar);

  /** @ngInject */
  function Navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html'
    };

    return directive;
  }

})();
