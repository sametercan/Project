
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.search = "Search";
    $scope.changeName = function () {
        $scope.search = "Searching...";
    }
});
angular.module('mylist', []).controller('AppCtrl', function ($scope, $http) {


    var refresh = function () {
        $http.get("/studentlist").then(function (response) {
            console.log(response.data);
            $scope.studentlist = response.data;

        })
    }

    $scope.addstu = function () {

        $http.post("/studentlist", $scope.item).then(function (response) {
            console.log(response);
        })
        $scope.studentlist = "";

        refresh();
    }

});
/*var list = angular.module('mylist', []);
list.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("Hello World from controller");


    var refresh = function () {
        $http.get('/studentlist').then(function (response) {
            console.log("I got the data I requested");
            $scope.studentlist = response.data;
        });
    };
};*/