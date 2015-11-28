(function() {
  'use strict';

  angular
    .module('hackHsinchu')
    .controller('activityController', activityController);

  /** @ngInject */
  function activityController() {
    var vm = this;

    vm.activities = [
      {
        name: '「新竹‧漫步小旅行」1小時免費導覽服務',
        date: '104/11/28~12/04 每週六、日 14:00 ~ 15：00',
        image: 'assets/images/activity1.png'
      },
      {
        name: '冬季有氧提斯初級班開始招生囉!!',
        date: '104/11/28~12/04 每週六、日 14:00 ~ 15：00',
        image: 'assets/images/activity2.png'
      },
      {
        name: '「愛拍新竹事」新竹市地方文化攝影比賽',
        date: '104/11/28~12/04 每週六、日 14:00 ~ 15：00',
        image: 'assets/images/activity3.png',
      },
      {
        name: '冬季有氧提斯初級班開始招生囉!!',
        date: '104/11/28~12/04 每週六、日 14:00 ~ 15：00',
        image: 'assets/images/activity4.png'
      }
    ];
  }
})();
