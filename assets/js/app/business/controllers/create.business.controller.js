angular.module('business').controller('CreateBusinessController', ['$scope','AuthenticationService',
    function ($scope,AuthenticationService) {
        
        AuthenticationService.getInfo().then(function successCallback(response) {
            $scope.userInfo = response.data;
          }, function errorCallback(response) {
        });

        $('.ui.dropdown').dropdown();
        
    }
]);