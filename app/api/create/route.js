import { NextResponse } from "next/server";
import { connectDb } from "@/lib/connectDb";
import bcrypt from "bcrypt";
import User from "@/models/userModel";


export async function POST(req) {
  const salt = parseInt(process.env.SALT_ROUNDS);
  await connectDb();

  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json(
      { msg: "All fields are required" },
      { status: 400 }
    );
  }

  const duplicate = await User.findOne({ username }).lean().exec();

  //409 means conflicts and 400 means error
  if (duplicate) {
    return NextResponse.json({ msg: "User already exists" }, { status: 409 });
  }

  const hashedPass = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    password: hashedPass,
  });

  if (user) {
    //201 means resource been created
    return NextResponse.json({ msg: "New user created!" }, { status: 201 });
  } else {
    return NextResponse.json({ msg: "Invalid user data" }, { status: 400 });
  }
}
