/** @format */

var app = angular.module("myapp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/homepage", { templateUrl: "homepage.html" })
    .when("/menshoes", {
      templateUrl: "Men-shoes.html?" + Math.random(),
      controller: "MenshoesCtrl",
    })
    .when("/womenshoes", {
      templateUrl: "Women-sshoes.html?" + Math.random(),
      controller: "WomenshoesCtrl",
    })
    .when("/kidshoes", {
      templateUrl: "Kid.shoes.html?" + Math.random(),
      controller: "KidshoesCtrl",
    })
    .when("/productdetail/:productId", {
      templateUrl: "productsdetail.html?" + Math.random(),
      controller: "ProductDetailCtrl",
    })
    .otherwise({ templateUrl: "homepage.html" });
});

//! Men-Shoes
app.controller(
  "MenshoesCtrl",
  function ($scope, $rootScope, $routeParams, $http) {
    $scope.products = [];
    $http.get("Data/men-products.json").then(function (reponse) {
      console.log(1);
      $scope.products = reponse.data;
    });
  }
);
//! Women-Shoes
app.controller(
  "WomenshoesCtrl",
  function ($scope, $rootScope, $routeParams, $http) {
    $scope.products = [];
    $http.get("Data/women-products.json").then(function (reponse) {
      console.log(1);
      $scope.products = reponse.data;
    });
  }
);

//!PRODUCT DETAIL CONTROL
app.controller(
  "ProductDetailCtrl",
  function ($scope, $rootScope, $routeParams, $http) {
    $scope.products = [];
    $http.get("Data/men-products.json").then(function (reponse) {
      $scope.products = $scope.products.concat(reponse.data);
    });
    $http.get("Data/women-products.json").then(function (reponse) {
      $scope.products = $scope.products.concat(reponse.data);
    
      $scope.product = $scope.products
      .filter(function (product) {
        return product.id === $routeParams.productId.substring(1);
      })
      .find(function (product) {
        return true; // tìm thấy bất kỳ sản phẩm nào trong mảng con
      });
    console.log($routeParams.productId.substring(1));
    console.log($scope.product);
    });
    
  }
);
app.controller("SizeController", function ($scope) {
  $scope.sizes = [
    "EU 36.5",
    "EU 37",
    "EU 38",
    "EU 38.5",
    "EU 39",
    "EU 40",
    "EU 41",
    "EU 42",
  ];
});
