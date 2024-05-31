// https://dev.to/ghostaram/how-to-create-mongoose-models-using-typescript-7hf

import { Timestamp } from "mongodb";
import mongoose, { Schema } from "mongoose";

const BusinessSchema = new Schema(
  {
    name: String,
    type: String,
    uuid: String,
    owner: {
      _id: String,
      name: String,
      avatar: String,
    },
    info: {
      description: String,
      logo: String,
      website: String,
      industry: String,
      founded: Number,
      headquarters: String,
      mission: String,
      vision: String,
      values: Array,
    },
    partners: Array,
    employees: Array,
    resources: Array,
    revenue: String,
    products: Array,
    services: Array,
    customers: Array,
    channels: Array,
  },
  { timestamps: true }
);

const Business = mongoose.models.Business || mongoose.model("Business", BusinessSchema);

export default Business;
