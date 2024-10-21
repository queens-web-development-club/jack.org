import React from "react";

import RequireAuth from "@/hooks/useRequireAuth";
import CheckLoading from "@/components/CheckLoading";
import UserContextProvider from "@/Context/UserContext";

export default async function Layout({ children }) {
  return (
    <UserContextProvider>
        <CheckLoading>
          <RequireAuth>{children}</RequireAuth>
        </CheckLoading>
    </UserContextProvider>
  );
}
