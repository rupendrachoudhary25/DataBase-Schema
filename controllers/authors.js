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

export async function getAuthorById(req, res) {
  try {
    const AuthorsOne = await AuthorsModel.findById(req.params.id);
    console.log(AuthorsOne);
    res.status(201).send(" Get One Author Sucessful");
  } catch (err) {
    res.status(500).json({ message: "Failed" });
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
    const deletedAuthor = await AuthorsModel.findByIdAndDelete(req.params.id);
    if (!deletedAuthor) {
      return res.status(404).send("Author not found");
    }
    res.send("Author Deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function UpdateAuthor(req, res) {
  try {
    const UpdateAuthor = await AuthorsModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    if (!UpdateAuthor) {
      return res.status(404).send("Author not found");
    }
    res.send("Author Updated");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
