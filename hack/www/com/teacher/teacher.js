'use strict()';

function TeacherCtrl($scope, SocketServ, DatabaseServ) {
  console.log('TeacherCtrl');

  $scope.pushQuestion = function (q) {
    console.log("Question (" + q.question + ") Pushed!");

    SocketServ.emit('Teacher Asks', q);
  };

  SocketServ.on("Teacher Receives", function (data) {
    console.log("Studnet Response:");
    console.log(data);
  });

  $scope.questions = DatabaseServ.getQuestions();
}
