'use strict';

/**
 * @ngdoc service
 * @name quizModule.quizBasicFactory
 * @description
 * # quizBasicFactory
 * Factory in the quizModule.
 */
angular.module('quizModule')
  .factory('quizBasicFactory', function ($resource) {
    return $resource('./data/quiz-basic.json');
  });