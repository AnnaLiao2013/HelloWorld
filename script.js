var myApp = angular.module("myApp",["ngRoute"]);
myApp.config(function($routeProvider){
    $routeProvider
        .when("/",{
            templateUrl:"pages/home.html",
            controller:"mainCtrl"
        })
        .when("/about",{
            templateUrl:"pages/about.html",
            controller:"aboutCtrl"
        
        })
        .when("/contact",{
            templateUrl:"pages/contact.html",
            controller:"contactCtrl"
        
        });
});

myApp.controller("mainCtrl",function($scope){
    $scope.message = "!!! Hello World !!!";
});

myApp.controller("aboutCtrl",function($scope){
    $scope.message = "!!! Hi there this is Ann Liao !!!";
});

myApp.controller("contactCtrl",function($scope){
    $scope.message = "!!! Feel free Email me !!!";
    $scope.email = "!!! annaliao2013@gmail.com  !!!";
});
