(function() {
  'use strict';

  angular
    .module('hackHsinchu')
    .controller('carouselController', carouselController);

  /** @ngInject */
  function carouselController() {
  	var vm = this;

  	var imgUrl = [
			{
				image: 'assets/images/news1.jpg',
				text: '新竹市政府為促進官網優質化，符合民眾需求，於今(28)、明兩日舉辦「2015新竹黑客松─市府官網設計大賽」活動，林智堅市長上午在市府一樓大廳鳴槍，宣布長達33小時活動開跑，活動總獎...'
			},
			{
				image: 'assets/images/news2.jpg',
				text: '因應高齡化社會來臨，新竹市政府積極推動「在地老化、就近照顧」的老人福利政策，市長林智堅上任後新增關東、三民2個社區照顧懷據點，目前達31處，並新設4個長青共餐食堂，今(27)日新竹...'
			},
			{
				image: 'assets/images/news3.jpg',
				text: '新竹市政府繼全國首創搭公車享免費4G快速飆網服務後，再擴大飆網的服務範圍！國道客運業者「新竹客運」及「豪泰客運」響應新竹市建構智慧城市，率先在「台北-新竹」路線裝設4G wifi及...'
			}];

  	vm.slides = imgUrl;
  }
})();
