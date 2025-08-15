import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EstimatePage from "../pages/EstimatePage";

export default function AppRoutes() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<EstimatePage />} />
        <Route path="/estimate" element={<EstimatePage />} />
      </Routes>
    </Router>
  );
}