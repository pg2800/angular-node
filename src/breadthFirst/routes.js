angular.module('breadthFirst')
.config(['$routeProvider', function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'breadthFirst/partial.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);