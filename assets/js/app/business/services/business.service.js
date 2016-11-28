angular.module('business').service('BusinessService', ['$http',
    function ($http) {
        this.someValue = true;
        this.get= function (data) {            
            return $http({
                method: 'GET',
                url: '/manager/'+data.user
            });
        }

        this.create = function (data) {            
            $http({
                method: 'Post',
                url: '/business',
                data:data
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.debug(response);                
            });
        }
        
    }
]);