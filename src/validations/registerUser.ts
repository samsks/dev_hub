import * as yup from "yup";

export const signupSchema = yup.object().shape({
  name: yup.string().required("O campo nome é obrigatório"),
  email: yup
    .string()
    .required("O campo email é obrigatório")
    .email("Digite um email válido"),
  password: yup
    .string()
    .required("O campo senha é obrigatório")
    .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter ao menos um caracter especial")
    .matches(/.{8,}/, "Mínimo 8 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não são iguais"),
  bio: yup.string().required("O campo bio é obrigatório"),
  contact: yup.string().required("O campo de contato é obrigatório"),
});
