import {Request, Response} from "express";
import Book from './../book';

// GET = returns all books
export let allBooks = (req:Request, res: Response)=>{
    let books = Book.find((err: any, book: any) => {
        if (err) {
            return res.send(err)
            }
        res.send(book);
    })
}

// GET = returns book by id
export let getBooks = (req: Request, res: Response) => {
    Book.findById(req.params.id, (err:any, book:any) => {
        if (err) {
            return res.send(err)
        }
        res.send(book);
    })
}

// PUT = adding new book
export let addBook = (req: Request, res: Response) => {
    console.log("INI CONSOLE");
    res.send(req.body);
    let book = new Book(req.body);

    book.save((err:any)=>
    {
        if (err) {
            return res.send(err)
            }
            res.send(book)
    })
}

// DELETE = delete book
export let deleteBook = (req:Request, res:Response)=>{
  Book.deleteOne({_id: req.params.id}, (err:any)=>
  {
    if (err) {
        return res.send(err)
        }
        res.send('Success delete book')
  })
}

// POST = update book
export let updateBook = (req:Request, res:Response)=>{
    Book.findByIdAndUpdate(req.params.id, req.body, (err: any, book:any)=>{
       if (err) {
            return res.send(err)
            }
            res.send('Success Update book')
    })
  }
  
//   export default bookController;