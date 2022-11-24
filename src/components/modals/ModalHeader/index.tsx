import { HeadlineText, Title } from "../../../styles/typography";
import { S_modalHeader } from "./style";
import { MdOutlineClose } from "react-icons/md";
import { Dispatch, SetStateAction } from "react";

interface iModalHeaderProps {
  title: string;
  closeModal: Dispatch<SetStateAction<boolean>>;
}

const ModalHeader = ({ title, closeModal }: iModalHeaderProps) => {
  return (
    <S_modalHeader>
      <Title tag="h3" fontSize="one">
        {title}
      </Title>
      <HeadlineText tag="span">
        <MdOutlineClose size={20} onClick={() => closeModal(false)} />
      </HeadlineText>
    </S_modalHeader>
  );
};

export default ModalHeader;
