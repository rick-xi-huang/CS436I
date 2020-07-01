const express = require('express');
const router = express.Router();

const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const messages = require("../models/messages.model");

const uri = "mongodb://localhost:27017/myapp";
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
