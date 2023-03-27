import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

//console.log(process.env.PORT); //4000
const port = process.env.PORT;

app.listen(port, (err) => {
  if (err) {
    return console.log(`Error in running server ${err}`);
  }
  console.log(`Server is up & running on ${port}`);
});
