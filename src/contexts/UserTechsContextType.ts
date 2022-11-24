import { Dispatch, SetStateAction } from "react";
import { iResDataTechs } from "../services/postLogin";

export interface iUserTechsContext {
  modalRegisterTech: boolean;
  setModalRegisterTech: Dispatch<SetStateAction<boolean>>;
  modalEditTech: boolean;
  setModalEditTech: Dispatch<SetStateAction<boolean>>;
  selectedTech: iResDataTechs;
  setSelectedTech: Dispatch<SetStateAction<iResDataTechs>>;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isDelete: boolean;
  setIsDelete: Dispatch<SetStateAction<boolean>>;
  signupTechError: string;
  setSignupTechError: Dispatch<SetStateAction<string>>;
  editTechError: string;
  setEditTechError: Dispatch<SetStateAction<string>>;
  loadModal: boolean;
  setLoadModal: Dispatch<SetStateAction<boolean>>;
  selectedTechForm: (dataForm: object) => void;
  addTech: (dataForm: object) => Promise<void>;
  editTech: (dataForm: object) => Promise<void>;
  deleteTech: () => Promise<void>;
  showTech: (idTech: string) => void;
}
