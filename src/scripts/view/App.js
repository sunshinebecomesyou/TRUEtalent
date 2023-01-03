import About from "./pages/contactusPage/ContactUs";
import Home from "./pages/home/Home";
import DaurUlang from "./pages/servicePage/ServicePage";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/aboutPage/AboutPage";
import Invoice from "./pages/invoice/Invoice";
import Services from "./pages/clientPage/ClientPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="aboutPage" element={<AboutPage />} />
        <Route path="servicePage" element={<DaurUlang />} />
        <Route path="clientPage" element={<Services />} />
        <Route path="contactuspage" element={<About />} />
        <Route path="aboutPage/invoice/:id" element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
