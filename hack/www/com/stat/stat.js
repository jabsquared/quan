'use strict()';

function StatCtrl($scope, SocketServ) {
  console.log('StatCtrl');

  $scope.data = {};

  //WHEN STUENT GOT QUESTION
  SocketServ.on("Student Receives", function (data) {
    console.log(data);
    // EMPTY PAGE WITH 0
    $scope.data.question = data.question;
    $scope.data.answers = data.answers;
    $scope.data.scores = [0,0,0,0];
  });

  //Add student answer to statics
  SocketServ.on("Teacher Receives", function(data) {
    console.log("Studnet Response:");
    console.log(data);
    $scope.score[data.answer]++;
  });

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

}
