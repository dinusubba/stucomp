
/* global BookStore, CartStore */

var app = angular.module('myApp', ['ngResource', 'ngRoute', 'angularMoment']);


app.config(
        function ($routeProvider) {
            $routeProvider.
                    when('/', {
                        controller: 'HomePageCntrl',
                        templateUrl: 'assets/view/home.template.html',
                        activetab: 'home'
                    })
                    .when('/about', {
                        controller: 'AboutPageCntrl',
                        templateUrl: 'assets/view/about.template.html',
                        activetab: 'home'
                    })
                    .when('/search/:searchBook', {
                        controller: 'SearchDtlPageCntrl',
                        templateUrl: 'assets/view/search.details.template.html',
                        activetab: 'home'
                    })
                    .when('/contact', {
                        controller: 'ContactPageCntrl',
                        templateUrl: 'assets/view/contact.template.html',
                        activetab: 'home'
                    })
                    .when('/books/:menuItem', {
                        controller: 'BookPageCntrl',
                        templateUrl: 'assets/view/book.template.html',
                        activetab: 'book'
                    })
                    .when('/book/:bookID', {
                        controller: 'BookDtlPageCntrl',
                        templateUrl: 'assets/view/book_details.template.html',
                        activetab: 'book'
                    })

//                    .when('/cart', {
//                        controller: 'CartPageCntrl',
//                        templateUrl: 'assets/view/cart.template.html',
//                        activetab: 'cart'
//                    })

                    .otherwise({
                        redirectTo: '/'
                    });
        }
);

app.run(function ($rootScope) {
    $rootScope.addToCart = function (bookID) {
        console.log("-------------");
        CartStore.addToCart(bookID);
        console.log("-------------");
        $rootScope.$emit('addToCart', {'a': 'A'});

    };
});


app.controller("MenuCntrl", function ($scope, $route, $routeParams) {
    console.log("I am MenuCntrl" + $routeParams.menuItem);
    $scope.menuItem = $routeParams.menuItem;

    $scope.$route = $route;
});


app.controller("SearchCntrl", function ($scope, $location) {
    console.log("I am SearchCtrl");
    $scope.data = {
        "searchText": ''
    };

    $scope.search = function () {
        $location.path("/search/" + $scope.data.searchText);
    };
});

app.controller("SearchDtlPageCntrl", function ($scope, $routeParams, $timeout) {
    console.log("I am SearchDtlPageCntrl" + $routeParams.searchBook);
    var allBookList = BookStore.getBestSellerBooks();

    $scope.book = {};
    $scope.dataPresent = false;

    for (var _book in allBookList) {
        console.log(allBookList[_book].title.text);

        if (allBookList[_book].title.text.toUpperCase().indexOf($routeParams.searchBook.toUpperCase()) !== -1) {
            console.log(JSON.stringify(allBookList[_book]));
            $scope.book = allBookList[_book];
            $scope.dataPresent = true;
            break;
        }
    }

    $scope.load = function () {
        $timeout(function () {
            HomePageJquery($);
        }, 0, false);
    };

    //don't forget to call the load function
    $scope.load();


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

app.controller("BookDtlPageCntrl", function ($scope, $timeout, $routeParams) {
    console.log("I am BookDtlPageCntrl " + $routeParams.bookID);
    $scope.bookID = $routeParams.bookID;


    $scope.load = function () {
        $timeout(function () {
            HomePageJquery($);
        }, 0, false);
    };

    //don't forget to call the load function
    $scope.load();

    $scope.data = BookStore.getBookStoreByPageID($scope.bookID);
    //console.log();


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

    var _bestSellerBooks = BookStore.getBestSellerBooks();
    $scope.bestSellerBookList = _bestSellerBooks;

});


app.controller("AboutPageCntrl", function ($scope, $timeout, $location, $rootScope) {
    console.log("I am AboutPageCntrl ");



});

app.controller("ContactPageCntrl", function ($scope, $timeout, $location, $rootScope) {
    console.log("I am AboutPageCntrl ");
    $scope.load = function () {
        $timeout(function () {
            HomePageJquery($);
        }, 0, false);
    };

    //don't forget to call the load function
    $scope.load();



});

app.controller("CartCntrl", function ($scope, $timeout, $location, $rootScope) {
    console.log("I am CartCntrl ");

    $scope.cartDesc = CartStore.getCartDesc();

    $scope.toggleCart = function () {
        $("#wrapper").toggleClass("toggled right");
        $("body").toggleClass("open-sidebar");
        $scope.$emit('someEvent', {'a': 'A'});
       };

    $rootScope.$on('addToCart', function (event, args) {
        $scope.cartDesc = CartStore.getCartDesc();
    });

});

//
app.controller("CloseCtrl", function ($scope, $timeout, $location) {
    console.log("I am CloseCtrl ");

    $scope.toggleCart = function () {
        $("#wrapper").removeClass("toggled");
        $("#wrapper").removeClass("right");
        $("#wrapper").removeClass("left");
        $("body").toggleClass("open-sidebar");
        $location.path("/");
    };

});
app.controller("CartPageCntrl", function ($scope, $timeout, $rootScope) {
    console.log("I am CartPageCntrl ");
    var _carts = CartStore.getCarts();
    console.log("I am CartPageCntrl " + JSON.stringify(_carts));
    $scope.cartBookList = _carts.cartBookList;
    $scope.toatalPrice = _carts.toatalPrice;

    $scope.$on('someEvent', function (event, args) {
        var _carts = CartStore.getCarts();
        console.log("I am CartPageCntrl " + JSON.stringify(_carts));
        $scope.cartBookList = _carts.cartBookList;
        $scope.toatalPrice = _carts.toatalPrice;
    });

    $rootScope.$on('addToCart', function (event, args) {
        var _carts = CartStore.getCarts();
        console.log("I am CartPageCntrl " + JSON.stringify(_carts));
        $scope.cartBookList = _carts.cartBookList;
        $scope.toatalPrice = _carts.toatalPrice;
    });
});

