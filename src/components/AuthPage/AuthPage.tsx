import { Input, Button } from "@/components/ui";
import styles from "./index.module.scss";
import Image from "next/image";
import { ChangeEvent, FC } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectors as authSelectors } from "@/pages/auth/store";
import { getAuthData } from "@/pages/auth/store/actions";
import authSchema from "./schema/authSchema";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { signup, login } from "@/util";

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

const PAGE_CONTENT: PageContent = {
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

export const AuthPage: FC<AuthPageProps> = ({ authType }) => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const authState = useSelector(authSelectors.getAuth());

  const isLogin = authType === "login";

  const {
    values,
    errors,
    handleBlur,
    handleChange: handleChangeFormik,
    touched,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues: { ...authState },
    enableReinitialize: true,
    isInitialValid: false,
    onSubmit: async (values) => {
      try {
        if (isLogin) {
          const hasLoggedIn = await login(values);
          if (hasLoggedIn) {
            enqueueSnackbar("Logged in successfully", { variant: "success" });
            push("/");
          } else {
            enqueueSnackbar("Invalid credentials", { variant: "error" });
          }
        } else {
          const hasSignedUp = await signup(values);
          if (hasSignedUp) {
            enqueueSnackbar("Signed up successfully", { variant: "success" });
            push("/auth/login");
          } else {
            enqueueSnackbar("Unknown error occured", { variant: "error" });
          }
        }
      } catch (e) {}
    },
    validationSchema: authSchema,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(getAuthData.success({ name: e.target.id, value: e.target.value }));
    handleChangeFormik(e);
  };

  const isValid =
    !Object.keys(errors).length && values.email && values.password;

  return (
    <div className="flex flex-col justify-center items-center h-full ">
      <Image
        quality={100}
        width={400}
        height={93}
        src={"/logo.png"}
        alt="logo"
      />
      <div className="flex flex-col gap-[3.1em] items-center">
        <span className={`w-[615px] text-center font-normal ${styles.signin}`}>
          {PAGE_CONTENT[authType].title}
        </span>
        <form
          className="flex flex-col gap-[1.3em] w-[70%] items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-[1.3em]">
            <Input
              type="email"
              id="email"
              placeholder="Login"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.email && !!errors.email}
              errorMessage={errors.email}
              className="w-[300px] text-black font-bold bg-primary-inputBG rounded-[15px] focus-visible:ring-0"
            />
            <Input
              type="password"
              id="password"
              placeholder="Password"
              onBlur={handleBlur}
              value={values.password}
              onChange={handleChange}
              error={touched.password && !!errors.password}
              errorMessage={errors.password}
              className="w-[300px] text-black font-bold bg-primary-inputBG  rounded-[15px] focus-visible:ring-0"
            />
          </div>
          <span>
            {PAGE_CONTENT[authType].footerText}
            <Link href={PAGE_CONTENT[authType].link} className="underline">
              {PAGE_CONTENT[authType].footerTextSecondary}
            </Link>
          </span>
          <Button
            className="bg-[#000] text-[#fff] w-[75%] rounded-lg"
            disabled={!isValid || isSubmitting}
          >
            {PAGE_CONTENT[authType].buttonText}
          </Button>
        </form>
      </div>
    </div>
  );
};
