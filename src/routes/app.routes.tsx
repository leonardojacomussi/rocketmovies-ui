import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import New from "../pages/New";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
    </Routes>
  );
};

export default AppRoutes;