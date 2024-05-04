import { NavBar } from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import configureStore from "@/shared/store/store";
import { getAuthData } from "@/shared/store/stores/auth-store/actions";
import "@/styles/globals.css";
import { useSession } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const { store } = configureStore();

  const isAuth = router.pathname.startsWith("/auth");
  const isAuthPage = router.pathname.startsWith("/auth");

  console.log(session)

  useEffect(() => {
    if (!session && !isAuthPage) {
      router.push("/auth/signin");
    }
    localStorage.setItem("userId", session?.user?.id)
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <SnackbarProvider>
          <TooltipProvider>
            <div className="flex flex-row w-full">
              {!isAuth && <NavBar />}
              <main className={`flex flex-row h-[100vh] overflow-hidden w-full justify-center`}>
                <Component {...pageProps} />
              </main>
              <Toaster />
            </div>
          </TooltipProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
}
