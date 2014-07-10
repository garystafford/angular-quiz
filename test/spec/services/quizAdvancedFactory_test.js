'use strict';

describe('Service: quizAdvancedFactory', function () {

  // load the service's module
  beforeEach(module('quizModule'));

  // instantiate service
  var quizAdvancedFactory;
  beforeEach(inject(function (_quizAdvancedFactory_) {
    quizAdvancedFactory = _quizAdvancedFactory_;
  }));

  it('should do something', function () {
    expect(!!quizAdvancedFactory).toBe(true);
  });

});
