(function() {
  'use strict';

  angular
    .module('hackHsinchu')
    .directive('openSS', OpenSS);

  /** @ngInject */
  function OpenSS() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/openSS/openSS.html',
      controller: openSS,
      controllerAs: 'openSS'
    };

    return directive;
  }

  function openSS(){
    var vm = this;
    
    vm.input = ''; 
    vm.curInput = '';
    vm.action = '';

    vm.hintChg = function(){
      var inputLen = vm.input.length;
      vm.action = vm.input.split(' ')[0];
      var numArg = vm.input.split(' ').length;
      vm.curInput = vm.input.split(' ')[numArg-1];
      vm.config = vm.input.split(' ').filter(function(substr){
        return substr !== '';
      });
    }
  
    vm.cmdHint = {
      ':help': ['hello'],
      ':call': ['agency / number']
    };
    vm.cmds = [
      ':help',
      ':call'
    ];
    vm.agencies = [
      { name: 'labor', number: '035324900'},
      { name: 'labby', number: '035324901'},
      { name: '1999', number: '1999'}
    ]
    vm.setAction = function(cmd){
      vm.input = cmd;
      vm.action = cmd;
    }
    vm.setArgs = function(action, agy){
      vm.input = action + ' ' + agy;
    }
  }

})();

