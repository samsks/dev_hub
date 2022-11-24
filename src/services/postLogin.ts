import api from "./api";

export interface iResDataTechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string | null;
}

export interface iResDataWorks {
  id: string;
  title: string | number;
  description: string | number;
  deploy_url: string;
  created_at: string;
  updated_at: string | null;
}

export interface iResLoginData {
  user: {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string | number;
    contact: string | number;
    techs: iResDataTechs[];
    works: iResDataWorks[];
    created_at: string;
    updated_at: string | null;
    avatar_url: string | null;
  };
  token: string;
}

export async function postLogin(
  dataForm: object | undefined
): Promise<iResLoginData> {
  const { data } = await api.post<iResLoginData>("/sessions", dataForm);
  return data;
}
