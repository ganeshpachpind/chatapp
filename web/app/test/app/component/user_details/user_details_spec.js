import angular from 'angular'

describe('User details Component  test', () => {

    beforeEach(angular.mock.module('chatApp'));

    let scope, controller, location;

    beforeEach(angular.mock.inject(($rootScope, $componentController, $location) => {
        scope = $rootScope.$new();
        location = $location;
        spyOn(location, 'path');

        controller = $componentController('userDetails', scope);

        scope.$apply();
    }));

    it('should redirect user to chat', () => {
        controller.sender = "ganesh";
        controller.receiver = "ramesh";

        controller.onNext();

        scope.$apply();

        expect(location.path).toHaveBeenCalledWith("/chat?senderganesh&receiver?ramesh");

    });
});