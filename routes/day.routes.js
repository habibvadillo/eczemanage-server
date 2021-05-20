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
    meals: [],
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
      let dayDec = result.length;
      let today = new Date();
      while (result.length < 7) {
        let day = `${new Date(
          new Date().setDate(today.getDate() - dayDec)
        ).getDate()}`;
        let month = `${
          new Date(new Date().setDate(today.getDate() - dayDec)).getMonth() + 1
        }`;
        let year = `${new Date(
          new Date().setDate(today.getDate() - dayDec)
        ).getFullYear()}`;
        result.unshift({
          meals: [],
          date: `${day}/${month}/${year}`,
          author: req.session.loggedInUser._id,
        });
        DayModel.create({
          meals: [],
          date: `${day}/${month}/${year}`,
          author: req.session.loggedInUser._id,
        })
          .then((result) => {
            console.log("created day", result);
          })
          .catch((err) => {
            console.error(err);
          });
        dayDec++;
      }
      console.log(result.sort((a, b) => a.date.localeCompare(b.date)));

      res.status(200).json(result.sort((a, b) => a.date.localeCompare(b.date)));
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.patch("/day/:id", isLoggedIn, (req, res, next) => {
  let update = JSON.parse(JSON.stringify(req.body));
  console.log(update);
  DayModel.findByIdAndUpdate(req.params.id, update, { new: true })
    .populate("meals")
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
