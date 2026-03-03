import mongoose from "mongoose";
const bookSchema = new mongoose.Schema(
  {
    book_title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    total_copies: {
      type: Number,
      required: true,
    },
    available_copies: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    purchased_on: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { timestamps: true },
);
const Book = mongoose.model("Book", bookSchema)
export default Book