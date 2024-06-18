"use client";

import axios from "axios";
import { useUserContext } from "@/Context/UserContext";
import ImageUpload from "@/components/admin/ImageUpload";
import { useState } from "react";

export default function Members() {
  const [member, setMember] = useState({
    name: "",
    position: "",
    image: "",
    type: "Normal",
    testimonial: "",
  });

  const { user } = useUserContext();
  async function addMember(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", member.name);
    formData.append("position", member.position);
    formData.append("image", member.image);
    formData.append("type", member.type);
    try {
      const res = await axios.post("/api/members", formData);
      console.log(res);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  }

  return (
    <main className="w-full h-[calc(100vh-100px)] bg-[#202835] p-[2rem]">
      <ImageUpload addMember={addMember} setMember={setMember} member={member}/>
      {/* {user.images.map((img) => (
        <img src={img.image} alt="" />
      ))} */}
    </main>
  );
}
