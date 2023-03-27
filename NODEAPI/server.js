import { app, port } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

app.listen(port, (err) => {
  if (err) {
    return console.log(`Error in running server ${err}`);
  }
  console.log(`Server is up & running on ${port}`);
});
