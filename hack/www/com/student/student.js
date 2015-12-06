'use strict()';

function StudentCtrl($scope, $ionicPopup, SocketServ, DatabaseServ) {
  console.log('StudentCtrl');

  $scope.data = {

  };

  var myPopup = $ionicPopup.show({
     template: '<input type="text" ng-model="data.name">',
     title: 'Enter Your Name',
     subTitle: '',
     scope: $scope,
     buttons: [
      //  { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.data.name) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.name;
           }
         }
       },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', $scope.data);
   });

  $scope.submit = function () {
    console.log($scope.data);
    SocketServ.emit("Student Answers", $scope.data);
  };

  SocketServ.on("Student Receives", function (data) {
    console.log(data);
    var name = $scope.data.name;
    $scope.data = data;
    $scope.data.name = name;
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
