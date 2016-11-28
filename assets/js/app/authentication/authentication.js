angular.module('authentication', []);

angular.module('authentication').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/authentication', {
                templateUrl: 'js/app/authentication/views/authentication.view.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);