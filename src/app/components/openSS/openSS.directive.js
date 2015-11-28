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
  
  function mod(n, m) {
        return ((n % m) + m) % m;
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
      { name: '1999', number: '1999'}
    ]
    vm.setAction = function(cmd){
      vm.input = cmd;
      vm.action = cmd;
    }
    vm.setArgs = function(action, agy){
      vm.input = action + ' ' + agy;
    }
    vm.actionID = -1;
    vm.onArrowDown = function($event){
      var code = $event.which || $event.keyCode;
      if(code === 40){
        vm.actionID = mod(vm.actionID+1,vm.cmds.length);
        var pre = mod(vm.actionID-1,vm.cmds.length);
        $("#"+pre.toString()).removeClass('active');
        $("#"+vm.actionID.toString()).addClass('active');
      }else if(code === 38){
        vm.actionID = mod(vm.actionID-1, vm.cmds.length);
        var pre = mod(vm.actionID-1, vm.cmds.length);
        $("#"+vm.actionID.toString()).addClass('active');
        $("#"+pre.toString()).removeClass('active');
      }else if(code === 13){
        vm.setAction(vm.cmds[vm.actionID]);
      }
    }


  }

})();

