'use strict';

describe('Directive: quizDirective', function () {

  // load the directive's module
  beforeEach(module('angulardataApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<quiz></quiz>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the quiz directive');
  }));
});
