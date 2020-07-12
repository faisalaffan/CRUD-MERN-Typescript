import mongoose from "mongoose";

const url: string = "mongodb://127.0.0.1:27017/local";

mongoose.connect(url, (err:any) => {
    if(err){
        console.log(err.message);
    }else{
        console.log("Successfully connected!");
    }
})

export const BookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    year: {type: Number, required: true}
});

const book = mongoose.model('Book', BookSchema);
export default book;