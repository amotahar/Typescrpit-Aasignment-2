import { Schema, model } from "mongoose";
import { BookInterface } from "./book.interface";

const AllBookSchema = new Schema<BookInterface>({
  title: { type: String, required: true },
  author: [String],
  genre: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
  publisher: {
    name: { type: String, required: true },
    location: { type: String, required: true },
  },
  reviews: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
});

export const allBookModel = model<BookInterface>("booklist", AllBookSchema);
