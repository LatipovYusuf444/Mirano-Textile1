import api, { toApiError } from "@/lib/axios";

export interface RegisterPayload {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
}

export interface RegisterResponse {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  created_at: string;
}

export async function registerUser(
  payload: RegisterPayload
): Promise<RegisterResponse> {
  try {
    const { data } = await api.post<RegisterResponse>("register/", payload);
    return data;
  } catch (err) {
    // UIga chiqarish uchun normal xabar
    throw toApiError(err);
  }
}
