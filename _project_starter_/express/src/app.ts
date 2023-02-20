import express, { Express, Request, Response } from "express";
import cors from "cors";
import path from "path";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!!!");
});

app.get("/simple", (_req: Request, res: Response) => {
  res.header("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "../data", "simple.json"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
