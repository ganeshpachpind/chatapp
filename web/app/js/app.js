import angular from 'angular';
import component from './component/components';
import uirouter from 'angular-ui-router'
import routes from './component/app.routes'

export default angular.module('chatApp', [
    uirouter,
    component.name
]).config(routes);