import { useContext } from "react";
import { S_HeaderBar } from "./style";
import svgLogo from "../../../assets/logo/Logo.svg";
import { S_fitButton } from "../../../styles/button";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";

const HeaderBar = () => {
  const { clearUser } = useContext(AuthContext);

  return (
    <S_HeaderBar>
      <div className="container">
        <img src={svgLogo} alt="" />
        <Link onClick={() => clearUser()} to={"/"}>
          <S_fitButton tag="span">Sair</S_fitButton>
        </Link>
      </div>
    </S_HeaderBar>
  );
};

export default HeaderBar;
