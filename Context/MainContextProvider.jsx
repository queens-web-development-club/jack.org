"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Loading from "@/components/Loading";

const MainContext = createContext();

export function useMainContext() {
  return useContext(MainContext);
}

export default function MainContextProvider({ children, data }) {
  const [main, setMain] = useState(null);

  useEffect(() => {

    setMain(data.user[0]);

  }, [data]);

  if (!main) {
    return <Loading />;
  }

  return (
    <MainContext.Provider value={{ main }}>
      {children}
    </MainContext.Provider>
  );
}
