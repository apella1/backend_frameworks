const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!\n Express");
});

const port = 8000;

app.listen(8000, () => {
  console.log(`Express server running on port ${port}`);
});
