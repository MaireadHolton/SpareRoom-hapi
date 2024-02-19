import Mongoose, { SchemaTypes } from "mongoose";

const { Schema } = Mongoose;

const advertSchema = new Schema({
  firstname: String,
  college: String,
  latitude: {
    type: SchemaTypes.Decimal128
  },
  longitude: {
    type: SchemaTypes.Decimal128
  },
  description: String,
  rules: String,
  price: Number,
  available: Date,
  advertiser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});

export const Advert = Mongoose.model("Advert", advertSchema);