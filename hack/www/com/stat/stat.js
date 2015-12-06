'use strict()';

function StatCtrl($scope, $timeout,SocketServ, DatabaseServ) {
  console.log('StatCtrl');

  //for timer
  $scope.counter = 15;
  var stopped;

  var countdown = function() {
    if($scope.counter < 1){
      console.log('Stopping timer!');
      //show correct answer!
      stop();
      return;
    }
    stopped = $timeout(function() {
      console.log($scope.counter);
      $scope.counter--;
      countdown();
    }, 1000);

  };

  var stop = function() {
    $timeout.cancel(stopped);
  };

  $scope.data = {};

  //WHEN STUENT GOT QUESTION
  SocketServ.on("Student Receives", function (data) {
    stop();
    // NOTE: UNCOMMENT IF PRESENT
    // $scope.counter = 15;
    $scope.counter = 2;

    countdown();
    console.log(data);
    // EMPTY PAGE WITH 0
    $scope.data = data;
    $scope.data.scores = [0,0,0,0];
    $scope.data.count = 0;

    console.log("Answer: " + data.cr);
  });

  //Add student answer to statics
  SocketServ.on("Teacher Receives", function(data) {
    console.log("Studnet Response:");
    $scope.data.count++;
    console.log(data);
    $scope.data.scores[data.answer]++;
    console.log($scope.data.scores);
  });

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

}
