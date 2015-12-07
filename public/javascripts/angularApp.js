var app = angular.module('informationWebApp', ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.ejs',
                controller  : 'mainController'
            })

             // route for the info page
            .when('/info', {
                templateUrl : 'pages/info.ejs',
                controller  : 'infoController'
            })

             // route for the informations page
            .when('/informations', {
                templateUrl : 'pages/informations.ejs',
                controller  : 'informationsController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.ejs',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.ejs',
                controller  : 'contactController'
            })
            .when('/table', {
                templateUrl : 'pages/table.ejs',
                controller  : 'tableController' 
            });
    });


  
  


