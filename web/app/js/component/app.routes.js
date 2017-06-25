
routes.$inject = ['$urlRouterProvider', '$stateProvider'];

export default function routes($urlRouterProvider, $stateProvider) {
    $stateProvider.state('welcome', {
        url: '/user',
        component: 'userDetails'
    });
}

