angular.module('manager').service('ManagerService', ['$http',
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
                url: '/Manager',
                data:data
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.debug(response);                
            });
        }

        this.uploadAvatar = function (data) {            
            $http({
                method: 'Post',
                url: '/Manager/uploadAvatar',
                data:data
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.debug(response);                
            });
        }
        
    }
]);