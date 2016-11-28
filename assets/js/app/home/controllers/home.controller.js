angular.module('home').controller('HomeController', ['$scope', 'AuthenticationService',
    function ($scope, AuthenticationService) {//
        $scope.userInfo = $scope.userInfo || {} ; 
        $scope.userInfo.authenticated = $scope.userInfo.authenticated || false;
        
        AuthenticationService.getInfo().then(function successCallback(response) {
            $scope.userInfo = response.data;
            
        }, function errorCallback(response) {
            console.debug(response);
        });

        $scope.signout = function(){
            AuthenticationService.signout();
        }

        //carrusel
        var arrayImg = ['.myimg1', '.myimg2', '.myimg3', '.myimg4'];

        $scope.carrusel = function (arrayImg, arrayImgTotal) {
            $(arrayImg[0])
                .transition({
                    animation: 'vertical fade up in',
                    duration: '3s'
                })
                .transition('vertical fade up', '1s', function () {
                    if (arrayImg.length > 1) {
                        $scope.carrusel(arrayImg.slice(1), arrayImgTotal);
                    } else {
                        $scope.carrusel(arrayImgTotal, arrayImgTotal);
                    }
                })
        }

        $scope.hideAll = function (arrayImg) {
            for (var i = 1; i < arrayImg.length; i++) {
                $(arrayImg[i]).transition('hide', 300, function () {
                });
            }
        }

        $scope.hideAll(arrayImg);
        $scope.carrusel(arrayImg, arrayImg);

        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function () {
                    $('#home-general-menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('#home-general-menu').transition('fade out');
                }
            });

          // dropdown
        setTimeout(function(){            
            $('.ui.dropdown').dropdown();
        },500);        
           
        /*
        //$scope.isAdmin = false;

       
        
        
        
        // dimmer
        $('.special.card .image').dimmer({ on: 'hover' });
        $('.star.rating').rating();
        $('.card .dimmer').dimmer({ on: 'hover' });

        

        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item')
            ;*/
    }
]);