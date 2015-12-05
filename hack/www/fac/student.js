function StudentServ ($scope, SocketServ, QuestionServ) {
  console.log('StudentServ');

  SocketServ.on("Ask Question", function (data) {
    console.log("Recived: " + data);
  });

  var students = [{

  }];

  return {
    getAll : function () {
      return students;
    }
  };
}
