const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    title: {
        type: String, 
        required: [true, "Title of the book is required"], 
        unique: true
    }, 
    author: {
        type: String, 
        required: [true, "Author of the book is required"]
    }, 
    summary: {
        type: String, 
        required: [true, "Summary is required"]
    }
})

module.exports = model('book', bookSchema); 