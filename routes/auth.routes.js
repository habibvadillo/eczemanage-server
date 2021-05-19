const UserModel = require("../models/User.model");
const bcrypt = require("bcrypt");

const router = require("express").Router();

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  UserModel.findOne({ email })
    .then((userData) => {
      bcrypt
        .compare(password, userData.password)
        .then((theyMatch) => {
          if (theyMatch) {
            userData.passwordHash = "***";
            req.session.loggedInUser = userData;
            res.status(200).json(userData);
          } else {
            res.status(500).json({
              error: "Passwords don't match",
            });
            return;
          }
        })
        .catch((err) => {
          res.status(500).json({
            error: "Email format not correct",
          });
          return;
        });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.post("/signout", (req, res) => {
  req.session.destroy();
  // Nothing to send back to the user
  res.status(204).json({});
});

// middleware to check if user is loggedIn
const isLoggedIn = (req, res, next) => {
  if (req.session.loggedInUser) {
    //calls whatever is to be executed after the isLoggedIn function is over
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized user",
      code: 401,
    });
  }
};

// THIS IS A PROTECTED ROUTE
// will handle all get requests to http:localhost:5005/api/user
router.get("/user", isLoggedIn, (req, res, next) => {
  res.status(200).json(req.session.loggedInUser);
});

router.post("/signup", (req, res) => {
  const { name, username, email, password, dob } = req.body;

  if (!username || !email || !password) {
    res.status(500).json({
      errorMessage: "please enter form data",
    });
    return;
  }

  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);

  UserModel.create({
    username,
    name,
    dob,
    email,
    password: hash,
  })
    .then((user) => {
      user.password = "***";
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
