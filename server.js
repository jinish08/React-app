require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.CONNECT_DB);

app.use("/", require("./routes/notesRoute"));

if (process.env.NODE_ENV == "production") {
  app.use(express.static("my-app/build"));
}

app.listen(process.env.PORT || 3001, () => {
  console.log("Server running on port 3001");
});
