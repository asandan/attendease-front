import { AuthData } from "@/shared/types/Auth.interface";


export const signup = async ({ email, password }: AuthData) => {
  const payload = { email, password, role: "STUDENT" };
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return await response.json();
}