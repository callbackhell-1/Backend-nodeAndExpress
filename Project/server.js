import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

const port = process.env.PORT;
console.log(process.env.PORT);

app.listen(port, (err) => {
  if (err) {
    return console.log("Server err", err);
  }
  console.log(`Server is up & running on port ${port}`);
});
