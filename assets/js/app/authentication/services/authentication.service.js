angular.module('authentication').service('AuthenticationService', ['$http',
    function ($http) {
        this.someValue = true;
        
        this.getInfo = function () {            
            return $http({
                method: 'GET',
                url: '/manager/info'
            });
        }

        this.login = function (data) {            
            $http({
                method: 'Post',
                url: '/authentication/login',
                data:data
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.debug(response);                
            });
        }

        this.signout = function () {
            location.href = "http://localhost:1337/authentication/signout"            
            /*$http({
                method: 'Post',
                url: '/authentication/signout'
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.debug(response);                
            });*/
        }
        
    }
]);