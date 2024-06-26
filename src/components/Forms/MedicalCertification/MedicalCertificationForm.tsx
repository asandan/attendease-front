import { DatePicker } from "@/components/DatePicker";
import { Select } from "@/components/Select";
import { Button } from "@/components/ui";
import {
  API,
  getListValue,
  getSelectList,
  getWeeksPassed,
  HandleChange,
  METHODS,
  withSession,
} from "@/shared";
import axios from "axios";
import { useFormik } from "formik";
import { ForwardedRef, LegacyRef, Ref, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMedicalCertificationState,
  getMedicalCertification,
} from "@/shared/store/stores/medical-certification-store/actions";
import { selectors as medicalCertificationSelector } from "@/shared/store/stores/medical-certification-store";
import medicalCertificationSchema from "./schema/medical-certification.schema";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { api } from "@/api";
import { InputFile } from "@/components/InputFile";
import { TextArea } from "@/components/TextArea";

export const MedicalCertificationForm = () => {
  const dispatch = useDispatch();
  const ref = useRef<any>(null);

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

  const { file, description, startDate, endDate, subjectId } =
    medicalCertificationsStore;

  const fileSize = (((file as any).size as any) / 1048576).toFixed(2);

  console.log(fileSize);

  const session = useSession() as any;

  const userId = session.data.user.id;

  const { values, isSubmitting, handleSubmit } = useFormik({
    initialValues: { ...medicalCertificationsStore },
    enableReinitialize: true,
    validationSchema: medicalCertificationSchema,
    onSubmit: async () => {
      const formData = new FormData();

      formData.append("image", file);
      formData.append("userId", `${userId}`);
      formData.append("description", description);
      
      if (endDate) formData.append("endDate", endDate.toISOString());
      if (startDate) formData.append("startDate", startDate.toISOString());

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

  const handleChange: HandleChange = (name, value) => {
    dispatch(getMedicalCertification.success({ name, value }));
  };

  const isValid =
    values.startDate &&
    values.endDate &&
    values.description &&
    values.file &&
    values.subjectId;

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
      <div className="flex flex-col w-full">
        <DatePicker
          date={startDate}
          handleChange={handleChange}
          label="Start date"
          state="startDate"
        />
        {startDate && endDate && (
          <div className="flex self-start mt-5 font-semibold">
            <span>Week: {getWeeksPassed(startDate)}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col w-full">
        <DatePicker
          date={endDate}
          handleChange={handleChange}
          label="End date"
          state="endDate"
        />
        {startDate && endDate && typeof endDate !== "string" && (
          <div className="flex self-start mt-5 font-semibold">
            <span>Week: {getWeeksPassed(endDate)}</span>
          </div>
        )}
      </div>
      {endDate && typeof endDate === "string" && endDate === "error" && (
        <span className="self-start font-semibold text-red-400">
          End date goes earlier that start date
        </span>
      )}
      <div className="flex flex-col w-full font-semibold">
        <InputFile handleChange={handleChange} ref={ref} />
        {!isNaN(+fileSize) ? (
          fileSize && +fileSize < 0.06 ? (
            <span className="mt-3 text-green-400">{fileSize}MB</span>
          ) : (
            <span className="mt-3 text-red-400">File is too big</span>
          )
        ) : (
          <></>
        )}
        {}
      </div>
      <TextArea
        handleChange={handleChange}
        label="Reason description"
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
