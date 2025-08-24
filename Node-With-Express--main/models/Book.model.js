const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,     
    },
    price: {
        type: Number,
        required: true,     
    },
    model: {
        type: String,
        required: true,     
    },
});
const Book= mongoose.model('Book', BookSchema);
module.exports = Book;