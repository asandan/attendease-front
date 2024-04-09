import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const useLogout = () => {
  const { push } = useRouter();

  return useCallback(async () => {
    await signOut({
      redirect: true,
    });
  }, []);
};