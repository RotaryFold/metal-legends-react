import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Bands from "./pages/Bands/Bands";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import Concerts from "./pages/Concerts/Concerts";
import Contact from "./pages/Contact/Contact";
import Forum from "./pages/Forum/Forum";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bands" element={<Bands />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;