import express from "express";
import BooksModel from "../models/books.js";

export async function getBooks(req, res) {
  try {
    const books = await BooksModel.find().select("-__v-_id");
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createBook(req, res) {
  try {
    const newBook = new BooksModel(req.body);
    await newBook.save();
    res.status(201).send("Book Added");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteBook(req, res) {
  try {
    const { id } = req.params;
    const deletedBook = await BooksModel.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).send("Book not found");
    }
    res.send("Book Deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
