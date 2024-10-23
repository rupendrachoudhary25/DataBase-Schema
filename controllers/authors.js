import express from "express";
import AuthorsModel from "../models/authors.js";

export async function getAuthors(req, res) {
  try {
    const authors = await AuthorsModel.find().select("-__v-_id");
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createAuthor(req, res) {
  try {
    const newAuthor = new AuthorsModel(req.body);
    await newAuthor.save();
    res.status(201).send("Author Added");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteAuthor(req, res) {
  try {
    const { id } = req.params;
    const deletedAuthor = await AuthorsModel.findByIdAndDelete(id);
    if (!deletedAuthor) {
      return res.status(404).send("Author not found");
    }
    res.send("Author Deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
