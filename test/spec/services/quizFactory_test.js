'use strict';

describe('Service: quizFactory', function () {

  // load the service's module
  beforeEach(module('angulardataApp'));

  // instantiate service
  var quizFactory;
  beforeEach(inject(function (_quizFactory_) {
    quizFactory = _quizFactory_;
  }));

  it('should do something', function () {
    expect(!!quizFactory).toBe(true);
  });

});
