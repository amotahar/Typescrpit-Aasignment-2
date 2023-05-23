export interface BookInterface {
  title: string;
  author: string[];
  rating: number;
  publicationYear: number;
  publisher: { name: string; location: string };
  price: number;
  genre: string;
  reviews: { user: string; comment: string }[];
}
