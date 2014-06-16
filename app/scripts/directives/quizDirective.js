'use strict';

/**
 * @ngdoc directive
 * @name angulardataApp.directive:quizDirective
 * @description
 * # quizDirective
 */
angular.module('angulardataApp')
  .directive('quizDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link    : function postLink(scope, element, attrs) {
        element.text('this is the quiz directive');
      }
    };
  });
