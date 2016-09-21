/// <reference path="Angular.js" />

var myApp = angular.module("recuperationJSONModule", []);

myApp.controller("recuperationJSONController", function ($scope) {
		
	//Variables
	
	//Méthodes
	$scope.sortData = function ($scope, $http) {
		$http.post('/www.w3schools.com/angular/customers.php/')
			.success(function (response) {
				$scope.records = response.data.records;
				
			})
		
	}

});