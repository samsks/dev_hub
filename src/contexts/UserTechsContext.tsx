import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { iResDataTechs } from "../services/postLogin";
import { AuthContext } from "./AuthContext";
import { iUserTechsContext } from "./UserTechsContextType";

export const UserTechsContext = createContext({} as iUserTechsContext);

const UserTechsProvider = () => {
  const { userTechs, setUserTechs } = useContext(AuthContext);

  const [modalRegisterTech, setModalRegisterTech] = useState(false);
  const [modalEditTech, setModalEditTech] = useState(false);
  const [selectedTech, setSelectedTech] = useState({} as iResDataTechs);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [signupTechError, setSignupTechError] = useState("");
  const [editTechError, setEditTechError] = useState("");
  const [loadModal, setLoadModal] = useState(false);

  useEffect(() => {
    !modalRegisterTech && setSignupTechError("");
  }, [modalRegisterTech]);

  useEffect(() => {
    !modalEditTech && setEditTechError("");
  }, [modalEditTech]);

  const addTech = async (dataForm: object | undefined) => {
    try {
      setLoadModal(true);
      const response = await api.post("/users/techs", dataForm);

      const { data } = response;

      setUserTechs([data, ...userTechs]);

      toast.success(`Tech ${data.title} adicionada`);
      setSignupTechError("");
      setModalRegisterTech(false);
    } catch (error: any) {
      const { message } = error.response.data;

      toast.error(message);
      typeof message === "string"
        ? setSignupTechError(message)
        : setSignupTechError(message[0]);
    } finally {
      setLoadModal(false);
    }
  };

  const selectedTechForm = (dataForm: object | undefined) => {
    if (isEdit) {
      editTech(dataForm);
    } else if (isDelete) {
      deleteTech();
    }
  };

  const editTech = async (dataForm: object | undefined) => {
    if (selectedTech.status !== dataForm.status) {
      try {
        setLoadModal(true);
        const dataForSend = {
          status: dataForm.status,
        };
        const response = await api.put(
          `/users/techs/${selectedTech.id}`,
          dataForSend
        );

        const { data } = response;

        const result = userTechs.map((tech) => {
          if (tech.id !== data.id) {
            return tech;
          } else {
            return data;
          }
        });
        setUserTechs(result);

        setLoadModal(false);
        toast.success(
          `Status da Tech ${dataForm.title} alterado para ${dataForm.status}`,
          { autoClose: 2000 }
        );
      } catch (error) {
      } finally {
        setIsEdit(false);
        setModalEditTech(false);
      }
    } else {
      setIsEdit(false);
      toast.info("Selecione um status diferente");
    }
  };

  const deleteTech = async () => {
    try {
      setLoadModal(true);

      await api.delete(`/users/techs/${selectedTech.id}`);

      const result = userTechs.filter((tech) => tech.id !== selectedTech.id);

      setUserTechs(result);

      toast.info(`Tech ${selectedTech.title} removida do perfil`, {
        autoClose: 2000,
      });

      setLoadModal(false);
    } catch (error) {
      toast.warning("Não foi possível excluir");
    } finally {
      setIsDelete(false);
      setModalEditTech(false);
    }
  };

  const showTech = async (idTech: string) => {
    try {
      const result = userTechs.find((tech) => tech.id === idTech);
      setSelectedTech(result);
      setModalEditTech(true);
    } catch (error) {}
  };

  return (
    <UserTechsContext.Provider
      value={{
        modalRegisterTech,
        setModalRegisterTech,
        modalEditTech,
        setModalEditTech,
        selectedTech,
        setSelectedTech,
        isEdit,
        setIsEdit,
        isDelete,
        setIsDelete,
        signupTechError,
        setSignupTechError,
        editTechError,
        setEditTechError,
        loadModal,
        setLoadModal,
        selectedTechForm,
        addTech,
        editTech,
        deleteTech,
        showTech,
      }}
    >
      <Outlet />
    </UserTechsContext.Provider>
  );
};

export default UserTechsProvider;
