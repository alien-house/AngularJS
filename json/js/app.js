// setting some modeul
var myJson = angular.module('myJson', ["ngRoute"]);

// switching view
myJson.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.
		when("/", {
			templateUrl: "views/studentList.html",
			controller: "jsonController"
		}).
		otherwise({
			redirectTo: '/'
		});
	$locationProvider.hashPrefix('');
}]);

// myJson.controller('appController', ['$scope', function($scope){
// 	$scope.message = "Welcome to my App";
// }])
