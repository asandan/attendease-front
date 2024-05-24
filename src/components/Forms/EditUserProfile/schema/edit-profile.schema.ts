import * as yup from 'yup';

const editProfileSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email address"),
  password: yup.string().min(6, "Min length is 6 symbols"),
  name: yup.string().min(2, "Please enter valid name"),
  surname: yup.string().min(2, "Please enter valid surname"),
});

export default editProfileSchema