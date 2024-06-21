import { Schema, model, models } from "mongoose";

const memberSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  testimonial: {
    type: String,
    required: false,
  },
});

const Member = models.Member || model("Member", memberSchema);

export default Member;
