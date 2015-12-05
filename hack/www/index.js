// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('FlashDeal', ['ionic', 'FlashDeal.Ctrls'])
  .run(run)
  .config(config);

function run($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}

angular.module('FlashDeal.Ctrls', [])
  .controller('MenuCtrl', MenuCtrl)
  .controller('DealListCtrl', DealListCtrl)
  .controller('DealListsCtrl', DealListsCtrl);

function config($stateProvider, $urlRouterProvider) {

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/deallists');

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'com/menu/menu.html',
      controller: 'MenuCtrl'
    })
    .state('app.deallists', {
      url: '/deallists',
      views: {
        'menuContent': {
          templateUrl: 'com/deal/lists.html',
          controller: 'DealListsCtrl'
        }
      }
    })
    // .state('app.deal', {
    //   url: '/deallists/:dealId',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'templates/playlist.html',
    //       controller: 'DealListCtrl'
    //     }
    //   }
    // });
}
