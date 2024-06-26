import { Input, Button } from "@/components/ui";
import styles from "./index.module.scss";
import Image from "next/image";
import { ChangeEvent, FC } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectors as authSelectors } from "@/shared/store/stores/auth-store";
import { getAuthData } from "@/shared/store/stores/auth-store/actions";
import authSchema from "./schema/auth.schema";
import { useRouter } from "next/router";
import { signup, login } from "@/shared/util";
import { useToast } from "../ui/use-toast";
import { AuthPageProps } from "@/shared";
import { PAGE_CONTENT } from "./constants";

export const AuthPage: FC<AuthPageProps> = ({ authType }) => {
  const { push, prefetch } = useRouter();
  const { toast } = useToast();
  
  const dispatch = useDispatch();

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
            toast({
              title: "Logged in successfully",
              description: "You have been logged in.",
              variant: "positive",
            });
            await prefetch("/", "/", { priority: true });
            push("/");
          } else {
            toast({
              title: "Error",
              description: "Invalid credentials",
              variant: "destructive",
            });
          }
        } else {
          const hasSignedUp = await signup(values);
          if (hasSignedUp) {
            toast({
              title: "Signed up successfully",
              description: "You have been signed up.",
              variant: "positive",
            });
            push("/auth/login");
          } else {
            toast({
              title: "Error",
              description: "Unknown error occured",
              variant: "destructive",
            });
          }
        }
      } catch (e) {
        console.log(e);
      }
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
    <div className="flex flex-col justify-center items-center h-[60%] w-[30%] self-center  rounded-xl">
      <Image
        quality={100}
        width={400}
        height={93}
        src={"/logo.png"}
        alt="logo"
      />
      <div className="flex flex-col gap-[3.1em] items-center">
        <span
          className={`w-[615px] text-center font-normal ${styles.signin} text-red-400`}
        >
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
              className="w-[300px] text-[#fff] font-bold bg-pimary-inputBG rounded-[15px] focus-visible:ring-0"
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
              className="w-[300px] text-white font-bold bg-primary-inputBG  rounded-[15px] focus-visible:ring-0"
            />
          </div>
          <span>
            {PAGE_CONTENT[authType].footerText}
            <Link href={PAGE_CONTENT[authType].link} className="underline">
              {PAGE_CONTENT[authType].footerTextSecondary}
            </Link>
          </span>
          <Button
            className="w-[75%] rounded-lg"
            disabled={!isValid || isSubmitting}
          >
            {PAGE_CONTENT[authType].buttonText}
          </Button>
        </form>
      </div>
    </div>
  );
};
