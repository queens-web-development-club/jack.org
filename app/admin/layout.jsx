import React from "react";
import PersistentLogin from "@/hooks/usePersistentLogin";
import RequireAuth from "@/hooks/useRequireAuth";
import CheckLoading from "@/components/CheckLoading";
import UserContextProvider from "@/Context/UserContext";

export default function Layout({ children }) {
  return (
    <UserContextProvider>
      <PersistentLogin>
        <CheckLoading>
          <RequireAuth>{children}</RequireAuth>
        </CheckLoading>
      </PersistentLogin>
    </UserContextProvider>
  );
}
