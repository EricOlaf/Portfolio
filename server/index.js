const express = require("express");
const { json } = require("body-parser");

const controller = require("./controller");

const app = express();

app.use(json());

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
