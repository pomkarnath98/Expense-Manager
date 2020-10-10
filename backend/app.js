const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors());

mongoose.connect(
  process.env.ATLAS_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if(err) console.log(err)
    console.log("The database is connected");
  }
);

const authRoute = require("./routes/auth");

app.use("/api", authRoute);

app.listen(9000, () => {
  console.log("The server is running on port 9000");
});
