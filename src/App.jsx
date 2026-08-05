import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";


export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        
        {/* صفحات داخل Layout */}
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />

      </Route>
    </Routes>
  );
}


