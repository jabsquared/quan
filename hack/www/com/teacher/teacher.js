'use strict';

function TeacherCtrl($scope, SocketServ, DatabaseServ) {
  console.log('TeacherCtrl');

  $scope.pushQuestion = function (q) {
    console.log("Question (" + q.question + ") Pushed!");

    SocketServ.emit('Teacher Asks', q);
  };

  $scope.questions = DatabaseServ.getQuestions();
}
