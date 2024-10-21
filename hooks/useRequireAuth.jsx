"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useUserContext } from "@/Context/UserContext";
import Loading from "@/components/Loading";

export default function useRequireAuth({ children }) {
  const router = useRouter();
  const restrictedPath = "/admin/dashboard"
  const { user } = useUserContext();
  const pathname = usePathname();
  useEffect(() => {
    if (!user) {
      router.push("/admin");
    } else if (user && pathname === "/admin") {
      router.push("/admin/dashboard");
    }
  }, [user, pathname]);

  console.log(user)

  return pathname === "/admin" && user ? (
    <Loading />
  ) : !user && pathname.startsWith(restrictedPath) ? (
    <Loading />
  ) : (
    children
  );
}
