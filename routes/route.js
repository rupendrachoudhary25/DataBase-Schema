import express from "express";
const router = express.Router();

import {
  getAuthors,
  getAuthorById,
  createAuthor,
  deleteAuthor,
  UpdateAuthor,
} from "../controllers/authors.js";

import {
  getBooks,
  getBookById,
  createBook,
  deleteBook,
  UpdateBook,
} from "../controllers/books.js";

import {
  getBorrowers,
  getBorrowerById,
  createBorrower,
  deleteBorrower,
  UpdateBorrower,
} from "../controllers/borrowers.js";

// Author routes
router.get("/getauthors", getAuthors);
router.get("/getAuthorById/:id", getAuthorById);
router.post("/createauthor", createAuthor);
router.delete("/deleteauthor/:id", deleteAuthor);
router.put("/updateauthor/:id", UpdateAuthor);

// Book routes
router.get("/getbooks", getBooks);
router.get("/getBookById/:id", getBookById);
router.post("/createbook", createBook);
router.delete("/deletebook/:id", deleteBook);
router.put("/updatebook/:id", UpdateBook);

// Borrower routes
router.get("/getborrowers", getBorrowers);
router.get("/getBorrowerById/:id", getBorrowerById);
router.post("/createborrower", createBorrower);
router.delete("/deleteborrower/:id", deleteBorrower);
router.put("/updateborrower/:id", UpdateBorrower);

export default router;
