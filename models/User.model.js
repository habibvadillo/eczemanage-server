const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  name: String,
  email: String,
  dob: Date,
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
