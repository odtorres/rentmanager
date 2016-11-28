angular.module('authentication').controller('AuthenticationController', ['$scope', 'AuthenticationService',
    function ($scope, AuthenticationService) {
        
        $scope.submit = function () {

            AuthenticationService.login({                
                username: $("#username").val(),
                password: $("#password").val()//,
                //action: 'login'
            })
        };
    }
]);