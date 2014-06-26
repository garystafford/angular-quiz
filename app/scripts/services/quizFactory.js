'use strict';

/**
 * @ngdoc service
 * @name angulardataApp.quizFactory
 * @description
 * # quizFactory
 * Factory in the angulardataApp.
 */
angular.module('angulardataApp')
  .factory('quizFactory', function ($resource) {
    return $resource('./data/quiz-advanced.json');
  });