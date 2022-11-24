import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { iResDataTechs, iResDataWorks } from "../services/postLogin";

export interface iUserData {
  id?: string;
  name?: string;
  email: string;
  course_module?: string;
  bio?: string | number | undefined;
  contact?: string | number | undefined;
  techs?: iResDataTechs[];
  works?: iResDataWorks[];
  created_at?: string;
  updated_at?: string | null;
  avatar_url?: string | null;
}

export interface iAuthContext {
  globalLoading: boolean;
  setGlobalLoading: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  currentRoute: string;
  setCurrentRoute: Dispatch<SetStateAction<string>>;
  userData: iUserData;
  setUserData: Dispatch<SetStateAction<iUserData>>;
  userTechs: iResDataTechs[];
  setUserTechs: Dispatch<SetStateAction<iResDataTechs[]>>;
  loginError: string;
  setLoginError: Dispatch<SetStateAction<string>>;
  signupError: string;
  setSignupError: Dispatch<SetStateAction<string>>;
  navigate?: NavigateFunction;
  loginSubmit: (dataForm: object, callback: () => void) => Promise<void>;
  signupSubmit: (dataForm: object, callback: () => void) => Promise<void>;
  clearUser: () => void;
}
