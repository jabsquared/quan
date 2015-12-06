'use strict()';

function TeacherCtrl($scope, $ionicPopup, SocketServ, DatabaseServ) {
  console.log('TeacherCtrl');

  $scope.pushQuestion = function(q) {
    console.log("Question (" + q.question + ") Pushed!");

    SocketServ.emit('Teacher Asks', q);
    var alertPopup = $ionicPopup.alert({
      title: 'Success',
      template: 'Question has been sent!'
    });
    alertPopup.then(function(res) {
      console.log('Confired!');
    });
  };

  SocketServ.on("Teacher Receives", function(data) {
    console.log("Studnet Response:");
    console.log(data);
  });

  $scope.questions = DatabaseServ.getQuestions();
}
