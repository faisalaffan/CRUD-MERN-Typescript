"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const book = __importStar(require("./controller/bookController"));
const app = express_1.default();
const port = process.env.PORT || 5000;
app.get('/', function (req, res) {
    res.send('duar!');
});
app.use(body_parser_1.default.json());
app.get('/books', book.allBooks);
// app.get('/book/:id',bookController.getBook);
// app.put('/book',bookController.addBook);
// app.delete('/book/:id',bookController.deleteBook);
app.post('/book/:id', book.updateBook);
app.post('/book', book.addBook);
app.listen(port, function () {
    console.log('Updated : Server listening at port %d', port);
});
//# sourceMappingURL=app.js.map