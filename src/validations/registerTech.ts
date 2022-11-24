import * as yup from "yup";

export const signupTechSchema = yup.object().shape({
  title: yup.string().required("O nome da tecnologia é obrigatório"),
});
