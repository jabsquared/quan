'use strict';

function StudentServ ($scope, SocketServ, QuestionServ) {
  console.log('StudentServ');

  SocketServ.on("Student Receives", function (data) {
    console.log("Recieved: " + data);
  });

  var students = [{

  }];

  return {
    getAll : function () {
      return students;
    }
  };
}
