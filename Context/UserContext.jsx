"use client";


import Loading from "@/components/Loading";
import { createContext, useContext, useState, useEffect } from "react";


const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export default function UserContextProvider({ children, userData}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  if(!user){
    return <Loading/>
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
