"use client";

import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import { useUserContext } from "@/Context/UserContext";

export default function usePersistLogin({ children }) {
  const axios = useAxios();
  const { setUser, setLoading } = useUserContext();
  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const res = await axios.get("/");
        if (ignore) return;
        setUser(res.data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);

  return children;
}
