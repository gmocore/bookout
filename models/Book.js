const mongoose = require('mongoose');

// import Schema from Mongoose
const Schema = mongoose.Schema;

// define Schema
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    }
    ,
    author: {
        type: String,
        required: true
    }
    ,
    description: String,
    image: String,
    link: String,
    released: String,
    rating: String,
    saved: {
        type: Boolean,
        default: false
    }
})

// create reference to schema
const Book = mongoose.model('Book', bookSchema);

// export schema
module.exports = Book;