import angular from 'angular'


class UserDetailsController {

    constructor($location) {
        let vm = this;
        vm.location = $location;
    }

    onNext() {
        let vm = this;
        vm.location.path("/chat?sender" + vm.sender + "&receiver?" + vm.receiver);
    }
}

UserDetailsController.$inject = ['$location']
export default angular
    .module('chatApp.component.userDetails', [])
    .component('userDetails', {
        template: require('./user_details.html'),
        controller: UserDetailsController
    });
