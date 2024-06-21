"use client";

import useAxios from "@/hooks/useAxios";
import { useState } from "react";

export default function ChangePassword() {
  const axios = useAxios();
  const [passwords, setPasswords] = useState({ oldPassword: "", password: "" });

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.put("/", passwords);
      setPasswords({ oldPassword: "", password: "" });
      alert("Password changed successfully!");
    } catch (error) {
      alert(error.response.data.msg);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="flex flex-col bg-[#F7F7F7] w-[300px] rounded ml-[3rem] p-[1rem] gap-[0.3rem]"
    >
      <label htmlFor="oldPassword">Old Password</label>
      <input
        type="password"
        name="oldPassword"
        className="p-[0.5rem] rounded border-[#22B1E9] border"
        id="oldPassword"
        value={passwords.oldPassword}
        onChange={(e) =>
          setPasswords((prev) => ({ ...prev, oldPassword: e.target.value }))
        }
      />
      <label htmlFor="password">New Password</label>
      <input
        type="password"
        name="password"
        id="password"
        className="p-[0.5rem] rounded border-[#22B1E9] border"
        value={passwords.password}
        onChange={(e) =>
          setPasswords((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <button
        type="submit"
        className="p-[0.5rem] bg-[#22B1E9] text-white rounded mt-[1.5rem]"
      >
        Change Password
      </button>
    </form>
  );
}
