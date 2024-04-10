import { PageContent } from "@/shared";

export const PAGE_CONTENT: PageContent = {
  signup: {
    title: "Sign up",
    buttonText: "Sign up",
    footerText: "Already have an account? ",
    footerTextSecondary: "Sign in here",
    link: "/auth/login",
  },
  login: {
    title: "Sign in",
    buttonText: "Login",
    footerText: "Don't have an account? ",
    footerTextSecondary: "Sign up here",
    link: "/auth/signup",
  },
};