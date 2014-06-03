'use strict';

var myApp = angular.module('myApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate'
]);
  
  myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/oquesomos', {
        templateUrl: 'views/oquesomos.html',
        controller: 'MainCtrl'
      })
      .when('/aliga', {
        templateUrl: 'views/aliga.html',
        controller: 'MainCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'MainCtrl'
      })
      .when('/contato', {
        templateUrl: 'views/contato.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
