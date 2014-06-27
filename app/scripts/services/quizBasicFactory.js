'use strict';

/**
 * @ngdoc service
 * @name angulardataApp.quizBasicFactory
 * @description
 * # quizFactory
 * Factory in the angulardataApp.
 */
angular.module('angulardataApp')
  .factory('quizBasicFactory', function ($resource) {
    return $resource('./data/quiz-basic.json');
  });