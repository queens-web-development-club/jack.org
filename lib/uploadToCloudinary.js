import cloudinary from "cloudinary";

// Helper function to upload the image to Cloudinary
export const uploadToCloudinary = async (image) => {

    // Convert the File object to a buffer
  const buffer = await image.arrayBuffer();
  const imageBuffer = Buffer.from(buffer);

  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader
      .upload_stream({ resource_type: "image" }, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      })
      .end(imageBuffer);
  });
};
