import db from "./src/backend/db.js";
import { populate } from "./src/backend/populate.js";

import express from "express";
const app = express();

populate();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
