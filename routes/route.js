import express from "express";
const router = express.Router();
import { getBooks, createBook, deleteBook } from "../controllers/books.js";
import {
  getAuthors,
  createAuthor,
  deleteAuthor,
} from "../controllers/authors.js";
import {
  getBorrowers,
  createBorrower,
  deleteBorrower,
} from "../controllers/borrowers.js";

router.get("/getbooks", getBooks);
router.post("/createbook", createBook);
router.delete("/deletebook/:id", deleteBook);

router.get("/getauthors", getAuthors);
router.post("/createauthor", createAuthor);
router.delete("/deleteauthor/:id", deleteAuthor);

router.get("/getborrowers", getBorrowers);
router.post("/createborrower", createBorrower);
router.delete("/deleteborrower/:id", deleteBorrower);

export default router;
