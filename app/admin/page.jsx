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
      console.log(error.response.msg);
    }
  }
  return (
    <form onSubmit={login}>
      <input
        type="text"
        placeholder="username"
        name="username"
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
        value={account.password}
        onChange={(e) =>
          setAccount((prevAcc) => ({
            ...prevAcc,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <button>login</button>
    </form>
  );
}
