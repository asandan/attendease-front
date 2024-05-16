import { DatePicker } from "@/components/DatePicker";
import { Select } from "@/components/Select";
import { Button } from "@/components/ui";
import {
  API,
  getListValue,
  getSelectList,
  HandleMedicalCertificationChange,
  METHODS,
  withSession,
} from "@/shared";
import axios from "axios";
import { useFormik } from "formik";
import { ForwardedRef, LegacyRef, Ref, useRef, useState } from "react";
import { TextArea } from "../TextArea";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMedicalCertificationState,
  getMedicalCertification,
} from "@/shared/store/stores/medical-certification-store/actions";
import { selectors as medicalCertificationSelector } from "@/shared/store/stores/medical-certification-store";
import medicalCertificationSchema from "./schema/medical-certification.schema";
import { useQuery } from "@tanstack/react-query";
import request from "@/shared/util/request";
import { useSession } from "next-auth/react";
import { api } from "@/api";
import { InputFile } from "../InputFile";

export const MedicalCertification = () => {
  const dispatch = useDispatch();
  const ref = useRef<any>(null) ;

  const medicalCertificationsStore = useSelector(
    medicalCertificationSelector.getMedicalCertification()
  );

  const { data } = useQuery<{
    data: {
      data: {
        id: number;
        name: string;
      }[];
    };
  }>({
    queryKey: ["subjects"],
    queryFn: api.getSubjects(),
  });

  const subjects = getSelectList(data?.data.data || []);

  const { file, description, startDate, endDate, subjectId } = medicalCertificationsStore;

  const session = useSession() as any;

  const userId = session.data.user.id;

  const { values, isSubmitting, handleSubmit } = useFormik({
    initialValues: { ...medicalCertificationsStore },
    isInitialValid: false,
    enableReinitialize: true,
    validationSchema: medicalCertificationSchema,
    onSubmit: async (e) => {
      const formData = new FormData();

      formData.append("image", file);
      formData.append("userId", `${userId}`);
      formData.append("description", description);

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/medical-certification`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response) {
          dispatch(clearMedicalCertificationState.success(null));
          if (ref && ref.current && ref.current) ref.current.value = "";
          console.log("Image uploaded:", response.data);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    },
  });

  const handleChange: HandleMedicalCertificationChange = (name, value) => {
    dispatch(getMedicalCertification.success({ name, value }));
  };

  const isValid =
    values.startDate && values.endDate && values.description && values.file && values.subjectId;

  const value = getListValue(subjects, subjectId);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center flex-col gap-5"
    >
      <Select
        items={subjects}
        value={value}
        handleChange={handleChange}
        state="subjectId"
        label="Subject"
      />
      <DatePicker date={startDate} handleChange={handleChange} label="Start date" state="startDate"/>
      <DatePicker date={endDate} handleChange={handleChange} label="End date" state="endDate" />
      <InputFile handleChange={handleChange} ref={ref} />
      <TextArea
        handleChange={handleChange}
        label="Description"
        value={description}
      />
      <Button
        className="w-full"
        variant="outline"
        type="submit"
        disabled={!isValid || isSubmitting}
      >
        Upload
      </Button>
    </form>
  );
};

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});
