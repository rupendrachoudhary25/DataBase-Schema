import mongoose from "mongoose";

const Bookschema = new mongoose.Schema({
  title: String,
  author: String,
  publicationDate: String,
  genre: String,
  publisher: String,
  pages: Number,
  language: String,
  totalCopies: Number,
  availableCopies: Number,
});

const BooksModel = mongoose.model("book", Bookschema);
export default BooksModel;
