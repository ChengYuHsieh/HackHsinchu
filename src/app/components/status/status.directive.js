(function() {
  'use strict';

  angular
    .module('hackHsinchu')
    .directive('status', Status);

  /** @ngInject */
  function Status() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/status/status.html'
    };

    return directive;
  }

})();
