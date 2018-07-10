"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import stylesheets
require("./style.css");
// Write TypeScript code!
var appDiv = document.getElementById('app');
appDiv.innerHTML = "<h1>TypeScript Starter</h1>";
var Book = /** @class */ (function () {
    function Book(name, author, publisher, isbn) {
        this.show = function () {
            alert("some message");
        };
        this.getDisplayContent = function () {
            return this.name + "--" + this.author + "--" + this.publisher + "--" + this.isbn;
        };
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.isbn = isbn;
    }
    return Book;
}());
var BookStore = /** @class */ (function () {
    function BookStore() {
        this.bookList = [];
        this.initList();
        //this.displayBooks();
    }
    BookStore.prototype.initList = function () {
        this.bookList.push(new Book("Book1", "Book Author1", "Book Publisher", "some-isbn"));
        this.bookList.push(new Book("Book2", "Book Author2", "Book Publisher", "some-isbn"));
        this.bookList.push(new Book("Book3", "Book Author3", "Book Publisher", "some-isbn"));
        this.bookList.push(new Book("Book4", "Book Author4", "Book Publisher4", "some-isbn4"));
    };
    BookStore.prototype.displayBooks = function () {
        var displayContent = '';
        for (var itemIndex = 0; itemIndex < this.bookList.length; itemIndex++) {
            var bookInfo = this.bookList[itemIndex];
            displayContent = displayContent + "<br/>" + bookInfo.getDisplayContent();
        }
        document.getElementById("books").innerHTML = displayContent;
    };
    return BookStore;
}());
new BookStore().displayBooks();
//# sourceMappingURL=index.js.map