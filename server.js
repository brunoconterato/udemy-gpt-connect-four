import db from "./src/backend/config/database.js";
import express from "express";

import { populate } from "./src/backend/populate.js";
import { addUser, User } from "./src/backend/schema.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

populate();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/users", (req, res) => {
  res.send(db.users);
});

app.post("/api/users", async (req, res) => {
  try {
    const message = await addUser(req.body);
    res.send({ message });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
