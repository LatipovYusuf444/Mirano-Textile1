// src/lib/axios.ts
import axios, { AxiosError } from "axios";

export const API_BASE_URL =
  import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000/api/";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});

// Token bo‘lsa avtomatik qo‘shib yuboradi (keyin login qilganingizda ishlaydi)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // sizda token nomi boshqacha bo‘lsa aytasiz
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Xatolarni bir formatga keltiramiz (UIga chiqarish oson bo‘ladi)
export type ApiError = {
  status?: number;
  message: string;
  details?: unknown;
};

export function toApiError(err: unknown): ApiError {
  if (axios.isAxiosError(err)) {
    const e = err as AxiosError<any>;
    return {
      status: e.response?.status,
      message:
        e.response?.data?.message ||
        e.response?.data?.detail ||
        e.message ||
        "Server xatosi",
      details: e.response?.data,
    };
  }
  return { message: "Noma’lum xato", details: err };
}

export default api;
