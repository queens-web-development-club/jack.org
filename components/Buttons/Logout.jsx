"use client";

import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/Context/UserContext";

export default function Logout() {
  const axios = useAxios();
  const router = useRouter();
  const {setUser} = useUserContext();

  return (
    <button
      onClick={async () => axios.delete("/").then(setUser(null)).then(() => router.push("/admin"))}
      className="rounded bg-red-500 text-white p-2 ml-2 h-10"
    >
      Logout
    </button>
  );
}
