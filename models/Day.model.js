const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var daySchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  sleep: {
    type: Number,
  },
  meals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meal",
      required: true,
    },
  ],
  notes: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
daySchema.index({ author: 1, date: 1 }, { unique: true });
//Export the model
module.exports = mongoose.model("Day", daySchema);
