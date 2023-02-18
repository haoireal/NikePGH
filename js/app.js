/** @format */

var app = angular.module("myapp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/homepage", {
      templateUrl: "homepage.html",
    })
    .when("/about", {
      templateUrl: "Women-sshoes.html",
    })
    .otherwise({
      redirectTo: "/homepage",
    });
});

app.controller("homeCtrl", function ($scope) {
  // Code for the Home page controller
});

app.controller("aboutCtrl", function ($scope) {
  // Code for the About page controller
});
