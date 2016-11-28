angular.module('manager', []);

angular.module('manager').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/manager/:user', {
                //controller : 'ManagerController',
                templateUrl : 'js/app/manager/views/manager.view.html'
            }).
            when('/signup', {
                templateUrl: 'js/app/manager/views/create.manager.view.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);