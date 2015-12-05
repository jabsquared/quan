'use strict';

function TeacherCtrl($scope) {
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
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

}
