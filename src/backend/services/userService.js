import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";

const UserService = {
  async addUser(userData) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(userData.password, salt);
      const user = new UserModel({
        username: userData.username,
        password: hash,
        salt: salt,
      });
      await user.save();
      return user;
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;
