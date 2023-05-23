import express from "express";
import cors from "cors";
import { bookRouters } from "./modules/book.route";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/", bookRouters);
