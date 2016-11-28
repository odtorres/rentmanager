angular.module('business', []);

angular.module('business').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/business/:user', {
                //controller : 'businessController',
                templateUrl : 'js/app/business/views/business.view.html'
            }).
            when('/newbusiness', {
                templateUrl: 'js/app/business/views/create.business.view.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);