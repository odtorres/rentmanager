angular.module('manager').controller('CreateManagerController', ['$scope', 'ManagerService',
    function ($scope, ManagerService) {
       

        $('.ui.dropdown').dropdown();


        $("#terms").change(function () {
           if(document.querySelector("#terms").checked){
               $("#submit").removeClass("disabled");
           }else{
               $("#submit").addClass("disabled");                             
           }
        });

        $scope.submit = function () {
            console.log("hole")
            ManagerService.create({
                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                email: $("#email").val(),
                cellphone: $("#cellphone").val(),
                user: $("#username").val(),
                password: $("#password").val(),
                country: $("#country").val(),
                gender: $("#gender").val()
            })
        };
    }
]);