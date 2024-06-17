"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useUserContext } from "@/Context/UserContext";

export default function useRequireAuth({ children }) {
  const router = useRouter();
  const { user } = useUserContext();
  const pathname = usePathname();
  useEffect(() => {
    if (!user) {
      router.push("/admin");
    } else {
      router.push("/admin/dashboard");
    }
  }, [user, pathname]);
  return children;
}
