import { api } from "@/api";
import { InputWithLabel } from "@/components/Input";
import { Select } from "@/components/Select";
import {
  ACCESS_TYPES,
  getListValue,
  GetProfileRequest,
  getSelectList,
  HandleChange,
} from "@/shared";
import {
  actions,
  selectors,
} from "@/shared/store/stores/edit-user-profile-store";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import { skip } from "node:test";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui";
import { UpdateEditProfileRequest } from "@/shared/types/EditProfile.interface";
import { useToast } from "@/components/ui/use-toast";
import editProfileSchema from "./schema/edit-profile.schema";

export const ROLE_LIST = [
  {
    label: ACCESS_TYPES.ADMIN,
    value: ACCESS_TYPES.ADMIN,
  },
  {
    label: ACCESS_TYPES.STUDENT,
    value: ACCESS_TYPES.STUDENT,
  },
  {
    label: ACCESS_TYPES.TEACHER,
    value: ACCESS_TYPES.TEACHER,
  },
];

export const EditUserProfileForm = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const { role, password, userId, email, groupId, subjectId, name, surname } =
    useSelector(selectors.getEditProfile());

  const { data: userData } = useQuery({
    queryFn: api.getUsers(role as ACCESS_TYPES),
    queryKey: ["users", role],
  });

  const users = getSelectList(userData?.data || []);
  const userValue = getListValue(users, `${userId}`);

  const { data: profileData } = useQuery({
    queryFn: api.getProfile({ id: userId, role } as GetProfileRequest),
    queryKey: ["edit-profile", userData?.data, role, userValue],
  });

  const handleChange: HandleChange = (name, value) => {
    dispatch(actions.getEditProfileData.success({ name, value }));
  };

  useEffect(() => {
    if (profileData?.data && !profileData?.error) {
      const payload: Record<string, any> = {
        ...profileData?.data?.account,
      };
      console.log(profileData?.data);
      if (profileData?.data.groupId) {
        payload.groupId = profileData?.data?.group?.id;
      }

      if (profileData?.data.subjectId) {
        payload.subjectId = profileData?.data?.subject?.id;
      }
      dispatch(actions.mountEditProfileData.success(payload));
    }
  }, [profileData?.data, profileData?.error, userValue, dispatch]);

  useEffect(() => {
    dispatch(actions.clearEditProfileData.success({ name: "role" }));
  }, [role, dispatch]);

  const { data: groupData } = useQuery({
    queryFn: api.getGroups(0, 1000),
    queryKey: ["profile-group"],
  });

  const { data: subjectData } = useQuery({
    queryFn: api.getSubjects(0, 1000),
    queryKey: ["subject-group"],
  });

  const groups = getSelectList(groupData?.data?.data || []);
  const groupValue = getListValue(groups, `${groupId}`);

  const subjects = getSelectList(subjectData?.data?.data || []);
  const subjectValue = getListValue(subjects, `${subjectId}`);

  const defaultFormikData = {
    email,
    password,
    name,
    surname,
  };

  const { handleSubmit, errors, touched, handleBlur, isValid } = useFormik({
    initialValues: defaultFormikData,
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    validationSchema: editProfileSchema,
    onSubmit: async () => {
      try {
        const payload: UpdateEditProfileRequest = {
          id: +userId,
          role: role as ACCESS_TYPES,
        };

        if (email) {
          payload.email = email;
        }

        if (password) {
          payload.password = password;
        }

        if (groupId) {
          payload.groupId = +groupId;
        }

        if (subjectId) {
          payload.subjectId = +subjectId;
        }
        if (name) {
          payload.name = name;
        }

        if (surname) {
          payload.surname = surname;
        }

        const response = await api.updateProfile(payload);

        if (response) {
          toast({
            title: "Success",
            description: "Profile has been updated",
            variant: "positive",
          });
        } else {
          toast({
            title: "Error",
            description: "Couldn't update profile",
            variant: "destructive",
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <form
      className="flex flex-col items-center w-[23%] gap-5"
      onSubmit={handleSubmit}
    >
      <Select
        items={ROLE_LIST}
        handleChange={handleChange}
        state="role"
        label="Role"
        value={role}
      />
      <Select
        items={users}
        handleChange={handleChange}
        state="userId"
        label="User"
        disabled={!role}
        value={userValue}
      />
      <InputWithLabel
        type="email"
        id="email"
        label="Email"
        placeholder="Enter new email"
        state="email"
        handleChange={handleChange}
        error={touched.email && errors.email}
        errorMessage={errors.email}
        handleBlur={handleBlur}
        value={email}
        disabled={!(role && userValue)}
      />
      <InputWithLabel
        type="password"
        id="password"
        label="Password"
        placeholder="Enter new password"
        state="password"
        handleChange={handleChange}
        error={touched.password && errors.password}
        errorMessage={errors.password}
        handleBlur={handleBlur}
        value={password}
        disabled={!(role && userValue)}
      />
      <InputWithLabel
        type="text"
        id="name"
        label="Name"
        state="name"
        placeholder="Enter new name"
        handleChange={handleChange}
        error={touched.name && errors.name}
        errorMessage={errors.name}
        handleBlur={handleBlur}
        value={name}
        disabled={!(role && userValue)}
      />
      <InputWithLabel
        type="text"
        id="surname"
        state="surname"
        label="Surname"
        placeholder="Enter new surname"
        handleChange={handleChange}
        error={touched.surname && errors.surname}
        errorMessage={errors.surname}
        handleBlur={handleBlur}
        value={surname}
        disabled={!(role && userValue)}
      />
      {role === ACCESS_TYPES.TEACHER ? (
        <Select
          label="Subject"
          handleChange={handleChange}
          state="subjectId"
          items={subjects}
          value={subjectValue}
          defaultValue={subjectValue}
          disabled={!(role && userValue)}
        />
      ) : role === ACCESS_TYPES.STUDENT ? (
        <Select
          label="Group"
          state="groupId"
          handleChange={handleChange}
          defaultValue={groupValue}
          value={groupValue}
          items={groups}
          disabled={!(role && userValue)}
        />
      ) : (
        <></>
      )}
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
