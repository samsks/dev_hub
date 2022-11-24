import { ReactNode, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { S_StatusLoading } from "../StatusLoading/style";

interface iGlobalLoadindProps {
  children: ReactNode;
}

const GlobalLoading = ({ children }: iGlobalLoadindProps) => {
  const { globalLoading } = useContext(AuthContext);

  return <>{globalLoading ? <S_StatusLoading /> : children}</>;
};

export default GlobalLoading;
