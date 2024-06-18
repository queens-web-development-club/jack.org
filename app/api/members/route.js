import { NextResponse } from "next/server";
import Member from "@/models/memberModel";
import { connectDb } from "@/lib/connectDb";
import { verifyToken } from "@/lib/verifyToken";
import cloudinary from "cloudinary";
import { Buffer } from "buffer";
import { uploadToCloudinary } from "@/lib/uploadToCloudinary";

export async function POST(req) {
  try {
    await verifyToken(req);
  } catch (error) {
    return NextResponse.json({ msg: error.msg }, { status: error.status });
  }

  await connectDb();

  const formData = await req.formData();

  const name = formData.get("name");
  const position = formData.get("position");
  const image = formData.get("image");
  const type = formData.get("type");
  let testimonial;
  if (type === "Pres") {
    testimonial = formData.get("testimonial");
  }

  if (!name || !position || !image) {
    return NextResponse.json(
      { msg: "All fields are required!" },
      { status: 400 }
    );
  }

  // Convert the File object to a buffer
  const buffer = await image.arrayBuffer();
  const imageBuffer = Buffer.from(buffer);

  // Configure Cloudinary
  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  let res;
  try {
    // Upload the buffer to Cloudinary and wait for the result
    res = await uploadToCloudinary(imageBuffer);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ msg: "Image upload failed!" }, { status: 500 });
  }

  const newMemberData = {
    type,
    name,
    position,
    image: res.secure_url,
  };

  if (type === "Pres") {
    newMemberData.testimonial = testimonial; // Ensure 'testimonial' is defined and holds the required value
  }

  const newMember = await Member.create(newMemberData);

  return NextResponse.json({ msg: "Member uploaded!", newMember });
}

export async function PUT(req) {
  try {
    await verifyToken(req);
  } catch (error) {
    return NextResponse.json({ msg: error.msg }, { status: error.status });
  }

  await connectDb();

  const formData = await req.formData();

  const name = formData.get("name");
  const position = formData.get("position");
  const image = formData.get("image");
  const type = formData.get("type");
  let currentImage = formData.get("currentImage");
  let testimonial;
  if (type === "Pres") {
    testimonial = formData.get("testimonial");
  }

  const _id = formData.get("_id");

  if (!name || !position || !image || !_id) {
    return NextResponse.json(
      { msg: "All fields are required!" },
      { status: 400 }
    );
  }

  // Convert the File object to a buffer
  const buffer = await image.arrayBuffer();
  const imageBuffer = Buffer.from(buffer);

  // Configure Cloudinary
  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  // Delete the old image from Cloudinary
  if (currentImage) {
    const publicId = currentImage.split("/").pop().split(".")[0];
    try {
      await cloudinary.v2.uploader.destroy(publicId, {
        resource_type: "image",
        invalidate: true,
      });
    } catch (error) {
      console.log(error.message);
      return NextResponse.json(
        { msg: "Failed to delete old image!" },
        { status: 500 }
      );
    }
  }

  let res;
  try {
    // Upload the buffer to Cloudinary and wait for the result
    res = await uploadToCloudinary(imageBuffer);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ msg: "Image upload failed!" }, { status: 500 });
  }

  const newMemberData = {
    type,
    name,
    position,
    image: res.secure_url,
  };

  if (type === "Pres") {
    newMemberData.testimonial = testimonial; // Ensure 'testimonial' is defined and holds the required value
  }

  const updatedMember = await Member.findByIdAndUpdate(_id, newMemberData, {
    new: true,
  });

  return NextResponse.json({ msg: "Member updated!", updatedMember });
}
