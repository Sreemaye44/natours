const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running", app: "natours" });
});

app.post("/", (req, res) => { 
  res.send("you can post to this endpoint...");
});

const port = 3000;

app.listen(port, () => {
  console.log(`App is running ${port}...`);
});
