import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import InputAccess from "../../forms/InputAccess";
import SelectModule from "../../forms/SelectModule";
import ModalHeader from "../ModalHeader";
import { S_ModalAddTech } from "./style";
import { signupTechSchema } from "../../../validations/registerTech";
import { techLevelOptions } from "../../../data/optionsData";
import { S_defaultButton } from "../../../styles/button";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

import { UserTechsContext } from "../../../contexts/UserTechsContext";

const ModalAddTech = () => {
  const { setModalRegisterTech, signupTechError, loadModal, addTech } =
    useContext(UserTechsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupTechSchema),
    mode: "onChange",
  });

  const modalAddRef = useOutsideClick(() => {
    setModalRegisterTech(false);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <S_ModalAddTech>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          ref={modalAddRef}
        >
          <ModalHeader
            title="Cadastrar Tecnologia"
            closeModal={setModalRegisterTech}
          />

          <form onSubmit={handleSubmit(addTech)}>
            <InputAccess
              register={() => register("title")}
              type="text"
              label="Nome"
              helperText={errors.title?.message || signupTechError}
              placeholder="Digite o nome da tecnologia"
            />
            <SelectModule
              register={() => register("status")}
              optionList={techLevelOptions}
              label="Selecionar status"
            />
            <S_defaultButton type="submit" disabled={loadModal}>
              {loadModal ? "Cadastrando Tecnologia..." : "Cadastrar Tecnologia"}
            </S_defaultButton>
          </form>
        </motion.div>
      </S_ModalAddTech>
    </motion.div>
  );
};

export default ModalAddTech;
