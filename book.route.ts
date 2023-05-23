import express from "express";
import {
  RatingWithFeatured,
  findBookGenre,
  findBookName,
  updateString,
} from "./book.controller";

export const bookRouters = express.Router();

bookRouters.get("/findbook", findBookGenre);
bookRouters.get("/findbookwithname", findBookName);
bookRouters.get("/featured", RatingWithFeatured);
bookRouters.get("/updatestring", updateString);
