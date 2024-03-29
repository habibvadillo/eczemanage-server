const router = require("express").Router();
const MealModel = require("../models/Meal.model");

router.post("/createmeal", (req, res, next) => {
  const { name, ingredients, description, author } = req.body;
  MealModel.create({
    name,
    description,
    ingredients,
    author,
  })
    .then((meal) => {
      res.status(200).json(meal);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/meals/:id", (req, res, next) => {
  MealModel.findByIdAndRemove(req.params.id)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/meals/:id", (req, res, next) => {
  MealModel.findById(req.params.id)
    .then((meal) => {
      res.status(200).json(meal);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/meals", (req, res, next) => {
  MealModel.find({ author: req.session.loggedInUser._id })
    .then((meals) => {
      res.json(meals);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.patch("/meals/:id", (req, res, next) => {
  MealModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients,
      },
    },
    { new: true }
  )
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/meals/:id", (req, res, next) => {
  MealModel.findByIdAnddelete(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
