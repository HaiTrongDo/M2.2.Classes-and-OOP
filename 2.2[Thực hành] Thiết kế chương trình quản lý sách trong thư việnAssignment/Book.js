"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(bookID, name) {
        this.ID = bookID;
        this.name = name;
    }
    Book.prototype.getName = function () {
        return this.ID;
    };
    Book.prototype.setName = function (newName) {
        this.name = newName;
    };
    Book.prototype.getID = function () {
        return this.ID;
    };
    return Book;
}());
exports.Book = Book;
