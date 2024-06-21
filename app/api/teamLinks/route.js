import User from "@/models/userModel";
import { connectDb } from "@/lib/connectDb";
import { verifyToken } from "@/lib/verifyToken";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    await verifyToken(req);
  } catch (error) {
    return NextResponse.json({ msg: error.msg }, { status: error.status });
  }

  await connectDb();

  const { link, index } = await req.json();

  if (!link || index) {
    return NextResponse.json(
      { msg: "All fields are required!" },
      { status: 400 }
    );
  }

  try {
    const update = {};
    update[`teamLinks.${index}`] = link;
    await User.findByIdAndUpdate(req.uid, {
      $set: update,
    }).exec();
  } catch (error) {
    return NextResponse.json({ msg: error.message }, { status: 500 });
  }

  return NextResponse.json(
    {
      msg: "Team link updated successfully",
    },
    { status: 200 }
  );
}
