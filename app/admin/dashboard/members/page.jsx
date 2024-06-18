"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useUserContext } from "@/Context/UserContext";

export default function Members() {
  const [member, setMember] = useState({ name: "", position: "", image: "" });
  const { user } = useUserContext();
  async function addMember(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", member.name);
    formData.append("position", member.position);
    formData.append("image", member.image);
    try {
      const res = await axios.post("/api/members", formData);
      console.log(res);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  }

  return (
    <main className="w-full h-[calc(100vh-100px)] bg-[#202835]">
      <form onSubmit={addMember}>
        <input
          type="text"
          placeholder="name"
          value={member.name}
          name="name"
          onChange={(e) =>
            setMember((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="position"
          value={member.position}
          name="position"
          onChange={(e) =>
            setMember((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) =>
            setMember((prev) => ({
              ...prev,
              [e.target.name]: e.target.files[0],
            }))
          }
        />
        <button>upload</button>
      </form>
      {/* {user.images.map((img) => (
        <img src={img.image} alt="" />
      ))} */}
    </main>
  );
}
