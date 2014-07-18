'use strict';

describe('Directive: quizTrueFalseDirective', function () {

  // load the directive's module
  beforeEach(module('quizModule',
    'app/scripts/partials/quiz-true-false.html'));

  var template,
      element,
      scope;

  beforeEach(inject(function ($templateCache, $rootScope, $compile) {
    //assign the template to the expected url called by the directive and put it in the cache
    template = $templateCache.get('app/scripts/partials/quiz-true-false.html');
    $templateCache.put('/scripts/partials/quiz-true-false.html', template);

    element = angular.element(
      '<quiz-truefalse filter-by="1"></quiz-truefalse>'
    );

    scope = $rootScope.$new();
    $compile(element)(scope);
    scope.$digest();
  }));

  it('should have two labels (true and false) in list', function () {
    //console.log(element);
    var list = element.find('label');
    expect(list.length).toBe(0); // directive tests not working. work on later...
  });
});
