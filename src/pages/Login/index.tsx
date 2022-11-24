import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { motion } from "framer-motion";

import { S_LoginPage } from "./style";
import svgLogo from "../../assets/logo/Logo.svg";
import InputAccess from "../../components/forms/InputAccess";
import { S_defaultButton } from "../../styles/button";

import { loginSchema } from "../../validations/loginUser";
import StatusLoading from "../../components/StatusLoading";
import { AuthContext } from "../../contexts/AuthContext";

const LoginPage = () => {
  const { loginSubmit, loading, userData, loginError } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  useEffect(() => {
    userData && reset({ email: userData.email });
  }, [userData]);

  const submit = (data: object) => {
    loginSubmit(data, () => {
      reset();
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <S_LoginPage>
        {loading && <StatusLoading />}
        <img src={svgLogo} alt="logo do site" />
        <form onSubmit={handleSubmit(submit)}>
          <h3>Login</h3>
          <InputAccess
            register={() => register("email")}
            label="Email"
            helperText={
              errors.email?.message ||
              (loginError?.toLowerCase().includes("email") && loginError)
            }
            type="text"
            placeholder="Digite aqui seu email"
          />
          <InputAccess
            register={() => register("password")}
            label="Senha"
            helperText={
              errors.password?.message ||
              (loginError?.toLowerCase().includes("password") && loginError)
            }
            type="password"
            placeholder="Digite aqui sua senha"
          />
          <S_defaultButton type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </S_defaultButton>
        </form>
        <div className="divSign">
          <Link to={"/signup"}>Ainda não possui uma conta?</Link>
          <Link to={"/signup"} className="linkButton">
            <S_defaultButton tag="span" className="disabled spanButton">
              Cadastre-se
            </S_defaultButton>
          </Link>
        </div>
      </S_LoginPage>
    </motion.div>
  );
};

export default LoginPage;
