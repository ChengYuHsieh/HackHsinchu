(function() {
  'use strict';

  angular
    .module('hackHsinchu')
    .directive('search', Search);

  /** @ngInject */
  function Search() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/search/search.html'
    };

    return directive;
  }

})();
