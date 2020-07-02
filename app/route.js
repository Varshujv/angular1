var app = angular.module("simple app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/home", {
        templateUrl : "templates/home.html"
    })
    .when("/about", {
        templateUrl : "templates/about.html"
    })
    .when("/contact", {
        templateUrl : "templates/contact.html"
    });
});