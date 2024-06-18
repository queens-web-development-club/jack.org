"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useUserContext } from "@/Context/UserContext";

export default function useRequireAuth({ children }) {
  const router = useRouter();
  const { user, loading } = useUserContext();
  const pathname = usePathname();
  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.push("/admin");
    } else if (user && pathname === "/admin") {
      router.push("/admin/dashboard");
    }
  }, [user, pathname]);
  return children;
}
