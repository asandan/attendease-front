import { NavBar } from "@/components/NavBar";
import configureStore from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAuth = router.pathname.startsWith("/auth");
  const { store } = configureStore();
  return (
    <Provider store={store}>
      <main
        className={`flex flex-row h-[100vh] overflow-hidden justify-center border`}
      >
        {!isAuth && <NavBar />}
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
