import axios from "axios";
import { useEffect } from "react";
import { cookies } from "next/headers";

export default function useAxiosInt() {
  const axiosInstance = axios.create({
    baseURL: "/api",
  });

  const token = cookies().get("jacked");

  let reqInt;
  useEffect(() => {
    reqInt = axiosInstance.interceptors.request.use((config) => {
      if (!config.headers.Authorization) {
        config.withCredentials = true;
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return () => {
      axiosInstance.interceptors.request.eject(reqInt);
    };
  }, []);
  return axiosInstance;
}
