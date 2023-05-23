import { Request, Response, NextFunction } from "express";
import {
  RatingWithFeaturedFunction,
  findBookGenreFunction,
  findBookNameFunction,
  updateStringFunction,
} from "./book.service";

export const RatingWithFeatured = async (res: Response) => {
  const getRes = await RatingWithFeaturedFunction();
  res.send(getRes);
};

export const findBookName = async (res: Response) => {
  const getRes = await findBookNameFunction();
  res.send(getRes);
};

export const updateString = async (res: Response) => {
  const getRes = await updateStringFunction();
  res.send(getRes);
};

export const findBookGenre = async (res: Response) => {
  const getRes = await findBookGenreFunction();
  res.send(getRes);
};
