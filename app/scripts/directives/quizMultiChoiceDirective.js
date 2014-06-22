'use strict';

/**
 * @ngdoc directive
 * @name angulardataApp.directive:quizMultiChoiceDirective
 * @description
 * # quizMultiChoiceDirective
 */
angular.module('angulardataApp')
  .directive('quizMultichoice', function () {
    return {
      scope:       {
        filterBy: '='
      },
      restrict:    'E',
      templateUrl: '/scripts/partials/quiz-multi-choice.html'
    };
  });
