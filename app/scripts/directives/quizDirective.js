'use strict';

/**
 * @ngdoc directive
 * @name angulardataApp.directive:quizDirective
 * @description
 * # quizDirective
 */
angular.module('angulardataApp')
  .directive('quizMultiplechoice', function () {
    return {
      transclude:  true,
      scope:       {
        filterBy: '='
      },
      restrict:    'E',
      templateUrl: '/scripts/partials/quiz-multiplechoice.html'
    };
  });
