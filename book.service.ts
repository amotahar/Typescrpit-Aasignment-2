import { BookInterface } from "./book.interface";
import { allBookModel } from "./book.model";

export const updateStringFunction = async () => {
  const result = await allBookModel.updateMany(
    { publicationYear: { $gt: 2020 } },
    [
      {
        $set: {
          price: { $toInt: "$price" },
        },
      },
    ]
  );
  return result;
};

export const findBookNameFunction = async (): Promise<
  BookInterface[] | null
> => {
  const result = await allBookModel.find({
    genre: "Sci-Fi",
    "publisher.name": "Roli Books",
  });
  return result;
};

export const RatingWithFeaturedFunction = async (): Promise<
  BookInterface[] | null
> => {
  const result = await allBookModel.aggregate([
    {
      $match: {
        rating: { $gte: 4 },
      },
    },
    {
      $addFields: {
        featured: {
          $cond: {
            if: { $gte: ["$rating", 4.5] },
            then: "BestSeller",
            else: "Popular",
          },
        },
      },
    },
  ]);
  return result;
};
export const findBookGenreFunction = async (): Promise<
  BookInterface[] | null
> => {
  const result = await allBookModel.find({ genre: "Fantasy" });
  return result;
};
