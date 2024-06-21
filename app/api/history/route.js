import { connectDb } from "@/lib/connectDb";
import User from "@/models/userModel";
import { verifyToken } from "@/lib/verifyToken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await verifyToken(req);
  } catch (error) {
    return NextResponse.json({ msg: error.msg }, { status: error.status });
  }
  await connectDb();
  const { year, description, _id } = await req.json();
  if (!year || !description) {
    return NextResponse.json(
      { msg: "All fields are required!" },
      { status: 400 }
    );
  }

  await User.findByIdAndUpdate(req.uid, {
    $push: { history: { year, description } },
  }).exec();

  return NextResponse.json({ history: { year, description } }, { status: 200 });
}

export async function PUT(req) {
  try {
    await verifyToken(req);
  } catch (error) {
    return NextResponse.json({ msg: error.msg }, { status: error.status });
  }

  await connectDb();

  const { year, description, _id } = await req.json();

  if (!year || !description || !_id) {
    return NextResponse.json(
      { msg: "All fields are required!" },
      { status: 400 }
    );
  }

  try {
    await User.findByIdAndUpdate(
      req.uid,
      {
        $set: {
          "history.$[el].year": year,
          "history.$[el].description": description,
        },
      },
      {
        arrayFilters: [{ "el._id": _id }],
      }
    ).exec();

    return NextResponse.json(
      { history: { year, description } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Error updating history entry", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
    try {
        await verifyToken(req);
    } catch (error) {
        return NextResponse.json({ msg: error.msg }, { status: error.status });
    }
    
    await connectDb();
    
    const { _id } = await req.json();
    
    if (!_id) {
        return NextResponse.json({ msg: "All fields are required!" }, { status: 400 });
    }
    
    try {
        await User.findByIdAndUpdate(req.uid, {
        $pull: { history: { _id: _id } },
        }).exec();
    
        return NextResponse.json({ msg: "History entry deleted!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
        { msg: "Error deleting history entry", error: error.message },
        { status: 500 }
        );
    }
}
