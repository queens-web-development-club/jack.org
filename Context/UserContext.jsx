"use client";

import { createContext, useContext, useState, useEffect } from "react";


const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export default function UserContextProvider({ children, userData}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setUser(userData);
      setLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
}
