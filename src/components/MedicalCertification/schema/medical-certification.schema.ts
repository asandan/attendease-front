import * as yup from 'yup';

const medicalCertificationSchema = yup.object().shape({
  subjectId: yup.string().required("Subject is required"),
  date: yup.string().required("Date is required"),
  file: yup.string().required("File is required"),
  description: yup.string().required("Description is required"),
});

export default medicalCertificationSchema