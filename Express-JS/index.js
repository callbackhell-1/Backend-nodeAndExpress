import express from "express";

const app = express();

app.get("/", (req, res) => {
    
  //   res.send("Hello from express");

  //   res.sendStatus(404);
  //   res.json({
  //     success: true,
  //     products: [],
  //   });

  //   res.sendStatus(400);

  res.status(400).send("This will show");
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

// npm run dev
// status code read
