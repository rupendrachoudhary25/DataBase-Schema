import express from "express";
import BorrowersModel from "../models/borrowers.js";

export async function getBorrowers(req, res) {
  try {
    const borrowers = await BorrowersModel.find().select("-__v-_id");
    res.json(borrowers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createBorrower(req, res) {
  try {
    const newBorrower = new BorrowersModel(req.body);
    await newBorrower.save();
    res.status(201).send("Borrower Added");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteBorrower(req, res) {
  try {
    const { id } = req.params;
    const deletedBorrower = await BorrowersModel.findByIdAndDelete(id);
    if (!deletedBorrower) {
      return res.status(404).send("Borrower not found");
    }
    res.send("Borrower Deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
