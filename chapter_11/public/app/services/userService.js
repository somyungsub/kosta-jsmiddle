angular.module('userService', [])

.factory('User', function($http) {
    // http -> 전역변수 -> nodejs가 알아서 만듬 (프로그램 실행직전)
    // 서비스 이름 : User
	// create a new object
	var userFactory = {};

	// URL : /api/users 가 호출 되면 실행되는!!
	// get a single user
	userFactory.get = function(id) {
		return $http.get('/api/users/' + id);
	};

	// get all users
	userFactory.all = function() {
		return $http.get('/api/users/');
	};

	// create a user
	userFactory.create = function(userData) {
		return $http.post('/api/users/', userData);
	};

	// update a user
	userFactory.update = function(id, userData) {
		return $http.put('/api/users/' + id, userData);
	};

	// delete a user
	userFactory.delete = function(id) {
		return $http.delete('/api/users/' + id);
	};

	// return our entire userFactory object
	return userFactory;

});