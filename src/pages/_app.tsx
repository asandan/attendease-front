import { NavBar } from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import configureStore from "@/store/store";
import "@/styles/globals.css";
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
  const isAuth = router.pathname.startsWith("/auth");
  const { store } = configureStore();
  const isAuthPage = router.pathname.startsWith("/auth");

  useEffect(() => {
    if (!session && !isAuthPage) {
      router.push("/auth/signin");
    }
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
            <main
              className={`flex flex-row h-[100vh] overflow-hidden justify-center `}
            >
              {!isAuth && <NavBar />}
              <Component {...pageProps} />
            </main>
            <Toaster />
          </TooltipProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
}
