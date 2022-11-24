import { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../contexts/AuthContext";
import HeaderBar from "../../components/home/HeaderBar";
import UserBar from "../../components/home/UserBar";
import { Title } from "../../styles/typography";
import { S_Homepage } from "./style";
import { S_plusButton } from "../../styles/button";
import TechCard from "../../components/home/TechCard";
import ModalAddTech from "../../components/modals/ModalAddTech";
import { GoPlus } from "react-icons/go";
import { UserTechsContext } from "../../contexts/UserTechsContext";
import ModalEditTech from "../../components/modals/ModalEditTech";

const Homepage = () => {
  const { userTechs } = useContext(AuthContext);
  const { modalRegisterTech, setModalRegisterTech, modalEditTech } =
    useContext(UserTechsContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <S_Homepage>
        <HeaderBar />
        <UserBar />
        <main className="container">
          <div>
            <Title tag="h2" fontSize="two">
              Tecnologias
            </Title>
            <S_plusButton onClick={() => setModalRegisterTech(true)}>
              <GoPlus />
            </S_plusButton>
          </div>
          <ul>
            {userTechs.map(({ title, status, id }) => (
              <TechCard key={id} title={title} status={status} idTech={id} />
            ))}
          </ul>
        </main>
        {modalRegisterTech && <ModalAddTech />}
        {modalEditTech && <ModalEditTech />}
      </S_Homepage>
    </motion.div>
  );
};

export default Homepage;
