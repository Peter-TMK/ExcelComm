import express, { Request, Response } from "express";
import { sampleProducts } from "./data";

const app = express();
const port = 4444;

app.get("/api/products", (req: Request, res: Response) => {
  res.json(sampleProducts);
});

app.listen(port, () => {
  console.log("Server running on port 4444");
});
