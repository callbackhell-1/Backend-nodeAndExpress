import mongoose from "mongoose";

// DB connection

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "projectAPI",
    })
    .then(() => {
      console.log("Connected to db");
    })
    .catch((error) => {
      console.log("Not Connected to db", error);
    });
};
