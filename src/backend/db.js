import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.set('strictQuery', false);

const uri = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_HOST}.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB database");
});

db.on("error", (error) => {
  console.log("MongoDB connection error:", error);
});

db.on("disconnected", () => {
  console.log("MongoDB connection disconnected");
});

export default db;
