'use strict';

describe('myApp.view1 module', function() {

	beforeEach(module('myApp.view1'));

	describe('view1 controller', function() {
        var scope, view1Controller;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            view1Controller = $controller('View1Ctrl', {$scope: scope});
        }));
        
        it('should show "Hello"', function(){
            expect(view1Controller.greeting).toEqual('Hello');
        });
    });
});