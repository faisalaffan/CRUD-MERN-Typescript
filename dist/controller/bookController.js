"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.deleteBook = exports.addBook = exports.getBooks = exports.allBooks = void 0;
const book_1 = __importDefault(require("./../book"));
// GET = returns all books
exports.allBooks = (req, res) => {
    let books = book_1.default.find((err, book) => {
        if (err) {
            return res.send(err);
        }
        res.send(books);
    });
};
// GET = returns book by id
exports.getBooks = (req, res) => {
    book_1.default.findById(req.params.id, (err, book) => {
        if (err) {
            return res.send(err);
        }
        res.send(book);
    });
};
// PUT = adding new book
exports.addBook = (req, res) => {
    console.log(req);
    res.send('faisal');
    // let book = new Book(req.body);
    // book.save((err:any)=>
    // {
    //     if (err) {
    //         return res.send(err)
    //         }
    //         res.send(book)
    // })
};
// DELETE = delete book
exports.deleteBook = (req, res) => {
    book_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            return res.send(err);
        }
        res.send('Success delete book');
    });
};
// POST = update book
exports.updateBook = (req, res) => {
    book_1.default.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
        if (err) {
            return res.send(err);
        }
        res.send('Success Update book');
    });
};
//   export default bookController;
//# sourceMappingURL=bookController.js.map