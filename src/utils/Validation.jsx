import * as Yup from 'yup';
export const SignupSchema = Yup.object().shape({
  // Name: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&]){8,}/, "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:").required('Required')
});

export const popularSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  price: Yup.string().required('Required'),
  duration: Yup.string().required('Required'),
});

export const tourTypeSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
});

export const sliderSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
});

export const footerInfoSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string().required('Required'),
  whatAppNumber: Yup.string().required('Required'),
  lineNumber: Yup.string().required('Required'),
  fbUrl: Yup.string().required('Required'),
  instaUrl: Yup.string().required('Required'),
  teleUrl: Yup.string().required('Required'),
  waUrl: Yup.string().required('Required'),
});

export const decriptionSchema = Yup.object().shape({
  findTourDesc: Yup.string().required('Required'),
  popularTourDesc: Yup.string().required('Required'),
  serviceDesc: Yup.string().required('Required'),
  mostVisitedDesc: Yup.string().required('Required'),
  tourPackagesDesc: Yup.string().required('Required'),
  whyUsDesc: Yup.string().required('Required'),
  frequentlyQuestionDesc: Yup.string().required('Required'),
});


export const generalInfoSchema = Yup.object().shape({
  timeWork : Yup.string().required('Required'),
  description: Yup.string().required('Required'),
});

export const specialOfferSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  price: Yup.string().required('Required'),
  duration: Yup.string().required('Required'),
 // descriptions: Yup.array().of(
   // Yup.string().required('Description is required')
  //),
  //imgList: Yup.mixed().required('Image is required'),
});