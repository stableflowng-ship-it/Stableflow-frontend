import axios from "axios";

export const publicRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});