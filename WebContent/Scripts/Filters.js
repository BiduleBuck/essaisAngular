/// <reference path="Module.js" />


//Création d'un filtre custom
//https://www.youtube.com/watch?v=iAS_dkATtVI&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl&index=13
myApp.filter("gender", function () {
	return function (gender) {
		switch (gender) {
		case 1:
			return "Male";
		case 2:
			return "femmelle";
		case 3:
			return "3rd";
		}
		
	}
	
})
