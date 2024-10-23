import mongoose from "mongoose";

const Borrowerschema = new mongoose.Schema({
  name: String,
  contactNumber: String,
  email: String,
  address: String,
  borrowedAmount: Number,
  loanStartDate: Date,
  dueDate: Date,
  loanType: String,
  status: String,
});

const BorrowersModel = mongoose.model("borrowers", Borrowerschema);
export default BorrowersModel;
