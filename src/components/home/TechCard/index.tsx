import { useContext } from "react";
import { UserTechsContext } from "../../../contexts/UserTechsContext";
import { HeadlineText, Title } from "../../../styles/typography";
import { S_techCard } from "./style";

interface iTechCardProps {
  title: string | number;
  status: string;
  idTech: string;
}

const TechCard = ({ title, status, idTech }: iTechCardProps) => {
  const { showTech } = useContext(UserTechsContext);

  return (
    <S_techCard onClick={() => showTech(idTech)}>
      <Title tag="h4" fontSize="one">
        {title}
      </Title>
      <HeadlineText tag="span" className="grey">
        {status}
      </HeadlineText>
    </S_techCard>
  );
};

export default TechCard;
