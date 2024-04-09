import { AuthData } from "@/types/Auth.interface";

export const login = async (data: AuthData): Promise<any> => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin`,
    {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    const errorResponse = await response.json();
    console.error("login error: ", errorResponse.message);
    throw new Error(errorResponse.message);
  }
  return await response.json();
};