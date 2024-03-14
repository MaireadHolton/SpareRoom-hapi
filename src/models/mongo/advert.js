import Mongoose, { SchemaTypes } from "mongoose";

const { Schema } = Mongoose;

const advertSchema = new Schema({
  firstName: String,
  contactEmail: String,
  college: String,
  lat: {
    type: SchemaTypes.Number
  },
  lng: {
    type: SchemaTypes.Number
  }, 
  description: String,
  rules: String,
  price: Number,
  available: {
    type: Date,
    get: value => value.toDateString
  },
  advertiser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  img: String,
});

export const Advert = Mongoose.model("Advert", advertSchema);