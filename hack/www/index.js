// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var app = angular.module('quan', [
    'ionic',
    'btford.socket-io'
  ])
  .config(config)
  .run(run)
  .factory('SocketServ', SocketServ)
  .factory('DatabaseServ', DatabaseServ)
  .controller('HomeCtrl', HomeCtrl)
  .controller('StatCtrl', StatCtrl)
  .controller('TeacherCtrl', TeacherCtrl)
  .controller('StudentCtrl', StudentCtrl);

function config($stateProvider, $urlRouterProvider) {

  // if none of the above states are matched, use this as the fallback
  console.log('config');
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
      url: '/',
      templateUrl: 'com/home/home.html',
      controller: 'HomeCtrl'
    })
    .state('teacher', {
      url: '/teacher',
      templateUrl: 'com/teacher/teacher.html',
      controller: 'TeacherCtrl'
    })
    .state('student', {
      url: '/student',
      templateUrl: 'com/student/student.html',
      controller: 'StudentCtrl'
    })
    .state('stat', {
      url: '/stat',
      templateUrl: 'com/stat/stat.html',
      controller: 'StatCtrl'
    });
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

function run($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    console.log('run');
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
