"use strict";
 angular.module('config', [])

.constant('TEST_API_URL', 'https://test.testapp.net/development/api/')

;;angular.module('appTemplates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("views/directiveExamples.html",
    "<h1>AngularJs Custom Directive Examples</h1><p>This page contains a few examples of custom AngularJs directives using different techniques and functionality.</p><p>Here is an inline custom directive displaying a customer name scope property</p><exp-in-line-directive></exp-in-line-directive><p>Here is a custom directive using an HTML template to display all customer details:</p><exp-html-directive></exp-html-directive>");
  $templateCache.put("views/directives/directiveExampleHtmlTemplate.html",
    "<hr><p><h3>Customer Name:</h3>{{customer.name}}</p><p><h3>Customer Telephone:</h3>{{customer.telephone}}</p><p><h3>Customer Email:</h3>{{customer.email}}</p><hr>");
  $templateCache.put("views/formValidation.html",
    "<h1>AngularJs Form Validation Example</h1><form novalidate class=simple-form>Name: <input ng-model=user.name required><br>E-mail: <input type=email ng-model=user.email class=validate required><br><input type=button ng-click=reset() value=\"Reset\"> <input type=submit ng-click=update(user) value=\"Save\"></form><pre>user = {{user | json}}</pre><pre>master = {{master | json}}</pre>");
  $templateCache.put("views/main.html",
    "<div class=\"col s12 m12 l12\"><div class=row><h4>Customer Maintenance Application</h4></div><div class=\"col s12 m6\"><h5 class=promo-caption>New Customer</h5><p>Create new customer entities and save them to the datastore for use on connected applications.</p><a id=new-csutomer class=\"btn waves-effect waves-light\" href=#/customer/new>New Customer<i class=\"material-icons right\">assignment_ind</i></a></div><div class=\"col s12 m6\"><h5 class=promo-caption>Maintain Customer</h5><p>When you need to amend customer or contact details, use this application to get those details updated.</p><a id=maintain-csutomer class=\"btn waves-effect waves-light\" href=#/customer/maintain>Maintain Customer<i class=\"material-icons right\">mode_edit</i></a></div><div class=\"col s12 m6\"><h5 class=promo-caption>Search Customer</h5><p>Find that customer by searching using a variety of attributes or meta data then use that customer in your business pipeline.</p><a id=search-csutomer class=\"btn waves-effect waves-light\" href=#/customer/search>Search Customer<i class=\"material-icons right\">search</i></a></div></div>");
  $templateCache.put("views/maintainCustomer.html",
    "<h1>Maintain Customer</h1>");
  $templateCache.put("views/newCustomer.html",
    "<h1>New Customer</h1>");
  $templateCache.put("views/searchCustomer.html",
    "<h1>Search Customer</h1>");
}]);
;angular.module('app', ['appTemplates', 'ui.router', 'config', 'restangular'])

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
;'use strict';

angular.module('app')
    .controller('directiveExamplesController', ['$scope', function($scope){

        function initialise(){
            $scope.customer = {name: 'A A Taxis', id: 12345, telephone: '0208 555 555', email: 'info@taxis.com'};
        }

        initialise();
    }]);;'use strict';

angular.module('app')
    .controller('formValidationExampleController', ['$scope', function($scope){

        $scope.master = {};

        $scope.update = function(user) {
            $scope.master = angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();

    }]);;'use strict';

angular.module('app')
    .controller('MainController', ['$scope', function ($scope) {

        function initialise(){
            $scope.myProperty = 'A Value';
        }

        initialise();
    }]);
;'use strict';

angular.module('app')
    .controller('maintainCustomerController', ['$scope', function($scope){

        function initialise(){
            $scope.customer = {name: 'A A Taxis', id: 12345, telephone: '0208 555 555', email: 'info@taxis.com'};
        }

        initialise();
    }]);;'use strict';

angular.module('app')
    .controller('newCustomerController', ['$scope', function($scope){

        function initialise(){
            $scope.customer = {name: 'A A Taxis', id: 12345, telephone: '0208 555 555', email: 'info@taxis.com'};
        }

        initialise();
    }]);;'use strict';

angular.module('app')
    .controller('searchCustomerController', ['$scope', function($scope){

        function initialise(){
            $scope.customer = {name: 'A A Taxis', id: 12345, telephone: '0208 555 555', email: 'info@taxis.com'};
        }

        initialise();
    }]);;'use strict';

angular.module('app')
    .directive('expHtmlDirective',function(){
        return {
            templateUrl: 'views/directives/directiveExampleHtmlTemplate.html'
        };
    });;'use strict';

angular.module('app')
    .directive('expInLineDirective',function(){
        return {
            template: 'Customer Name: {{customer.name}}'
        };
    });'use strict';

angular.module('app')
    .factory('ExampleApi', ['Restangular', 'TEST_API_URL', function (Restangular, url) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl(url);
            RestangularConfigurer.addRequestInterceptor(function (element, operation, what) {
                if (operation === 'post' && what === 'info') {
                    //post web request to the info endpoint
                }

                return element;
            });

            RestangularConfigurer.addResponseInterceptor(function (data, operation, what) {

                if (operation === 'get' && what === 'info') {
                    //get web request from the info endpoint
                }

                return data;
            });
        });
    }]);
;'use strict';

angular.module('app')
    .service('testValidator', ['ExampleApi', function(ExampleApi) {
        return {

            checkTestValue1: function (value1) {
                return value1 === 'value1';
            },

            checkTestValue2: function (value2) {
                return value2 === 'value2';
            }

        };
    }]);