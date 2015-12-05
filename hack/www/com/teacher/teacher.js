'use strict()';

function TeacherCtrl($scope, SocketServ, QuestionServ) {
  console.log('TeacherCtrl');

  $scope.pushQuestion = function (q) {
    console.log("Question (" + q.question + ") Pushed!");
    SocketServ.emit('Teacher Asks', q);
  };

  SocketServ.on("Student Answers", function (data) {
    
  });

  $scope.questions = QuestionServ.getAll();
}
