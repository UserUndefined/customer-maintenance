angular.module('app', ['appTemplates', 'ui.router', 'config', 'restangular'])

    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        //$rootScope.$on('$stateChangeError', function () {
        //    $state.transitionTo('login');
        //});
    }])

    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            var mainView = {
                    url: '/',
                    templateUrl: 'views/main.html',
                    controller: 'MainController'
                    },
                directivesExamplesView = {
                    url: '/directives',
                    templateUrl: 'views/directiveExamples.html',
                    controller: 'directiveExamplesController'

                },
                newCustomer = {
                    url: '/customer/new',
                    templateUrl: 'views/newCustomer.html',
                    controller: 'newCustomerController'

                },
                maintainCustomer = {
                    url: '/customer/maintain',
                    templateUrl: 'views/maintainCustomer.html',
                    controller: 'maintainCustomerController'

                },
                searchCustomer = {
                    url: '/customer/search',
                    templateUrl: 'views/searchCustomer.html',
                    controller: 'searchCustomerController'

                },
                formValidationExampleView = {
                    url: '/forms',
                    templateUrl: 'views/formValidation.html',
                    controller: 'formValidationExampleController'
                };

            $stateProvider

            .state('main', mainView)
            .state('directivesExamples', directivesExamplesView)
            .state('newCustomer', newCustomer)
            .state('maintainCustomer', maintainCustomer)
            .state('searchCustomer', searchCustomer)
            .state('formValidationExample', formValidationExampleView);

            $urlRouterProvider.otherwise('/');

        }]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
    $(".button-collapse").sideNav();
    //$('select').material_select();
});
