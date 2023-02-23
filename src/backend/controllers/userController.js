import UserService from "../services/UserService.js";

const UserController = {
  async addUser(req, res) {
    try {
      const user = await UserService.addUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.log("Error adding user: ", error);
      res.status(500).json({ message: "Error adding user" });
    }
  },
};

export default UserController;
