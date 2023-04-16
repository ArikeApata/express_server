const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.user);
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/", (req, res) => {
  console.log("data", req.body);
  const isValid = true;
  if (isValid) {
    //users.push({ name: req.body.name });
    //res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { name: req.body.name });
  }

  // console.log(req.body.users)
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`added user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`new user has ID ${req.params.id}`);
  });

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
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
