var express = require('express');
var router = express.Router();


const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

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

router.get("/", (req, res) => {
  messages.find()
      .then((messages) => res.json(messages))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
  let date = new Date();
  const _id = uuidv4();
  const name = req.body.name;
  const message = req.body.message;
  const time = date.getTime();

  const newMessage = new messages({
    _id,
    name,
    message,
    time,
  });

  newMessage
      .save()
      .then((message) => res.json(message))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/search/:id", (req, res) => {
  console.log(req.params.id);
  messages.findById(req.params.id)
      .then((message) => res.json(message))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/delete/:id", (req, res) => {
  messages.findByIdAndDelete(req.params.id)
      .then(() => res.json("Posting is deleted."))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/deleteall", (req, res) => {
  messages.remove({})
      .then(() => res.json("All Postings are deleted."))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/update/:id", (req, res) => {
  messages.findById(req.params.id)
      .then((message) => {
        message.name = req.body.name;
        message.message = req.body.message;
        message
            .save()
            .then((message) => res.json(message))
            .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
