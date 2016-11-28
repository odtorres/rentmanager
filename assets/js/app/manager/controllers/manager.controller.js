angular.module('manager').controller('ManagerController', ['$scope', 'ManagerService', 'AuthenticationService', '$routeParams',
    function ($scope, ManagerService, AuthenticationService, $routeParams) {
        $scope.user = $routeParams.user;

        AuthenticationService.getInfo().then(function successCallback(response) {
            $scope.userInfo = response.data;
        }, function errorCallback(response) {
            console.debug(response);
        });

        ManagerService.get({ "user": $scope.user }).then(function successCallback(response) {
            $scope.manager = response.data;
            $scope.manager.lowerCountry = $scope.manager.country.toLowerCase();

        }, function errorCallback(response) {
            // do nothing            
        });

        $scope.signout = function () {
            AuthenticationService.signout();
        }

        $scope.uploadAvatar = function(){
            ManagerService.uploadAvatar({
                file : $("#avatar").val(),
                id : $scope.user
            });
        };
         /*function () {
            $('.ui.modal')
                .modal('show')
                ;
        }*/

        // dropdown
        setTimeout(function () {
            $('.ui.dropdown').dropdown();
        }, 500);

        //uploader
        $(function () {
            $("#uploader").plupload({
                // General settings
                runtimes: 'html5,flash,silverlight,html4',
                url: "/manager/avatar",

                // Maximum file size
                max_file_size: '2mb',

                chunk_size: '1mb',

                // Resize images on clientside if we can
                resize: {
                    width: 200,
                    height: 200,
                    quality: 90,
                    crop: true // crop to exact dimensions
                },

                // Specify what files to browse for
                filters: [
                    { title: "Image files", extensions: "jpg,gif,png" },
                    { title: "Zip files", extensions: "zip,avi" }
                ],

                // Rename files by clicking on their titles
                rename: true,

                // Sort files
                sortable: true,

                // Enable ability to drag'n'drop files onto the widget (currently only HTML5 supports that)
                dragdrop: true,

                // Views to activate
                views: {
                    list: true,
                    thumbs: true, // Show thumbs
                    active: 'thumbs'
                },

                // Flash settings
                flash_swf_url: '/plupload/js/Moxie.swf',

                // Silverlight settings
                silverlight_xap_url: '/plupload/js/Moxie.xap'
            });
        });
    }
]);