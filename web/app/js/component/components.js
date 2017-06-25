import angular from 'angular'
import userDetails from './user_details/user_details';

export default angular
    .module('chatApp.component', [
        userDetails.name
    ]);
