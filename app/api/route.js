import { NextResponse } from "next/server";
import { connectDb } from "@/lib/connectDb";
import User from "@/models/userModel";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";

export async function POST(req) {
  await connectDb();
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json(
      { msg: "All fields are required!" },
      { status: 400 }
    );
  }

  const user = await User.findOne({ username });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const match = await bcrypt.compare(password, user.password);

  if (!match)
    return NextResponse.json(
      { msg: "Incorrect username or password" },
      { status: 401 }
    );

  const token = sign({ uid: user._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "90d",
  });

  cookies().set({
    name: "jacked",
    value: token,
    path: "/",
    httpOnly: true,
    maxAge: 90 * 24 * 60 * 60,
    secure: true,
    sameSite: "strict",
  });

  return NextResponse.json({ message: "successfully signed in!" });
}
