"use client";
import Loading from "./Loading";
import { useUserContext } from "@/Context/UserContext";

export default function CheckLoading({ children }) {
  const { loading } = useUserContext();
  return loading ? <Loading /> : children;
}
