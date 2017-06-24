var app = angular.module("JsRunner", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/public/pages/editor.html"
        });
});