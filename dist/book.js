"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const url = "mongodb://127.0.0.1:27017/local";
mongoose_1.default.connect(url, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully connected!");
    }
});
exports.BookSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true }
});
const book = mongoose_1.default.model('Book', exports.BookSchema);
exports.default = book;
//# sourceMappingURL=book.js.map