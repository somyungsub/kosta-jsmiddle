angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	/*
	    페이지 연결 : Route
	 	보여질 view : templateUrl  -> ng-view 매핑
	 	컨트롤		: controller
	 	컨트롤러별칭: controllerAs -> html에서 사용할 명칭
	 */

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'app/views/pages/home.html'
		})
		
		// login page
		.when('/login', {
			templateUrl : 'app/views/pages/login.html',
   			controller  : 'mainController',
            controllerAs: 'login'
		})
		
		// show all users
		.when('/users', {
			templateUrl: 'app/views/pages/users/all.html',
			controller: 'userController',       // userCtrl.js
			controllerAs: 'user'                 // 컨트롤러 별칭
		})

		// form to create a new user
		// same view as edit page
		.when('/users/create', {
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userCreateController', // userCtrl.js
			controllerAs: 'user'                  // 컨트롤러 별칭
		})

		// page to edit a user
		.when('/users/:user_id', {
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userEditController',   // userCtrl.js
			controllerAs: 'user'                  // 컨트롤러 별칭
		});

	$locationProvider.html5Mode(true);

});
