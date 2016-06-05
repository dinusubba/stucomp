

/* global _books */

var BookStore = function () {
    var _books = [
        {
            "id": 1,
            "url": "#/book/1",
            "title": {
                "text": "Art, Architecture & Photography",
                "url": "#/book/1"
            },
            "subTitle": {
                "text": "subTitle",
                "url": "#/"
            },
            "image": {
                "src": "assets/images/book-covers/06.jpg",
                "width": "140",
                "height": "212",
                "alt": "assets/images/blank.gif"
            },
            "price": 310

        },
        {
            "id": 2,
            "url": "#/book/2",
            "title": {
                "text": "You Are Born to Blossom",
                "url": "#/book/2"
            },
            "subTitle": {
                "text": "subTitle",
                "url": "#/"
            },
            "image": {
                "src": "assets/images/book-covers/07.jpg",
                "width": "140",
                "height": "212",
                "alt": "assets/images/blank.gif"
            },
            "price": 311

        }, {
            "id": 3,
            "url": "#/book/3",
            "title": {
                "text": "Life is What You Make it",
                "url": "#/book/3"
            },
            "subTitle": {
                "text": "subTitle",
                "url": "#/"
            },
            "image": {
                "src": "assets/images/book-covers/08.jpg",
                "width": "140",
                "height": "212",
                "alt": "assets/images/blank.gif"
            },
            "price": 312

        }, {
            "id": 4,
            "url": "#/book/4",
            "title": {
                "text": "Who Will Cry When You Die?",
                "url": "#/"
            },
            "subTitle": {
                "text": "subTitle",
                "url": "#/"
            },
            "image": {
                "src": "assets/images/book-covers/c2.jpg",
                "width": "140",
                "height": "212",
                "alt": "assets/images/blank.gif"
            },
            "price": 313

        }, {
            "url": "#/book/5",
            "id": 5,
            "title": {
                "text": "Art, Architecture & Photography - 5",
                "url": "#/"
            },
            "subTitle": {
                "text": "subTitle",
                "url": "#/"
            },
            "image": {
                "src": "assets/images/book-covers/c2.jpg",
                "width": "140",
                "height": "212",
                "alt": "assets/images/blank.gif"
            },
            "price": 314

        }, {
            "url": "#/book/6",
            "id": 6,
            "title": {
                "text": "Art, Architecture & Photography - 6",
                "url": "#/"
            },
            "subTitle": {
                "text": "subTitle",
                "url": "#/"
            },
            "image": {
                "src": "assets/images/book-covers/c2.jpg",
                "width": "140",
                "height": "212",
                "alt": "assets/images/blank.gif"
            },
            "price": 315

        }, {
            "url": "#/book/7",
            "id": 7,
            "title": {
                "text": "Art, Architecture & Photography - 7",
                "url": "#/"
            },
            "subTitle": {
                "text": "subTitle",
                "url": "#/"
            },
            "image": {
                "src": "assets/images/book-covers/c2.jpg",
                "width": "140",
                "height": "212",
                "alt": "assets/images/blank.gif"
            },
            "price": 316

        }, {
            "url": "#/book/8",
            "id": 8,
            "title": {
                "text": "Art, Architecture & Photography - 8",
                "url": "#/"
            },
            "subTitle": {
                "text": "subTitle",
                "url": "#/"
            },
            "image": {
                "src": "assets/images/book-covers/c2.jpg",
                "width": "140",
                "height": "212",
                "alt": "assets/images/blank.gif"
            },
            "price": 317

        }, {
            "url": "#/book/9",
            "id": 9,
            "title": {
                "text": "Art, Architecture & Photography - 9",
                "url": "#/"
            },
            "subTitle": {
                "text": "subTitle",
                "url": "#/"
            },
            "image": {
                "src": "assets/images/book-covers/c2.jpg",
                "width": "140",
                "height": "212",
                "alt": "assets/images/blank.gif"
            },
            "price": 318

        }, {
            "id": 10,
            "url": "#/book/10",
            "title": {
                "text": "Art, Architecture & Photography - 10",
                "url": "#/"
            },
            "subTitle": {
                "text": "subTitle",
                "url": "#/"
            },
            "image": {
                "src": "assets/images/book-covers/c2.jpg",
                "width": "140",
                "height": "212",
                "alt": "assets/images/blank.gif"
            },
            "price": 319

        }
    ];
    var _bookStore = {
        "Art": {
            "monthBookList": [
                {
                    "id": 1,
                    "url": "#/book/1",
                    "title": {
                        "text": "Art, Architecture & Photography - 1",
                        "url": "#/book/1"
                    },
                    "subTitle": {
                        "text": "subTitle",
                        "url": "#/"
                    },
                    "image": {
                        "src": "assets/images/book-covers/06.jpg",
                        "width": "140",
                        "height": "212",
                        "alt": "assets/images/blank.gif"
                    },
                    "price": 310

                },
                {
                    "id": 2,
                    "url": "#/book/2",
                    "title": {
                        "text": "Art, Architecture & Photography - 2 ",
                        "url": "#/book/2"
                    },
                    "subTitle": {
                        "text": "subTitle",
                        "url": "#/"
                    },
                    "image": {
                        "src": "assets/images/book-covers/07.jpg",
                        "width": "140",
                        "height": "212",
                        "alt": "assets/images/blank.gif"
                    },
                    "price": 311

                }, {
                    "id": 3,
                    "url": "#/book/3",
                    "title": {
                        "text": "Art, Architecture & Photography - 3",
                        "url": "#/book/3"
                    },
                    "subTitle": {
                        "text": "subTitle",
                        "url": "#/"
                    },
                    "image": {
                        "src": "assets/images/book-covers/08.jpg",
                        "width": "140",
                        "height": "212",
                        "alt": "assets/images/blank.gif"
                    },
                    "price": 312

                }, {
                    "id": 4,
                    "url": "#/book/4",
                    "title": {
                        "text": "Art, Architecture & Photography - 4",
                        "url": "#/"
                    },
                    "subTitle": {
                        "text": "subTitle",
                        "url": "#/"
                    },
                    "image": {
                        "src": "assets/images/book-covers/c2.jpg",
                        "width": "140",
                        "height": "212",
                        "alt": "assets/images/blank.gif"
                    },
                    "price": 313

                }],
            "subjectBookList": [
                {
                    "title": "Art Book1",
                    "url": "#/",
                    "image": {
                        "src": "assets/images/book-covers/c2.jpg",
                        "width": "140",
                        "height": "212",
                        "alt": "assets/images/blank.gif"
                    },
                    "numberOfItems": "310 items"

                },
                {
                    "title": "Art, Architecture & Photography (1)",
                    "url": "#/",
                    "image": {
                        "src": "assets/images/book-covers/c2.jpg",
                        "width": "140",
                        "height": "212",
                        "alt": "assets/images/blank.gif"
                    },
                    "numberOfItems": "310 items"

                },
                {
                    "title": "Art, Architecture & Photography (2)",
                    "url": "#/",
                    "image": {
                        "src": "assets/images/book-covers/c2.jpg",
                        "width": "140",
                        "height": "212",
                        "alt": "assets/images/blank.gif"
                    },
                    "numberOfItems": "310 items"

                },
                {
                    "title": "Art, Architecture & Photography",
                    "url": "#/",
                    "image": {
                        "src": "assets/images/book-covers/c2.jpg",
                        "width": "140",
                        "height": "212",
                        "alt": "assets/images/blank.gif"
                    },
                    "numberOfItems": "310 items"

                },
            ]},
        
        "Drama": {  "monthBookList" : _books,
                    "subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Humour": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Music": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Photography": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Biography": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Sports": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Business": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Careers": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Investing": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Cooking_and_Food": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Education": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Fiction_and_Poetry": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Travel": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Health_and_Self_Help": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Medicine": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Nutrition": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Psychology": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Recovery_and_Addiction": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Relationships": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Gardening": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Interior_Design": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Sustainable_Living": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]},
        "Humanities": {"subjectBookList": [{"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}, {"title": "Art, Architecture & Photography", "url": "#/", "image": {"src": "assets/images/blank.gif", "width": "140", "height": "212", "alt": "assets/images/blank.gif"}, "numberOfItems": "310 items"}]}

    };

    var getBookStoreByPage = function (PageName) {
        return  _bookStore[PageName];
    };

    var getBookStoreByPageID = function (pageID) {
        return  _books[pageID - 1];
    };

    var getBookStroreBySearch = function (searchContent) {
        return  _bookStore[searchContent];
    };

    var getBestSellerBooks = function () {
        return _books;
    };

    return {
        getBookStoreByPage: getBookStoreByPage,
        getBookStroreBySearch: getBookStroreBySearch,
        getBestSellerBooks: getBestSellerBooks,
        getBookStoreByPageID: getBookStoreByPageID

    };

}();

var CartStore = function () {

    var _cartSore = [];



    var addToCart = function (bookID) {
        var bookData = BookStore.getBestSellerBooks()[bookID - 1];
        console.log("bookID " + JSON.stringify(bookData));
        _cartSore.push(bookData);
    };

    var getCarts = function () {
        var totoalAmount = 0;
        var totalItem = 0;

        console.log("I am getCarts " + JSON.stringify(_cartSore));


        for (var _cartItem in _cartSore) {
            totoalAmount += _cartSore[_cartItem].price;
            console.log(_cartSore[_cartItem].price);
            totalItem += 1;
        }

        return {
            "cartBookList": _cartSore,
            "toatalPrice": "$" + totoalAmount
        };
    };

    var getCartDesc = function () {
        var totoalAmount = 0;
        var totalItem = 0;

        for (var _cartItem in _cartSore) {
            console.log(_cartSore[_cartItem].price);
            totoalAmount += _cartSore[_cartItem].price;
            totalItem += 1;
        }

        return {
            "totoalAmount": "$" + totoalAmount,
            "totalItem": totalItem + ' items'
        };
    };



    return {
        addToCart: addToCart,
        getCarts: getCarts,
        getCartDesc: getCartDesc
    };

}();