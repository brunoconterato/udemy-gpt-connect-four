import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  this.salt = salt;
});

const User = mongoose.model("User", userSchema);

const addUser = async ({ username, password }) => {
  const user = new User({ username, password, salt: "default_salt" });
  try {
    await user.save();
    return "User saved";
  } catch (error) {
    console.log("Error saving user: ", error);
    throw error;
  }
};

export { User, addUser };
