import React from "react";

import RequireAuth from "@/hooks/useRequireAuth";
import CheckLoading from "@/components/CheckLoading";
import UserContextProvider from "@/Context/UserContext";
import { cookies } from "next/headers";

export default async function Layout({ children }) {
  const cookieStore = await cookies();
  let data = null;
  if(cookieStore.get("jacked")){
    try {
      const res = await fetch("https://jack-org.vercel.app/api", {
        headers: {
          Authorization: `Bearer ${cookieStore.get("jacked").value}`,
        },
      });
      data = await res.json();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserContextProvider userData={data?.user}>
      <RequireAuth>{children}</RequireAuth>
    </UserContextProvider>
  );
}
