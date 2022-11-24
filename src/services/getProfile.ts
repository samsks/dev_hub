import api from "./api";
import { iResDataTechs, iResDataWorks } from "./postLogin";

export interface iResProfileData {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string | number | undefined;
  contact: string | number | undefined;
  techs: iResDataTechs[];
  works: iResDataWorks[];
  created_at: string;
  updated_at: string | null;
  avatar_url: string | null;
}

export async function getProfile(): Promise<iResProfileData> {
  const { data } = await api.get<iResProfileData>("/profile");
  console.log(`profile.api: ${data}`);

  return data;
}
