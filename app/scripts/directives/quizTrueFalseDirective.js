'use strict';

/**
 * @ngdoc directive
 * @name angulardataApp.directive:quizTrueFalseDirective
 * @description
 * # quizTrueFalseDirective
 */
angular.module('angulardataApp')
  .directive('quizTruefalse', function () {
    return {
      scope:       {
        filterBy: '='
      },
      restrict:    'E',
      templateUrl: '/scripts/partials/quiz-truefalse.html'
    };
  });
