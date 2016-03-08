//author P.Tummala

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {
    $scope.application = "My3/IIS tech touch-Angular concepts";
    var day;
    switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
        break;
}
    $http.get('index.json')
        .then(function(res){
            $scope.edata = res.data;
        })

if(day == "Friday"){
    day = "Happy friday";
} else if(day == "Saturday" || day == "Sunday") {
    day = "Happy Weekend";
}
    	$scope.idx = day;
        $scope.d = new Date();

var srikanth = {
    firstName : "first",
    lastName : "last",
    gender : "male"
}
$scope.srikanth = srikanth;
});
app.controller('nextPage',[ngRoute])
    .config('$routeProvider',function($routeProvider) {
        $routeProvider
            .when('/nextPage/', {
                controller: "nextPage",
                templateUrl: "localhost:10001/nextpage.html"
            })
    });