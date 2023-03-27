import mongoose from "mongoose";

// DB connection

export const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "BACKENDAPI",
    })
    .then(() => {
      console.log("Connected to db");
    })
    .catch((error) => {
      console.log("Not Connected to db", error);
    });
};
