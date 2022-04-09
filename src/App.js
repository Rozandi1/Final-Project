import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Budaya from "./pages/Budaya/Budaya";
import Wisata from "./pages/Wisata/Wisata";
import Kuliner from "./pages/Kuliner/Kuliner";
import LandingPage from "./pages/Landing-page/LandingPage";
import NotFound from "./pages/NotFound/NotFound";
import Wisata2 from "./pages/Wisata2/Wisata";
import Artikel from "./pages/Artikel/Artikel";
import Kuliner2 from "./pages/Kuliner2/Kuliner";


function App() {
  return (
    <Routes>
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/Wisata" element={<Wisata />} />
      <Route path="/Budaya" element={<Budaya />} />
      <Route path="/Kuliner" element={<Kuliner />} />
      <Route path="/Kuliner" element={<Wisata />} />
      <Route path="/Wisata2" element={<Wisata2 />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/kuliner2" element={<Kuliner2 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
