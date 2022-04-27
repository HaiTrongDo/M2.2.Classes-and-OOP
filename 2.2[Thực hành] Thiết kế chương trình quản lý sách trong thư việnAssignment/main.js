"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var BookManager_1 = require("./BookManager");
var book1 = new Book_1.Book('B001', 'Lập trình Java');
var book2 = new Book_1.Book('B002', 'Lập trình PHP');
var book3 = new Book_1.Book('B003', 'Lập trình TypeScript');
var bookManager = new BookManager_1.BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
bookManager.update('B003', 'lập trình MySQL');
// console.log(bookManager.getList())
console.log(bookManager.findBook("B002"));
