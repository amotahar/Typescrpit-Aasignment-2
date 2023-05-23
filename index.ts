import mongoose from "mongoose";
import { app } from "./server";

const port = 3000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:57017/bookstore");
    app.listen(port, () => {
      console.log(`listening port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
