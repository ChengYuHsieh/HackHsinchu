(function() {
  'use strict';

  angular
    .module('hackHsinchu')
    .controller('discussController', discussController);

  /** @ngInject */
  function discussController() {
    var vm = this;

    vm.activities = [
      {
        name: '復康巴士定車方式?',
        detail: '以就醫唯優先, 符合資格者於用車前7日至前1日止, 週一至週五...',
        solve: true
      },
      {
        name: '請問新竹市法律免費諮詢的服務?',
        detail: '1. 新竹市政府免費法律諮詢服務, 預約電話: 03-5216121#232或234...',
        solve: true
      },
      {
        name: '動物受傷了, 能不能送動物園醫治?',
        detail: '57 位市民也有相同的問題',
        solve: false
      }
    ];
  }
})();
