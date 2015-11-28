(function() {
  'use strict';

  angular
    .module('hackHsinchu')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
