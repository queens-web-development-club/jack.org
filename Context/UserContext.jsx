"use client";

import { createContext, useContext, useState, useEffect } from "react";
import useAxios from "@/hooks/useAxios";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

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
        if (ignore) return;
        setLoading(false);
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
}
