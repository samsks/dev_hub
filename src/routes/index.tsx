import { Navigate, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from "../pages/Home";
import LoginPage from "../pages/Login";
import SignPage from "../pages/SignUp";
import ProtectedRoutes from "../components/ProtectedRoutes";
import UserTechsProvider from "../contexts/UserTechsContext";

// interface iAnimatePresenceProps {
//   children: Element;
// }
// const AnimatePresence: React.FunctionComponent<iAnimatePresenceProps>;

const MainRoutes = () => (
  <AnimatePresence>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route element={<UserTechsProvider />}>
          <Route path="/home" element={<Homepage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </AnimatePresence>
);

export default MainRoutes;
