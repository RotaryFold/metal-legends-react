import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

import HomePage from "./pages/home/Home.jsx";
import BandsPage from "./pages/bands/Bands.jsx";
import GalleryPage from "./pages/gallery-page/GalleryPage.jsx";
import ConcertsPage from "./pages/concerts/Concerts.jsx";
import ContactPage from "./pages/contact/Contact.jsx";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/bands" element={<BandsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/concerts" element={<ConcertsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
