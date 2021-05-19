const router = require("express").Router();

const DayModel = require("../models/Day.model");

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

router.post("/day/start", isLoggedIn, (req, res, next) => {
  let { date, author } = req.body;
  DayModel.create({
    date,
    author,
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/days", isLoggedIn, (req, res, next) => {
  DayModel.find({ author: req.session.loggedInUser._id })
    .populate("meals")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.patch("/day/:id", isLoggedIn, (req, res, next) => {
  let update = JSON.parse(JSON.stringify(req.body));
  console.log(update);
  DayModel.findByIdAndUpdate(req.params.id, update)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
