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
]).config(function ($routeProvider, $locationProvider) {
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

  // use the HTML5 History API
  // http://scotch.io/quick-tips/js/angular/pretty-urls-in-angularjs-removing-the-hashtag
  $locationProvider.html5Mode(true);
});