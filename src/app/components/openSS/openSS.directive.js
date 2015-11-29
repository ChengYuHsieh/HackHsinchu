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
    vm.config=[];
    vm.search = 'Search';

    vm.hintChg = function(){
      var inputLen = vm.input.length;
      vm.action = vm.input.split(' ')[0];
      var numArg = vm.input.split(' ').length;
      vm.curInput = vm.input.split(' ')[numArg-1];
      vm.config = vm.input.split(' ').filter(function(substr){
        return substr !== '';
      });
      if(vm.action===':call'){
        vm.search = 'Call';
      }else{
        vm.search = 'Search';
      }
    }
  
    vm.cmdHint = {
      ':call': ['agency / number'],
      ':go': ['agency'],
      ':hi': ['mayor?']
    };
    vm.cmds = [
      ':call',
      ':go',
      ':hi',
    ];
    vm.agencies = [
      { name: '民政處', number: '477', url: 'http://dep-civil.hccg.gov.tw/'},
      { name: '財政處', number: '244', url: 'http://dep-finance.hccg.gov.tw/'},
      { name: '產業發展處', number: '246', url: 'http://dep-construction.hccg.gov.tw/'},
      { name: '教育處', number: '267', url: 'http://www.hc.edu.tw/'},
      { name: '工務處', number: '281', url: 'http://dep-publicwork.hccg.gov.tw/'},
      { name: '交通處', number: '436', url: 'http://dep-traffic.hccg.gov.tw/'},
      { name: '都市發展處', number: '431', url: 'http://urban.hccg.gov.tw/Internet/main/index.aspx'},
      { name: '社會處', number: '035352386', url: 'http://society.hccg.gov.tw/'},
      { name: '地政處', number: '320', url: 'http://land.hccg.gov.tw/'},
      { name: '勞工處', number: '035324900', url: 'http://dep-labor.hccg.gov.tw/'},
      { name: '城市行銷處', number: '539', url: 'http://dep-tourism.hccg.gov.tw/'},
      { name: '行政處', number: '379', url: 'http://dep-administration.hccg.gov.tw/'},
      { name: '人事處', number: '376', url: 'http://dep-personnel.hccg.gov.tw/'},
      { name: '主計處', number: '413', url: 'http://dep-auditing.hccg.gov.tw/'},
      { name: '政風處', number: '348', url: 'http://dep-ethics.hccg.gov.tw/'},
      { name: '警察局', number: '035224168', url: 'http://www.hccp.gov.tw/hccp/index.asp'},
      { name: '衛生局', number: '035355191', url: 'http://dep.hcchb.gov.tw/'},
      { name: '稅務局', number: '', url: 'http://www.hcct.gov.tw/'},
      { name: '環保局', number: '', url: 'http://www.hccepb.gov.tw/'},
      { name: '消防局', number: '035278949', url: 'http://www.hcfd.gov.tw/'},
      { name: '文化局', number: '', url: 'http://www.hcccb.gov.tw/'},
    ]
    vm.setAction = function(cmd){
      vm.input = cmd;
      vm.action = cmd;
      if(cmd===':call'){
        vm.search = 'Call';
      }
    }
    vm.setArgs = function(action, agy){
      vm.input = action + ' ' + agy;
      vm.config = [action, agy];
      vm.show = false;
      if(vm.config[0]===':go'){
          var result = $.grep(vm.agencies, function(e){ return e.name === vm.config[1]; });
          window.open(result[0].url, '_blank');
          vm.input = '';
          vm.action = '';
        }else if(vm.config[0]===':call'){
          var result = $.grep(vm.agencies, function(e){ return e.name === vm.config[1]; });
          var phone = result[0].number;
          var href = "tel:"+phone.toString();

          //$('#openSS-btn').replaceWith("<a href="+href+" class='btn btn-default' type='button' id='openSS-call'>{{openSS.action}}</a>")
          $('#openSS-btn').click(function(){
           vm.input='';
           vm.action='';
           //$('#openSS-call').replaceWith("<button class='btn btn-default' type='button' translate='SEARCH.button' id='openSS-btn'>Search</button>");
          });
          $('#openSS-btn').attr('href', href);
        }
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
          var pre = mod(vm.actionID+1, vm.actionFiltered.length);
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
          var pre = mod(vm.argID+1, vm.argFiltered.length);
          $("#"+vm.argID.toString()).addClass('active');
          $("#"+pre.toString()).removeClass('active');
        }else if(code === 13 && vm.action!==':hi'){
          vm.setArgs(vm.action, vm.argFiltered[vm.argID].name);
          $("#"+vm.argID.toString()).removeClass('active');
          vm.argID = -1;
        }

      }
      if(vm.config.length === 2 && code === 13){
        if(vm.config[0]===':go'){
          var result = $.grep(vm.agencies, function(e){ return e.name === vm.config[1]; });
          window.open(result[0].url, '_blank');
          vm.input = '';
        }else if(vm.config[0]===':call'){
          var result = $.grep(vm.agencies, function(e){ return e.name === vm.config[1]; });
          var phone = result[0].number;
          var href = "tel:"+phone.toString();
          $('#openSS-btn').replaceWith("<a href="+href+" class='btn btn-default' type='button' id='openSS-call'>Call</a>")
          $('#openSS-call').click(function(){
           $('#openSS-call').replaceWith("<button class='btn btn-default' type='button' translate='SEARCH.button' id='openSS-btn'>Search</button>")
          });
          vm.input = '';
        }else if(vm.config[0]===':hi'){
          // easter egg
          $('.egg').fadeIn(1500);

          setTimeout(function(){
            $('.egg').fadeOut(1000);  
          }, 8000);
          
        }

      }
    }


  }

})();

