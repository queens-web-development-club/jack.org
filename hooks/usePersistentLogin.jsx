"use client";

import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import { useUserContext } from "@/Context/UserContext";

export default function usePersistLogin({ children }) {
  const axios = useAxios();
  const { setUser } = useUserContext();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return loading ? <div>loading...</div> : children;
}
