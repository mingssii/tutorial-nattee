import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  participant: {
    type: String,
    required: true,
  },
  person: {
    type: Array,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
