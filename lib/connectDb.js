import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
}
