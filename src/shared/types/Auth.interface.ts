export type AuthData = {
  email: string;
  password: string;
};

export type AuthPageProps = {
  authType: "signup" | "login";
};

export type PageContent = {
  [key in AuthPageProps["authType"]]: {
    title: string;
    buttonText: string;
    footerText: string;
    footerTextSecondary: string;
    link: string;
  };
};