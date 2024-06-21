import { NextResponse } from "next/server";
import { connectDb } from "@/lib/connectDb";
import User from "@/models/userModel";
import Member from "@/models/memberModel";

export async function GET(req) {
  await connectDb();

  // Fetch users without sensitive data
  const user = await User.find()
    .select("-password -__v -username -_id")
    .lean()
    .exec();

  // Check if users were found
  if (!user) {
    return NextResponse.json({ msg: "User not found" }, { status: 404 });
  }

  // Fetch all member images
  const images = await Member.find().lean().exec();

  // Process each user
  user[0].members = images;
  user[0].history.sort((a, b) => parseInt(b.year) - parseInt(a.year));

  // Respond with the processed users
  return NextResponse.json({ user }, { status: 200 });
}
