// config property, inject into anyn func
angular.module('miniRouting', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {  
	$stateProvider
		.state('home', {
			url: '/',
			controller: 'homeCtrl',
			templateUrl: 'js/home/homeTmpl.html'
		})
		.state('settings', {
			url: '/settings',
			controller: 'settingsCtrl',
			templateUrl: 'js/settings/settingsTmpl.html'
		})
		.state('products', {
			url: '/products/:id',
			controller: 'productsCtrl',
			templateUrl: 'js/products/productsTmpl.html'
		});

		$urlRouterProvider		//redirect all other routes to the default
			.otherwise('/')
});

