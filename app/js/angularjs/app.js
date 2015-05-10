var firefoxOSSampleApp = angular.module('FirefoxOSSample', [
  'ngRoute',
	'controllers'
]);

firefoxOSSampleApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/about', {
			templateUrl: 'partials/about.html',
			controller: 'AboutController'
		});
  	$routeProvider.when('/something', {
  		templateUrl: 'partials/something.html',
  		controller: 'SomethingController'
  	});
  	$routeProvider.when('/something/:id', {
    	templateUrl: 'partials/something_detail.html',
    	controller: 'SomethingDetailController'
  	});
    $routeProvider.when('/something-else', {
      templateUrl: 'partials/something_else.html',
      controller: 'SomethingElseController'
    });
  	$routeProvider.otherwise({
      redirectTo: '/about'
  	});
}]);

