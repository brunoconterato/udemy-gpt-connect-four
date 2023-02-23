import express from "express";
import UserController from "../controllers/UserController.js";

const router = express.Router();

router.post("/users", UserController.addUser);

export default router;
