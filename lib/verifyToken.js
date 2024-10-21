import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function verifyToken(req) {

  try {
    const token = cookies().get("jacked");
    if (!token) {
      throw new Error("No token found");
    }

    const decoded = jwt.verify(token.value, process.env.REFRESH_TOKEN_SECRET);

    req.uid = decoded.uid;
  } catch (error) {
    throw new Error(error.message)
  }
}
