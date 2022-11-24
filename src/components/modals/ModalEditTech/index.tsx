import { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { UserTechsContext } from "../../../contexts/UserTechsContext";
import { techLevelOptions } from "../../../data/optionsData";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { S_defaultButton } from "../../../styles/button";
import InputAccess from "../../forms/InputAccess";
import SelectModule from "../../forms/SelectModule";
import ModalHeader from "../ModalHeader";
import { S_ModalEditTech } from "./style";

const ModalEditTech = () => {
  const {
    setModalEditTech,
    editTechError,
    setIsEdit,
    setIsDelete,
    selectedTech,
    loadModal,
    selectedTechForm,
  } = useContext(UserTechsContext);

  const { register, handleSubmit } = useForm({});

  const modalEditRef = useOutsideClick(() => {
    setModalEditTech(false);
  });

  useEffect(() => {
    function checkBtnClickForm(event) {
      const target = event.target;

      if (modalEditRef.current.children[1][2] === target) {
        setIsEdit(true);
      } else if (modalEditRef.current.children[1][3] === target) {
        setIsDelete(true);
      }
    }

    document.addEventListener("mousedown", checkBtnClickForm);

    return () => {
      document.removeEventListener("mousedown", checkBtnClickForm);
    };
  }, []);

  return (
    <S_ModalEditTech>
      <div ref={modalEditRef}>
        <ModalHeader
          title="Tecnologia - Detalhes"
          closeModal={setModalEditTech}
        />

        <form onSubmit={handleSubmit(selectedTechForm)}>
          <InputAccess
            register={() => register("title")}
            type="text"
            label="Nome"
            helperText={editTechError}
            value={selectedTech.title}
            disabled={selectedTech ? true : false}
          />
          <SelectModule
            register={() => register("status")}
            optionList={techLevelOptions}
            defaultValue={selectedTech.status}
            label="Selecionar status"
          />
          <div className="divButtons">
            <S_defaultButton
              type="submit"
              disabled={loadModal}
              className="btnChange"
            >
              {loadModal ? "..." : "Alterar"}
            </S_defaultButton>
            <S_defaultButton
              type="submit"
              disabled={loadModal}
              className="disabled"
            >
              {loadModal ? "..." : "Excluir"}
            </S_defaultButton>
          </div>
        </form>
      </div>
    </S_ModalEditTech>
  );
};

export default ModalEditTech;
