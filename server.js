import db from "./src/backend/db.js";
import express from "express";

import { populate } from "./src/backend/populate.js";
import { User } from "./src/backend/schema.js";
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

app.post("/api/users", (req, res) => {
  console.log("Adding user...");
  const { name, username, password } = req.body;
  console.log(name, username, password);
  const user = User({ username, password });
  user.save((err) => {
    if (err) res.status(500).send("Error adding user");
    else {
      res.status(200).send("User added");
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
