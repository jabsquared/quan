'use strict';

function StudentCtrl($scope) {
  console.log('StudentCtrl');
  $scope.teams = [
    {
      id: 'mu',
      icon: 'img/',
      name: 'Man United',
      value: 1,
      score: 0
    }, {
      id: 'rm',
      icon: 'img/',
      name: 'Real Mad',
      value: 2,
      score: 0
    }
  ];

  $scope.data = {};
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

}
