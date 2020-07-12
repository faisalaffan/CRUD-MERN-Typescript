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
// app.get('/book/:id',bookController.getBook);
// app.put('/book',bookController.addBook);
// app.delete('/book/:id',bookController.deleteBook);
// app.post('/book/:id',bookController.updateBook);


app.listen(port, function () {
    console.log('Updated : Server listening at port %d', port);
  }); 
