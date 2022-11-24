import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { getProfile } from "../services/getProfile";
import { iResDataTechs, postLogin } from "../services/postLogin";
import { postSignup } from "../services/postSignup";
import { iAuthContext, iUserData } from "./AuthContextType";

interface iAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as iAuthContext);

const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("");
  const [userData, setUserData] = useState({} as iUserData);
  const [userTechs, setUserTechs] = useState([] as iResDataTechs[]);

  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@hbToken");

      if (token) {
        setGlobalLoading(true);
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const data = await getProfile();

          setUserData(data);
          setUserTechs(data.techs);

          navigate("/home");
        } catch (error) {
          localStorage.removeItem("@hbToken");

          navigate("/");
        } finally {
          setGlobalLoading(false);
        }
      }
    })();
  }, []);

  const loginSubmit = async (
    dataForm: object | undefined,
    callback: () => void
  ) => {
    try {
      setLoading(true);

      const data = await postLogin(dataForm);

      const { user, token } = data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUserData(user);
      setUserTechs(user.techs);

      localStorage.setItem("@hbToken", token);

      toast.success(`Bem vindo(a) ${user.name}!`);
      if (callback) {
        callback();
      }
      setLoginError("");
      navigate(!currentRoute ? "/home" : currentRoute, { replace: true });
    } catch (error: any) {
      const { message } = error.response.data;

      toast.error(message);
      typeof message === "string"
        ? setLoginError(message)
        : setLoginError(message[0]);
      setUserData({} as iUserData);
    } finally {
      setLoading(false);
    }
  };

  const clearUser = async () => {
    localStorage.removeItem("@hbToken");

    setUserData({ email: userData.email });
    setUserTechs([]);

    toast.success("Logout realizado com sucesso");
  };

  const signupSubmit = async (
    dataForm: object | undefined,
    callback: () => void
  ) => {
    try {
      setLoading(true);
      const data = await postSignup(dataForm);

      setUserData(data);
      toast.success("Cadastro realizado com Sucesso!", {
        autoClose: 1000,
      });
      toast.info("Já pode realizar seu login", {
        autoClose: 2000,
      });

      if (callback) {
        callback();
      }
      setSignupError("");
      setLoginError("");
      navigate("/");
    } catch (error: any) {
      const {
        response: {
          data: { message },
        },
      } = error;
      setLoading(false);
      setSignupError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        globalLoading,
        setGlobalLoading,
        loading,
        setLoading,
        clearUser,
        userData,
        setUserData,
        userTechs,
        setUserTechs,
        loginSubmit,
        signupSubmit,
        loginError,
        setLoginError,
        signupError,
        setSignupError,
        currentRoute,
        setCurrentRoute,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
