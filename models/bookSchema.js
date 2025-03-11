const bookSchema = require('mongoose').Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: Array },
    language: { type: String },
    publisher: { type: String },
    book_collection: { type: String },
    release_date: { type: Date },
    pages: { type: Number },
    isbn: { type: String, required: true },
    cover: { type: String, required: true },
});

module.exports = bookSchema;
