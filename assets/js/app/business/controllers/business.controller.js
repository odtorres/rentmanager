angular.module('business').controller('BusinessController', ['$scope','BusinessService','AuthenticationService','$routeParams',
    function ($scope,ManagerService,AuthenticationService,$routeParams) {
        $scope.user = $routeParams.user;  

        AuthenticationService.getInfo().then(function successCallback(response) {
            $scope.userInfo = response.data;
        }, function errorCallback(response) {
            console.debug(response);
        });

        ManagerService.get({"user":$scope.user}).then(function successCallback(response) {            
            $scope.manager = response.data;
        }, function errorCallback(response) {
            // do nothing            
        });
        // fix menu when passed
       //$('.fixed.menu').transition('fade in');

       // dropdown
        setTimeout(function(){            
            $('.ui.dropdown').dropdown();
            //console.log("hola")
        },500);  
    }
]);