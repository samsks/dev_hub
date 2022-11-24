import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { HeadlineText, Title } from "../../../styles/typography";
import { S_UserBar } from "./style";

const UserBar = () => {
  const { userData } = useContext(AuthContext);

  return (
    <S_UserBar>
      <div className="container">
        <Title tag="h2" fontSize="one">
          Olá, {userData?.name}
        </Title>
        <HeadlineText tag="p">{userData?.course_module}</HeadlineText>
      </div>
    </S_UserBar>
  );
};

export default UserBar;
