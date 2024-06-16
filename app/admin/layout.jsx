import React from "react";
import PersistentLogin from "@/hooks/usePersistentLogin";
import RequireAuth from "@/hooks/useRequireAuth";
import UserContextProvider from "@/Context/UserContext";

export default function Layout({ children }) {
  return (
    <UserContextProvider>
      <PersistentLogin>
        <RequireAuth>{children}</RequireAuth>
      </PersistentLogin>
    </UserContextProvider>
  );
}
