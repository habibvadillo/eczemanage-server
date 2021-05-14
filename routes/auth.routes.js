const User = require("../models/User.model");
const UserModel = require("../models/User.model");

const router = require("express").Router();

router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  UserModel.find({ email: email })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signup", (req, res) => {
  const { name, username, email, password, dob } = req.body;

  if (!username || !email || !password) {
    res.status(500).json({
      errorMessage: "please enter form data",
    });
  }

  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);

  UserModel.create({
    username,
    name,
    dob,
    email,
    passwordhash: hash,
  })
    .then((user) => {
      user.passwordhash = "***";
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
