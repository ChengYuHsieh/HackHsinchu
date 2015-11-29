(function() {
  'use strict';

  angular
    .module('hackHsinchu')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $translateProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    //translator
    $translateProvider.translations('en', {
      TITLE: 'Hello',
      MENU1: 'News',
      MENU2: 'Resources',
      MENU3: 'City Government',
      MENU4: 'Events',
      MENU5: 'Connect',
      SEARCH:{
        button: 'Search',
        hint: 'What do you want to know ?'
      },
      SERVICE_TITLE: 'How can we help you ?',
      HOTTOPIC: {
        title: 'Hot keywords',
        bus: 'Bus',
        entre: 'Entrepreneurship',
        welfare: 'Subsidy',
        legal: 'Paper Loss'
      },
      STATUS: {
        date: 'Today, Nov 28, 2015',
        loc: 'Northern Hsinchu City',
        w1: 'Sunny, Eighteen degree',
        w2: 'Rainfall probability 13%',
        r1: 'Rd. Chung-shan',
        r2: 'Rd. Dong-da',
        r3: 'Rd. Ching-chu',
        r4: 'Rd. Guang-hua'
      },
      CATE1: {
        name: 'Urban Development',
        small: 'Public Housing, Youth Loans'
      },
      CATE2: {
        name: 'Environment Protection',
        small: 'Disease Vector Control, Noise'
      },
      CATE3: {
        name: 'Society',
        small: 'Pregnancy Subsidies, Child Welfare'
      },
      CATE4: {
        name: 'Education',
        small: 'Public Kindergarten Enrollment'
      },
      CATE5: {
        name: 'Transportation',
        small: 'Parking Lot Affairs'
      },
      CATE6: {
        name: 'Civil Affairs',
        small: 'Legal Services to Citizens'
      },
      CATE7: {
        name: 'Land Administration',
        small: 'Real Estate Arguments'
      },
      CATE8: {
        name: 'Policing',
        small: 'Lost Passport, Towing of Vehicles'
      },
      CATE9: {
        name: 'Labor Services',
        small: 'Labor welfare, Employment'
      },
      NEWS: 'News',
      ACTIVITY_NEWS: 'Events',
      MAYOR: 'Mayor says',
      DISCUSS: 'Citizens are talking about ..',
      FOOTER: {
        aboutus: 'About Us',
        jobs: 'Jobs',
        sitemap: 'Site map',
        agency: 'Directory of City Agencies',
        onenine: '1999 Hotline',
        data: 'Open data'
      },
      SUBSCRIBE: {
        title: 'Stay updated',
        keyword: 'Enter the keyword you want to subscribe',
        mail: 'Enter your email. We\'ll send you the latest subscription',
        send_btn: 'Send'
      } 
    });
    $translateProvider.translations('zh', {
      TITLE: 'Hello',
      MENU1: '即時消息',
      MENU2: '市民資源',
      MENU3: '市府介紹',
      MENU4: '活動訊息',
      MENU5: '和政府連結',
      SEARCH:{
        button: '搜尋',
        hint: '你想知道什麼與新竹市相關的資訊呢？'
      },
      STATUS: {
        date: '今天 中華民國 104 年 11 月 28 日', 
        loc: '新竹市北區',
        w1: '今天天氣晴朗, 目前氣溫18度',
        w2: '有霧, 易過敏者出門建議攜帶口罩',
        r1: '中山路(中正路至西大路)',
        r2: '東大路三段(天府路至延平路)',
        r3: '金竹路(鐵道路二段110巷至武陵路)',
        r4: '光華街(經國路至湳雅街)'
      },
      SERVICE_TITLE: '你需要哪方面的服務或協助呢？',
      HOTTOPIC: {
        title: '熱門關鍵字',
        bus: '復康巴士',
        entre: '創業計畫',
        welfare: '老人津貼',
        legal: '證件遺失'
      },
      CATE1: {
        name: '都市發展服務',
        small: '綜合規劃、更新'
      },
      CATE2: {
        name: '環境保護服務',
        small: '噪音、病媒防治'
      },
      CATE3: {
        name: '社會福利服務',
        small: '低收戶、身心障礙'
      },
      CATE4: {
        name: '教育服務',
        small: '學齡前教育'
      },
      CATE5: {
        name: '交通服務',
        small: '停車場、施工道路'
      },
      CATE6: {
        name: '民政服務',
        small: '客家服務、徵兵'
      },
      CATE7: {
        name: '地政服務',
        small: '不動產糾紛、耕地'
      },
      CATE8: {
        name: '警政服務',
        small: '違規拖吊、遺失'
      },
      CATE9: {
        name: '勞工服務',
        small: '就業安全服務'
      },
      NEWS: '市府新聞',
      ACTIVITY_NEWS: '活動資訊',
      MAYOR: '市長想說',
      DISCUSS: '市民正在討論',
      FOOTER: {
        aboutus: '關於我們',
        jobs: '徵才公告',
        sitemap: '網站地圖',
        agency: '機關網站',
        onenine: '1999 服務專線',
        data: '開源資料'
      },
      SUBSCRIBE: {
        title: '使用訂閱，不錯過重要消息 !',
        keyword: '輸入你想訂閱的關鍵字，例如兵役、創業',
        mail: '輸入你的電子信箱，我們會將最新消息發送給你',
        send_btn: '送出'
      } 
    });
    $translateProvider.preferredLanguage('zh');
  }

})();
