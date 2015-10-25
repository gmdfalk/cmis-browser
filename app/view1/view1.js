"use strict";

angular.module("myApp.view1", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/view1", {
    templateUrl: "view1/view1.html",
    controller: "View1Ctrl"
  });
}])

.controller("View1Ctrl", ["$scope", function($scope) {
	$scope.greeting = "Hello";
	$scope.double = function(num) { return num * 2; };
//	var cmis = require("cmis");
	var url = "http://cmis.alfresco.com/cmisbrowser";
	var username = "admin";
	var password = "admin";
	var session = cmis.createSession(url);
	session.setGlobalHandlers(console.log, console.log);
	session.setCredentials(username, password);
	session.loadRepositories();
	console.log(session.getRepositoryInfo());
	var supportedVersion = session.defaultRepository.cmisVersionSupported;
	console.log(supportedVersion);
}]);