import Mongoose from "mongoose";

const { Schema } = Mongoose;

const studentDetailSchema = new Schema({
  firstname: String,
  college: String,
  year: Number,
  information: String,
});

export const StudentDetail = Mongoose.model("StudentDetail", studentDetailSchema);