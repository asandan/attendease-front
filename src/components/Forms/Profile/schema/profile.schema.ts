import * as yup from 'yup';

const profileSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email address"),
  oldPassword: yup.string().min(6, "Min length is 6 symbols"),
  newPassword: yup.string().min(6, "Min length is 6 symbols"),
});

export default profileSchema