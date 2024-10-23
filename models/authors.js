import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: String,
  alternateName: String,
  description: String,
  jobTitle: String,
  birthDate: Date,
  worksFor: String,
  alumniOf: String,
  knowsAbout: [String],
  socialLinks: [String],
});

const AuthorsModel = mongoose.model("author", authorSchema);
export default AuthorsModel;
