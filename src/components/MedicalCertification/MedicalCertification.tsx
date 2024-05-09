import { DatePicker } from "@/components/DatePicker";
import { InputFile } from "@/components/InputFile";
import { Select } from "@/components/Select";
import { Button } from "@/components/ui";
import {
  API,
  getSelectList,
  HandleMedicalCertificationChange,
  METHODS,
  withSession,
} from "@/shared";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { TextArea } from "../TextArea";
import { useDispatch, useSelector } from "react-redux";
import { getMedicalCertification } from "@/shared/store/stores/medical-certification-store/actions";
import { selectors as medicalCertificationSelector } from "@/shared/store/stores/medical-certification-store";
import { selectors } from "@/shared/store/stores/user-store";
import medicalCertificationSchema from "./schema/medical-certification.schema";
import { useQuery } from "@tanstack/react-query";
import request from "@/shared/util/request";

export const MedicalCertification = () => {
  const dispatch = useDispatch();

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
    queryFn: request(METHODS.GET, API.SUBJECT.GET_SUBJECTS(0, 1000)),
  });

  const subjects = getSelectList(data?.data.data || []);

  const { file, description, date, subjectId } = medicalCertificationsStore;

  const { id: userId } = useSelector(selectors.getUser());

  const { values, isSubmitting, handleSubmit } = useFormik({
    initialValues: { ...medicalCertificationsStore },
    isInitialValid: false,
    enableReinitialize: true,
    validationSchema: medicalCertificationSchema,
    onSubmit: async () => {
      const formData = new FormData();

      formData.append("image", file);
      formData.append("userId", userId);
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

        console.log("Image uploaded:", response.data);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    },
  });

  const handleChange: HandleMedicalCertificationChange = (name, value) => {
    dispatch(getMedicalCertification.success({ name, value }));
  };

  const isValid =
    values.date && values.description && values.file && values.subjectId;

  const value = subjectId ? subjects.find((subject) => subject.value === +subjectId)?.label : undefined;
  console.log(value);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center flex-col gap-5"
    >
      <Select
        items={subjects}
        value={`${value}`}
        handleChange={handleChange}
        label="Subject"
      />
      <DatePicker date={date} handleChange={handleChange} label="Date" />
      <InputFile handleChange={handleChange} />
      <TextArea handleChange={handleChange} label="Description" />
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
