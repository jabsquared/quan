'use strict()';

function StudentServ () {
  console.log('StudentServ');

  var students = [
    {
      id: 'mu',
      icon: 'img/',
      question: 'When was WWI started?',
      value: 1,
      score: 0
    }, {
      id: 'rm',
      icon: 'img/',
      question: 'What is the capital of Oregon?',
      value: 2,
      score: 0
    },
    {
      id: 'se',
      icon: 'img/',
      question: 'How old is Obama?',
      value: 2,
      score: 0
    },
    {
      id: 'xd',
      icon: 'img/',
      question: 'None of the above',
      value: 2,
      score: 0
    }
  ];

  return {
    getAll : function () {
      return students;
    },
  };
}
