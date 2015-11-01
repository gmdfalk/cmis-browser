"use strict";

// Declare app level module which depends on views, and components
angular.module("myApp", [
  "ngRoute",
  "myApp.view1",
  "myApp.view2",
  "myApp.version",
  "ui.bootstrap"
])

.config(["$routeProvider", function($routeProvider) {
  $routeProvider.otherwise({redirectTo: "/view1"});
}])


.controller("View1Ctrl", ["$scope", function($scope) {
	$scope.greeting = "Hello";
	$scope.double = function(num) { return num * 2; };
// var cmis = require("cmis");
// var url = "http://cmis.alfresco.com/cmisbrowser";
// var username = "admin";
// var password = "admin";
// var session = cmis.createSession(url);
// session.setGlobalHandlers(console.log, console.log);
// session.setCredentials(username, password);
// session.loadRepositories();
// console.log(session.getRepositoryInfo());
// var supportedVersion = session.defaultRepository.cmisVersionSupported;
// console.log(supportedVersion);
}]);