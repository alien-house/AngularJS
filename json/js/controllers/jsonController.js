

myJson.controller("jsonController", ["$scope","$http", function($scope,$http){
	$scope.title    = "Main Page";
	// $scope.TwitterName = TwitterTest.myFunc();

    var $uri ='http://localhost/angular/json/php/getdata.php';
	$http({
        method : "POST",
        url : $uri
    }).then(function mySucces(response) {
        $scope.items = response.data;
    }, function myError(response) {
        alert('error');
    });



	// $scope.items = TwitterService.data;
// console.log(TwitterService.data);



}]);

myJson.service("TwitterTest",function(){
    this.myFunc = function () {
        return "I am god";
    }
	// var TwitterName = "I am god";

	// return TwitterName;
});


myJson.service("TwitterService",function($http){

	var TwitterService = {};
	// TwitterService.jobItems = [];

    var $uri ='http://localhost/angular/json/php/getdata.php';
	$http.get($uri)
		.success(function(data){
			// console.log(data);
			// TwitterService.data = data;
			return data;
		})
		.error(function(data, status){
			// console.log(data);
			alert('error');
		});
    // $scope.doSearch = function() {

    //     $http({
    //         method : 'GET',
    //         url : $uri
    //     }).success(function(data, status, headers, config) {
    //         $scope.results = data.data;
    //         console.log(status);
    //         console.log(data);
    //     }).error(function(data, status, headers, config) {
    //         console.log(status);
    //     });

    // };



	// TwitterService.findById = function(id){
	// 	for(var item in TwitterService.jobItems){
	// 		if(TwitterService.jobItems[item].id === id)
	// 			 return TwitterService.jobItems[item];
	// 	}
	// };
	
});