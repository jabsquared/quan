'use strict';

function TeacherCtrl($scope, SocketServ) {
  console.log('TeacherCtrl');

  $scope.pushQuestion = function (q) {
    console.log("Question (" + q + ") Pushed!");
  }

  $scope.questions = [
    {
      question: "When was WWI started?",
      category: "History"
    },
    {
      question: "What is the capital of Oregon?",
      category: "Geography",
      answers: [
        "1992",
        "1942",
        "1893",
        "1953"
      ]
    },
    {
      question: "How old is Obama?",
      category: "Trivia",
      answers: [
        "45",
        "39",
        "51",
        "41"
      ]
    }
  ];

}
