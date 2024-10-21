"use client";

import { useEffect } from "react";
import useAxios from "./useAxios";
import { useUserContext } from "@/Context/UserContext";

export default function usePersistLogin({ children, user }) {
  const axios = useAxios();
  const { setUser, setLoading } = useUserContext();


  return children;
}
