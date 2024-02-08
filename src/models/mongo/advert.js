import Mongoose from "mongoose";

const { Schema } = Mongoose;

const advertSchema = new Schema({
  firstname: String,
  college: String,
  description: String,
  rules: String,
  price: Number,
  available: Date,
});

export const Advert = Mongoose.model("Advert", advertSchema);