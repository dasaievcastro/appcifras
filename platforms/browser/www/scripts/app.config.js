angular.module('appcifra').config(['$locationProvider','$routeProvider',function config($locationProvider,$routeProvider){
	$locationProvider.hashPrefix('!');
	$routeProvider.when('/favourites', {
		template:'<favourite></favourite>'
	}).when('/search', {
		template:'<search></search>'
	}).otherwise('/favourites')
	
}
])