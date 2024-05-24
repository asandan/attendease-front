import { NavBar } from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import configureStore from "@/shared/store/store";
import { QueryClient } from "@/shared/util/HOCs";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
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

  const isAuthPage = router.pathname.startsWith("/auth");

  useEffect(() => {
    if (!session && !isAuthPage) {
      router.prefetch("/auth/signin", "/auth/signin", { priority: true });
      router.push("/auth/signin");
    }
  }, []);

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <QueryClient>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <TooltipProvider>
                <div className="flex flex-row w-full">
                  {!isAuthPage && <NavBar />}
                  <main
                    className={`flex flex-row h-[100vh] overflow-hidden w-full justify-center`}
                  >
                    <Component {...pageProps} />
                  </main>
                  <Toaster />
                </div>
              </TooltipProvider>
            </ThemeProvider>
        </QueryClient>
      </Provider>
    </SessionProvider>
  );
}
