'use strict';

function StudentCtrl($scope, SocketServ, DatabaseServ) {
  console.log('StudentCtrl');

  $scope.data = {

  };

  // $scope.teams = StudentServ.getAll();

  $scope.submit = function () {
    console.log($scope.data);
    SocketServ.emit("Student Answers", $scope.data);
  };

  SocketServ.on("Student Receives", function (data) {
    console.log(data);
    $scope.data = data;
  });

  // SocketServ.on("Teacher Asks", function (data) {
  //   console.log("Recived: " + data);
  // });

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

}
