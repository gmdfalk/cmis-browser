'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should show "\o/"', inject(function($controller) {
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl.greeting).toBe("\o/");
    }));

  });
});