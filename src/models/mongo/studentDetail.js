import Mongoose from "mongoose";

const { Schema } = Mongoose;

const studentDetailSchema = new Schema({
  firstName: String,
  college: String,
  year: Number,
  information: String,
  student: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

export const StudentDetail = Mongoose.model("StudentDetail", studentDetailSchema);