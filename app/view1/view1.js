'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
	$scope.greeting = "Hello";
	$scope.double = function(num) { return num * 2; };
	var cmis = require('cmis');
	var url = '/alfresco/cmisbrowser';
	var session = cmis.createSession(url);
	session.setCredentials('admin','admin');
}]);