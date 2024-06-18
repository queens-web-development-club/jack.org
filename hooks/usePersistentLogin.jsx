"use client";

import { useEffect, useState } from "react";
import useAxios from "./useAxios";
import { useUserContext } from "@/Context/UserContext";

export default function usePersistLogin({ children }) {
  const axios = useAxios();
  const { setUser, setLoading } = useUserContext();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/");
        setUser(res.data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return children;
}