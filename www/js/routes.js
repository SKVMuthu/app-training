angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('muthuMobile', {
    url: '/page1',
    templateUrl: 'templates/muthuMobile.html',
    controller: 'muthuMobileCtrl'
  })

  .state('aboutUs', {
    url: '/page2',
    templateUrl: 'templates/aboutUs.html',
    controller: 'aboutUsCtrl'
  })

  .state('amman', {
    url: '/page3',
    templateUrl: 'templates/amman.html',
    controller: 'ammanCtrl'
  })

  .state('amman2', {
    url: '/page4',
    templateUrl: 'templates/amman2.html',
    controller: 'amman2Ctrl'
  })

  .state('amman3', {
    url: '/page5',
    templateUrl: 'templates/amman3.html',
    controller: 'amman3Ctrl'
  })

  .state('page', {
    url: '/page6',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page6')


});