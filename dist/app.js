"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const bookController_1 = __importDefault(require("./controller/bookController"));
const app = express_1.default();
const port = process.env.PORT || 5000;
app.get('/', function (req, res) {
    res.send('duar!');
});
app.use(body_parser_1.default.json());
// app.get('/books', bookController_1.default.allBooks);
app.get('/book/:id', bookController_1.default.getBook);
app.put('/book', bookController_1.default.addBook);
app.delete('/book/:id', bookController_1.default.deleteBook);
app.post('/book/:id', bookController_1.default.updateBook);
app.listen(port, function () {
    console.log('Updated : Server listening at port %d', port);
});
//# sourceMappingURL=app.js.map