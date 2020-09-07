var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

/*app.get('/studentlist', function (req, res) {
    console.log("GET request recevied")
    $scope.studentlist = [
        { name: "Samet", surname: "Ercan", email: "samet@gmail.com" },
        { name: "Samet", surname: "Ercan", email: "samet@gmail.com" },
        { name: "Samet", surname: "Ercan", email: "samet@gmail.com" }
    ];
    //var studentlist = [student1, student2, student3];
    res.json(studentlist);
});*/

app.get('/studentlist', function (req, res) {
    res.send({ studentlist: studentlist })
})
app.post("/studentlist", function (req, res) {

    var todotext = req.body.todotext;



    studentlist.push({
        name: stuname,
        surname: stusurname,
    });
    res.send("Student added!")
})

app.listen(3000);
console.log("server running at port 3000");