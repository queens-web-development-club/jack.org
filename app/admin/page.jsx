"use client";

import { useState } from "react";
import axios from "axios";
import { useUserContext } from "@/Context/UserContext";
import { useRouter } from "next/navigation";

export default function Admin() {
  const router = useRouter();
  const [account, setAccount] = useState({ username: "", password: "" });
  const { setUser } = useUserContext();
  
  async function login(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/api/", account, { withCredentials: true });
      setUser(res.data.user);
      router.push("/admin/dashboard");
    } catch (error) {
      alert(error.response.data.msg);
    }
  }
  return (
    <main className="w-full h-[calc(100vh-100px)] bg-[#202835] flex justify-center items-center">
      <form
        onSubmit={login}
        className="flex flex-col w-[350px] gap-[1rem] rounded-md bg-[#F7F7F7] p-[1rem]"
      >
        <input
          type="text"
          placeholder="username"
          name="username"
          className="rounded pl-[1rem] bg-[#E3E3E3]"
          value={account.username}
          onChange={(e) =>
            setAccount((prevAcc) => ({
              ...prevAcc,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="rounded pl-[1rem] bg-[#E3E3E3]"
          value={account.password}
          onChange={(e) =>
            setAccount((prevAcc) => ({
              ...prevAcc,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <button className="rounded bg-[#22B1E9]">login</button>
      </form>
    </main>
  );
}
