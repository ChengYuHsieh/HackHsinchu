(function() {
  'use strict';

  angular
    .module('hackHsinchu')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $translate) {
    var vm = this;

	  $scope.changeLanguage = function (key) {
	    $translate.use(key);
	  };
  }
})();
