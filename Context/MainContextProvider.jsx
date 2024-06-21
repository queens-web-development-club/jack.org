"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import Loading from "@/components/Loading";

const MainContext = createContext();

export function useMainContext() {
  return useContext(MainContext);
}

export default function MainContextProvider({ children }) {
  const pathname = usePathname();
  const [main, setMain] = useState(null);
  const [mainLoading, setMainLoading] = useState(true);
  useEffect(() => {
    let ignore = false;
    if (pathname.startsWith("/admin")) {
      setMainLoading(false);
    }
    const fetchMain = async () => {
      try {
        const { data } = await axios.get("/api/main");
        if (ignore) return;
        setMain(data.user[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setMainLoading(false);
      }
    };
    if (!pathname.startsWith("/admin")) {
      fetchMain();
    }
    return () => {
      ignore = true;
    };
  }, []);

  if (mainLoading) {
    return <Loading />;
  }

  return (
    <MainContext.Provider value={{ main, mainLoading, setMainLoading }}>
      {children}
    </MainContext.Provider>
  );
}
