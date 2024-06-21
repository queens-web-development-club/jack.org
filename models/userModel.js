import { Schema, model, models } from "mongoose";

const historySchema = new Schema({
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const events = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  history: {
    type: [historySchema],
    required: false,
  },

  events: {
    type: [events],
    required: false,
  },

  teamLinks: {
    type: [String],
    required: false,
  },
});

const User = models.User || model("User", userSchema);

export default User;
