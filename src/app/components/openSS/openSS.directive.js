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
    vm.show = true;

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
      { name: 'mayor', number: '0988363636'},
      { name: 'laker', number: '0988373737'},
      { name: '1999', number: '1999'}
    ]
    vm.setAction = function(cmd){
      vm.input = cmd;
      vm.action = cmd;
    }
    vm.setArgs = function(action, agy){
      vm.input = action + ' ' + agy;
      vm.show = false;
    }
    vm.actionID = -1;
    vm.argID = -1;
    vm.actionFiltered = [];
    vm.argFiltered = [];
    vm.onArrowDown = function($event){
      var code = $event.which || $event.keyCode;
      if(vm.cmdHint.hasOwnProperty(vm.action) && vm.input.split(' ').length<=1){
        
      }else if(vm.input.split(' ').length<=1){
        if(code === 40){
          vm.actionID = mod(vm.actionID+1,vm.actionFiltered.length);
          var pre = mod(vm.actionID-1,vm.actionFiltered.length);
          $("#"+pre.toString()).removeClass('active');
          $("#"+vm.actionID.toString()).addClass('active');
        }else if(code === 38){
          vm.actionID = mod(vm.actionID-1, vm.actionFiltered.length);
          var pre = mod(vm.actionID-1, vm.actionFiltered.length);
          $("#"+vm.actionID.toString()).addClass('active');
          $("#"+pre.toString()).removeClass('active');
        }else if(code === 13){
          vm.setAction(vm.actionFiltered[vm.actionID]);
          $("#"+vm.actionID.toString()).removeClass('active');
          vm.actionID = -1;
        }

      }else{
        if(code === 40){
          vm.argID = mod(vm.argID+1,vm.argFiltered.length);
          var pre = mod(vm.argID-1,vm.argFiltered.length);
          $("#"+pre.toString()).removeClass('active');
          $("#"+vm.argID.toString()).addClass('active');
        }else if(code === 38){
          vm.argID = mod(vm.argID-1, vm.argFiltered.length);
          var pre = mod(vm.argID-1, vm.argFiltered.length);
          $("#"+vm.argID.toString()).addClass('active');
          $("#"+pre.toString()).removeClass('active');
        }else if(code === 13){
          vm.setArgs(vm.action, vm.argFiltered[vm.argID].name);
          $("#"+vm.argID.toString()).removeClass('active');
          vm.argID = -1;
        }

      }
    }


  }

})();

