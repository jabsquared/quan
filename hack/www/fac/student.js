function StudentServ ($scope, SocketServ, QuestionServ) {
  console.log('StudentServ');

  SocketServ.on("Student Receives", function (data) {
    console.log("Recived: " + data);
  });

  var students = [{

  }];

  return {
    getAll : function () {
      return students;
    },
  };
}
