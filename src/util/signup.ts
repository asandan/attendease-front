import { AuthData } from "@/types/Auth.interface";


export const signup = async ({ email, password }: AuthData) => {
  const payload = { email, password, roleId: 1 };
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