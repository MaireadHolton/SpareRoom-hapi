import Mongoose, { SchemaTypes } from "mongoose";

const { Schema } = Mongoose;

const advertSchema = new Schema({
  firstName: String,
  college: String,
  /* latitude: {
    type: SchemaTypes.Number
  },
  longitude: {
    type: SchemaTypes.Number
  }, */
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
  }
});

export const Advert = Mongoose.model("Advert", advertSchema);