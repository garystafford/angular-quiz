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
  'ngResource', 'ngRoute'
]).config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller:  'MainCtrl'
  }).when('/about', {
    templateUrl: 'views/about.html',
    controller:  'AboutCtrl'
  }).when('/quizAdvanced', {
    templateUrl: '../views/quiz-advanced.html',
    controller:  'QuizAdvancedController'
  }).when('/quizBasic', {
    templateUrl: '../views/quiz-basic.html',
    controller:  'QuizBasicController'
  }).otherwise({
    redirectTo: '/'
  });
});