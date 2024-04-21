import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";


import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CareerPage from "./pages/CareerPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
