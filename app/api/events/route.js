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
  const { description, title, date, location } = await req.json();
  if (!description || !title || !date || !location) {
    return NextResponse.json(
      { msg: "All fields are required!" },
      { status: 400 }
    );
  }

  const user = await User.findByIdAndUpdate(
    req.uid,
    {
      $push: { events: { description, title, date, location } },
    },
    { new: true }
  ).exec();

  // Retrieve the newly added event (assuming it is the last one in the array)
  const newEvent = user.events[user.events.length - 1];

  // Return the new event in the response
  return NextResponse.json(newEvent, { status: 200 });
}

export async function PUT(req) {
  try {
    await verifyToken(req);
  } catch (error) {
    return NextResponse.json({ msg: error.msg }, { status: error.status });
  }

  await connectDb();

  const { description, title, date, location, _id } = await req.json();

  if (!description || !title || !date || !location || !_id) {
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
          "events.$[el].description": description,
          "events.$[el].title": title,
          "events.$[el].date": date,
          "events.$[el].location": location,
        },
      },
      {
        arrayFilters: [{ "el._id": _id }],
      }
    ).exec();

    return NextResponse.json(
      {
        msg: "Event updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: error.message }, { status: 500 });
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
    return NextResponse.json({ msg: "Event ID is required!" }, { status: 400 });
  }

  try {
    await User.findByIdAndUpdate(req.uid, {
      $pull: { events: { _id } },
    }).exec();

    return NextResponse.json(
      { msg: "Event deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: error.message }, { status: 500 });
  }
}
