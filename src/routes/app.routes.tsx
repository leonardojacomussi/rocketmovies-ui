import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import New from "../pages/New";
import Preview from "../pages/Preview";
import Profile from "../pages/Profile";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/new" element={<New />} />
      <Route path="/movie/:id" element={<Preview />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;