import React from "react";
import PersistentLogin from "@/hooks/usePersistentLogin";
import RequireAuth from "@/hooks/useRequireAuth";
import UserContextProvider from "@/Context/UserContext";
import CheckLoading from "@/components/CheckLoading";

export default function Layout({ children }) {
  return (
    <UserContextProvider>
      <PersistentLogin>
        <RequireAuth>
          <CheckLoading>{children}</CheckLoading>
        </RequireAuth>
      </PersistentLogin>
    </UserContextProvider>
  );
}
