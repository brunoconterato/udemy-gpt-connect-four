import mongoose from "mongoose";
import { User } from "./schema.js";

const populateUsers = () => {
  const user = new User({
    username: "jack",
    password: "12345",
  });
  user.save((err, user) => {
    if (err) throw err;
    console.log(`Created user ${user.username}`);
  });
};

export const populate = () => {
  // console.log("Populating database...");
//   populateUsers();
};
    