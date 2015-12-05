'use strict()';

function TeacherCtrl($scope) {
  console.log('TeacherCtrl');

  $scope.pushQuestion = function (q) {
    console.log("Question (" + q.question + ") Pushed!");
  };

  $scope.questions = [
    {
      question: "What are you less likely to leave home without?",
      category: "NONE",
      answers: [
        "Keys",
        "Wallet",
        "Phone",
        "ID"
      ]
    },
    {
      question: "What is the the most common use of the phone?",
      category: "NONE",
      answers: [
        "Text",
        "Social Media",
        "Web",
        "Games"
      ]
    },
    {
      question: "What do teachers fear the most?",
      category: "NONE",
      answers: [
        "SnapChat",
        "Instagram",
        "Yoga",
        "Phone"
      ]
    },
    {
      question: "What is the teacher's greatest challenge in a classroom?",
      category: "NONE",
      answers: [
        "Interaction",
        "Budget",
        "Class Size",
        "Tests"
      ]
    },
    {
      question: "What other tools have been used that haven’t worked?",
      category: "NONE",
      answers: [
        "Chromebook",
        "Smartboard",
        "Pencil",
        "Clicker",
        "Phone"
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
