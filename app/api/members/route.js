import { NextResponse } from "next/server";
import Member from "@/models/memberModel";
import { connectDb } from "@/lib/connectDb";
import { verifyToken } from "@/lib/verifyToken";
import cloudinary from "cloudinary";
import { uploadToCloudinary } from "@/lib/uploadToCloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    await verifyToken(req);
  } catch (error) {
    return NextResponse.json({ msg: error.msg }, { status: error.status });
  }

  await connectDb();

  const formData = await req.formData();

  const name = formData.get("name");
  const role = formData.get("role");
  const image = formData.get("image");
  const type = formData.get("type");
  let testimonial;
  if (type === "President") {
    testimonial = formData.get("testimonial");
  }

  if (!name || !role || !image) {
    return NextResponse.json(
      { msg: "All fields are required!" },
      { status: 400 }
    );
  }

  let res;
  try {
    // Upload the buffer to Cloudinary and wait for the result
    res = await uploadToCloudinary(image);
  } catch (error) {
    return NextResponse.json({ msg: "Image upload failed!" }, { status: 500 });
  }

  const newMemberData = {
    type,
    name,
    role,
    image: res.secure_url,
  };

  if (type === "President") {
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
  const role = formData.get("role");
  const image = formData.get("image");
  const type = formData.get("type");
  let currentImage = formData.get("currentImage");
  let testimonial;
  if (type === "President") {
    testimonial = formData.get("testimonial");
  }

  const _id = formData.get("_id");

  const member = await Member.findById(_id);

  if (!name || !role || !image || !_id) {
    return NextResponse.json(
      { msg: "All fields are required!" },
      { status: 400 }
    );
  }

  let res;

  // Delete the old image from Cloudinary only if its diff from the new image
  if (currentImage && currentImage !== member.image) {
    const publicId = currentImage.split("/").pop().split(".")[0];
    try {
      await cloudinary.v2.uploader.destroy(publicId, {
        resource_type: "image",
        invalidate: true,
      });
    } catch (error) {
      return NextResponse.json(
        { msg: "Failed to delete old image!" },
        { status: 500 }
      );
    }
    try {
      // Upload the buffer to Cloudinary and wait for the result
      res = await uploadToCloudinary(image);
    } catch (error) {
      return NextResponse.json(
        { msg: "Image upload failed!" },
        { status: 500 }
      );
    }
  }

  const newMemberData = {
    type,
    name,
    role,
    image: currentImage !== member.image ? res.secure_url : member.image,
  };

  if (type === "President") {
    newMemberData.testimonial = testimonial; // Ensure 'testimonial' is defined and holds the required value
  }

  const updatedMember = await Member.findByIdAndUpdate(_id, newMemberData, {
    new: true,
  });

  return NextResponse.json({ msg: "Member updated!", updatedMember });
}

export async function DELETE(req) {
  try {
    await verifyToken(req);
  } catch (error) {
    return NextResponse.json({ msg: error.msg }, { status: error.status });
  }

  await connectDb();

  const { id, currentPhoto } = await req.json();

  await Member.findByIdAndDelete(id);

  // Delete the old image from Cloudinary
  const publicId = currentPhoto.split("/").pop().split(".")[0];
  try {
    await cloudinary.v2.uploader.destroy(publicId, {
      resource_type: "image",
      invalidate: true,
    });
  } catch (error) {
    return NextResponse.json(
      { msg: "Failed to delete old image!" },
      { status: 500 }
    );
  }

  return NextResponse.json({ msg: "Member deleted!" });
}
