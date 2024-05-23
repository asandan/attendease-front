import { InputWithLabel } from "@/components/Input";
import {
  ACCESS_TYPES,
  getProfileInputs,
  GetUserDataType,
  HandleChange,
  UpdateProfileRequest,
} from "@/shared";
import { Button } from "@/components/ui";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/shared/store/stores/profile-store";
import { signIn, useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { api } from "@/api";
import { useFormik } from "formik";
import profileSchema from "./schema/profile.schema";
import { useToast } from "@/components/ui/use-toast";

export const ProfileForm = () => {
  const dispatch = useDispatch();
  const profileStore = useSelector(selectors.getProfile());
  const { toast } = useToast();
  const session = useSession() as any;

  const { role, id } = session.data.user;

  const userData = useQuery<GetUserDataType<typeof role>>({
    queryKey: ["profile", role, id],
    queryFn: api.getProfile({ id, role }),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (userData.data && !userData.error) {
      dispatch(actions.mountProfile.success({ ...userData.data }));
    }
  }, [userData.data, userData.error, dispatch]);

  const handleChange: HandleChange = (name, value) => {
    dispatch(actions.editProfile.success({ name, value }));
  };

  const defaultFormikData = {
    email: profileStore.email,
    newPassword: profileStore.newPassword,
    oldPassword: profileStore.oldPassword,
  };

  const { handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: { ...defaultFormikData },
    isInitialValid: false,
    enableReinitialize: true,
    validationSchema: profileSchema,
    onSubmit: async () => {
      try {
        if (profileStore.newPassword === profileStore.oldPassword) {
          const payload: UpdateProfileRequest = {
            id,
            role,
          };

          if (profileStore.email) {
            payload.email = profileStore.email;
          }

          if (profileStore.newPassword) {
            payload.password = profileStore.newPassword;
          }

          if (profileStore.groupId) {
            payload.groupId = +profileStore.groupId;
          }

          if (profileStore.subjectId) {
            payload.subjectId = +profileStore.subjectId;
          }

          const response = await api.updateProfile(payload);

          if (response) {
            toast({
              title: "Success",
              description: "Profile has been updated",
              variant: "positive",
            });

            payload.email &&
              payload.password &&
              (await signIn("credentials", {
                redirect: false,
                email: profileStore.email,
                password: profileStore.newPassword,
              }));

            payload.email &&
              (await signIn("credentials", {
                redirect: false,
                email: profileStore.email,
                password: "qwe123",
              }));
          } else {
            toast({
              title: "Error",
              description: "Couldn't update profile",
              variant: "destructive",
            });
          }
          console.log(response);
        } else {
          toast({
            title: "Error",
            description: "Passwords do not match",
            variant: "destructive",
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  });

  const profileInputs = getProfileInputs(role);

  const isValid = !Object.keys(errors).length;
  
  return (
    <form
      className="flex flex-col items-center w-[23%] gap-5"
      onSubmit={handleSubmit}
    >
      {profileInputs.map((input) => (
        <InputWithLabel
          key={input.id}
          error={(touched as any)[input.id] && !!(errors as any)[input.id]}
          errorMessage={(errors as any)[input.id]}
          handleChange={handleChange}
          value={profileStore[input.id]}
          handleBlur={handleBlur}
          disabled={!input.canEdit}
          {...input}
        />
      ))}
      <Button
        type="submit"
        variant="outline"
        className="w-full"
        disabled={!isValid}
      >
        Submit
      </Button>
    </form>
  );
};
