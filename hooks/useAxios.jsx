import axios from "axios";

export default function useAxios() {
  const axiosInstance = axios.create({
    baseURL: "/api",
    withCredentials: true,
  });

  return axiosInstance;
}
