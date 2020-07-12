import express from "express";
import bodyParser from "body-parser";
import * as book from "./controller/bookController";

const app = express();
const port = process.env.PORT || 5000;
  
app.get('/',function(req,res)
{
    res.send('duar!');
});

app.use(bodyParser.json());

app.get('/books',book.allBooks);
app.get('/book/:id',book.getBooks);
app.put('/book',book.addBook);
app.delete('/book/:id',book.deleteBook);
app.post('/book/:id',book.updateBook);
app.post('/book',book.addBook);


app.listen(port, function () {
    console.log('Updated : Server listening at port %d', port);
}); 
