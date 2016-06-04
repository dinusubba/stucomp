
/* global BookStore */

var app = angular.module('myApp', ['ngResource', 'ngRoute', 'angularMoment']);


app.config(
        function ($routeProvider) {
            $routeProvider.
                    when('/', {
                        controller: 'HomePageCntrl',
                        templateUrl: 'assets/view/home.template.html',
                        activetab: 'home'
                    })
                    .when('/books/:menuItem', {
                        controller: 'BookPageCntrl',
                        templateUrl: 'assets/view/book.template.html',
                        activetab: 'book'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        }
);




app.controller("MenuCntrl", function ($scope, $route, $routeParams) {
    console.log("I am MenuCntrl" + $routeParams.menuItem);
    $scope.menuItem = $routeParams.menuItem;

    $scope.$route = $route;
});


app.controller("SearchCntrl", function ($scope) {
    console.log("I am SearchCtrl");
    $scope.data = {
        "searchText": ''
    };

    $scope.search = function () {
        alert("I am clicked" + $scope.data.searchText);
    };
});


app.controller("BookPageCntrl", function ($scope, $routeParams, $timeout) {
    console.log("I am BookPageCntrl" + $routeParams.menuItem);


    $scope.load = function () {
        $timeout(function () {
            HomePageJquery($);
        }, 0, false);
    };

    //don't forget to call the load function
    $scope.load();

    var pageData = BookStore.getBookStoreByPage($routeParams.menuItem);

    $scope.subjectBookList = pageData.subjectBookList;
    $scope.monthBookList = pageData.monthBookList;


});

app.controller("HomePageCntrl", function ($scope, $timeout) {
    console.log("I am HomePageCntrl ");


    $scope.load = function () {
        $timeout(function () {
            HomePageJquery($);
        }, 0, false);
    };

    //don't forget to call the load function
    $scope.load();

});

