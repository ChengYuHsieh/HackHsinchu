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
      SEARCH:{
        button: 'Search',
        hint: 'What do you want to know?'
      },
      SERVICE_TITLE: 'What can we help you ?',
      HOTTOPIC: {
        title: 'Hot Topic',
        bus: 'Bus',
        entre: 'Entrepreneurship',
        welfare: 'Welfare',
        legal: 'Legal Consultant'
      },
      CATE1: {
        name: 'Urban Planning',
        small: '低收入戶福利措施, 老人福利措施'
      },
      CATE2: {
        name: 'Enviroment',
        small: '公害專線, 病媒防治'
      },
      CATE3: {
        name: 'Wellfare',
        small: '低收入戶福利措施, 老人福利措施'
      },
      CATE4: {
        name: 'Education',
        small: '國小、學齡前教育, 身心障礙童教育'
      },
      CATE5: {
        name: 'Traffic',
        small: '停車場業務, 施工車輛臨時佔用道路申請'
      },
      CATE6: {
        name: 'Civic Service',
        small: '宗教服務, 戶政業務-婦女生育津貼'
      },
      CATE7: {
        name: 'Land Service',
        small: '不動產糾紛調處, 耕地租佃爭議調處'
      },
      CATE8: {
        name: 'Policing',
        small: '違規車輛拖吊查詢, 計程車駕駛人執業登記證'
      },
      CATE9: {
        name: 'Labor',
        small: '服務項目及電話, 工會組織及勞資關係服務'
      },
      NEWS: 'News',
      ACTIVITY_NEWS: 'Activity',
      MAYOR: 'Mayor',
      DISCUSS: 'Discuss',
      FOOTER: {
        aboutus: 'About Us',
        jobs: 'Jobs',
        sitemap: 'Sitemap',
        agency: 'Agency Site',
        onenine: '1999 hotline',
        data: 'open data'
      },
      SUBSCRIBE: {
        title: 'Go Subscribe! Never miss it',
        keyword: 'Enter the keyword you want to subscribe',
        mail: 'Enter you email. We\'ll send you latest news',
        send_btn: 'Send'
      } 
    });
    $translateProvider.translations('zh', {
      TITLE: 'Hallo',
      SEARCH_BUTTON: '搜尋'
    });
    $translateProvider.preferredLanguage('en');
  }

})();
