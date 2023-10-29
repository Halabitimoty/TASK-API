const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const database = mongoose.connect(process.env.MONGO_DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const authroute = require("./app/routes/auth.route");
const taskroute = require("./app/routes/task.route");

database
  .then(() => {
    console.log("database-connected");
  })
  .catch((error) => {
    console.log("database-not-connected");
  });

app.use(
  cors({
    origin: "*",
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/v1/auth", authroute);
app.use("/v1/task", taskroute);

app.get("/", (req, res) => {
  res.send("Task Api");
});

app.listen(port, () => {
  console.log(`Task Api url =>> http://localhost:${port}`);
});
