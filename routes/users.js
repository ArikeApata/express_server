const express = require("express");
const router = express.Router();

const users = [
  {
    name: "Olamilekan",
    age: "25",
    gender: "Male",
    id: 1,
  },
  {
    name: "Ariana",
    age: "29",
    gender: "Female",
    id: 2,
  },
];

router
  .route("/")
  .get((req, res) => {
    res.send(users);
  })
  .post((req, res) => {
    let data = req.body;
    data.id = users.length + 1;
    users.push(req.body);
    res.json({ msg: "data added succesfully", data });
  });

module.exports = router;
