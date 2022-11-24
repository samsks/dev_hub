import api from "./api";

interface iResRegisterData {
  avatar_url: null;
  bio: string | number;
  contact: string | number;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  updated_at: string;
}

export async function postSignup(
  dataForm: object | undefined
): Promise<iResRegisterData> {
  const response = await api.post<iResRegisterData>("/users", dataForm);

  const { data } = response;
  console.log(response);

  return data;
}
