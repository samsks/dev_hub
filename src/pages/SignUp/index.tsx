import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";

import { S_defaultButton, S_fitButton } from "../../styles/button";
import InputAccess from "../../components/forms/InputAccess";
import SelectModule from "../../components/forms/SelectModule";

import { S_SignUp } from "./style";
import svgLogo from "../../assets/logo/Logo.svg";

import { signupSchema } from "../../validations/registerUser";
import StatusLoading from "../../components/StatusLoading";
import { AuthContext } from "../../contexts/AuthContext";
import { courseModulesOptions } from "../../data/optionsData";

interface iSignupPage {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

const SignPage = () => {
  const { loading, signupSubmit, signupError } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iSignupPage>({
    resolver: yupResolver(signupSchema),
    mode: "onChange",
  });

  const submit = (data: object) => {
    signupSubmit(data, () => {
      reset();
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <S_SignUp>
        {loading && <StatusLoading />}
        <div className="divSignHeader">
          <img src={svgLogo} alt="logo do site" />
          <Link to={"/"}>
            <S_fitButton tag="span">Voltar</S_fitButton>
          </Link>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className="divSignTitle">
            <h3>Crie sua conta</h3>
            <p>Rápido e grátis, vamos nessa</p>
          </div>
          <InputAccess
            register={() => register("name")}
            type="text"
            label="Nome"
            helperText={
              errors.name?.message ||
              (signupError?.toLowerCase().includes("name") && signupError)
            }
            placeholder="Digite aqui seu nome"
          />
          <InputAccess
            register={() => register("email")}
            type="email"
            label="Email"
            helperText={
              errors.email?.message ||
              (signupError?.toLowerCase().includes("email") && signupError)
            }
            placeholder="Digite aqui seu email"
          />
          <InputAccess
            register={() => register("password")}
            type="password"
            label="Senha"
            helperText={errors.password?.message}
            placeholder="Digite aqui sua senha"
          />
          <InputAccess
            register={() => register("confirmPassword")}
            type="password"
            label="Comfirmar Senha"
            helperText={errors.confirmPassword?.message}
            placeholder="Confirme aqui sua senha"
          />
          <InputAccess
            register={() => register("bio")}
            type="text"
            label="Bio"
            helperText={errors.bio?.message}
            placeholder="Fale sobre você"
          />
          <InputAccess
            register={() => register("contact")}
            type="text"
            label="Contato"
            helperText={errors.contact?.message}
            placeholder="Opção de contato"
          />

          <SelectModule
            register={() => register("course_module")}
            optionList={courseModulesOptions}
            label="Selecionar módulo"
          />

          <S_defaultButton type="submit" disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </S_defaultButton>
        </form>
      </S_SignUp>
    </motion.div>
  );
};

export default SignPage;
