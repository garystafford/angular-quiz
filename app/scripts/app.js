'use strict';

/**
 * @ngdoc overview
 * @name angulardataApp
 * @description
 * # angulardataApp
 *
 * Main module of the application.
 */
angular.module('angulardataApp', [
  'ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch'
]).config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller:  'MainCtrl'
  }).when('/about', {
    templateUrl: 'views/about.html',
    controller:  'AboutCtrl'
  }).when('/quiz', {
    templateUrl: 'views/quiz.html',
    controller:  'QuizCtrl'
  }).otherwise({
    redirectTo: '/'
  });
});
