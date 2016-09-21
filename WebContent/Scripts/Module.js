/// <reference path="Angular.js" />

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
	
	//Données de bouchon
	var employees = [
		{ name: "Ben", gender: 1, salary: 55000, city: "London"},
		{ name: "Sara", gender: 2, salary: 68000, city: "Chennai"},
		{ name: "Robert", gender: 1, salary: 10000, city: "Paris"},
		{ name: "Gessifer", gender: 3, salary: 1, city: "NewLookLondon"},		
	];
	
	//Variables
	$scope.message = "Angular JS Tutorial - Exemple de tableau trié"; 
	$scope.employees = employees;
	$scope.sortColumn = "name";
	$scope.reverseSort = false;
	$scope.employeesListe = "WEB-INF/employeesListe.html";
	$scope.employeesTable = "WEB-INF/employeesTable.html";
	$scope.employeesView = "WEB-INF/employeesTable.html";
	
	//Méthodes
	$scope.sortData = function (column) {
		$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
		$scope.sortColumn = column;
	}
	
	$scope.getSortClass = function (column) {
		if($scope.sortColumn == column){
			return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
		}
		return '';
	}
});