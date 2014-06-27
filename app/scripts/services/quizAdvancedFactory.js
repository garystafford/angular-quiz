'use strict';

/**
 * @ngdoc service
 * @name angulardataApp.quizAdvancedFactory
 * @description
 * # quizFactory
 * Factory in the angulardataApp.
 */
angular.module('angulardataApp')
  .factory('quizAdvancedFactory', function ($resource) {
    return $resource('./data/quiz-advanced.json');
  });