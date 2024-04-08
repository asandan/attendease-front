import { Input, Button } from "@/components/ui";
import styles from "./index.module.scss";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectors as authSelectors } from "@/pages/auth/store";
import { getAuthData } from "@/pages/auth/store/actions";
import authSchema from "./schema/authSchema";

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
  const dispatch = useDispatch();
  const authState = useSelector(authSelectors.getAuth());

  const {
    values,
    isValid,
    errors,
    handleBlur,
    handleChange,
    touched,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues: { ...authState },
    enableReinitialize: true,
    isInitialValid: false,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: authSchema,
  });
  console.log(errors, values);
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
        <div className="flex flex-col gap-[1.3em] w-[70%] items-center">
          <div className="flex flex-col gap-[1.3em]">
            <Input
              type="email"
              placeholder="Login"
              onChange={(e) =>
                dispatch(
                  getAuthData.success({ name: "email", value: e.target.value })
                )
              }
              error={touched.email && !!errors.email}
              className="w-[300px] text-black font-bold bg-primary-inputBG rounded-[15px] focus-visible:ring-0"
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                dispatch(
                  getAuthData.success({
                    name: "password",
                    value: e.target.value,
                  })
                )
              }
              error={touched.password && !!errors.password}
              className="w-[300px] text-black font-bold bg-primary-inputBG border-none rounded-[15px] focus-visible:ring-0"
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
        </div>
      </div>
    </div>
  );
};
