import { NextResponse } from "next/server";
import Member from "@/models/memberModel";
import { connectDb } from "@/lib/connectDb";
import { verifyToken } from "@/lib/verifyToken";
import cloudinary from "cloudinary";
import { Buffer } from "buffer";

// Helper function to upload the image to Cloudinary
const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader
      .upload_stream({ resource_type: "image" }, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      })
      .end(buffer);
  });
};

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

  const newMember = await Member.create({
    name,
    position,
    image: res.secure_url,
  });

  return NextResponse.json({ msg: "Member uploaded!" });
}
