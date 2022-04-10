import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Budaya from "./pages/Budaya/Budaya";
import Wisata from "./pages/Wisata/Wisata";
import Kuliner from "./pages/Kuliner/Kuliner";
import LandingPage from "./pages/Landing-page/LandingPage";
import NotFound from "./pages/NotFound/NotFound";
import Details from "./pages/Details";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path='/LandingPage' element={<LandingPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/Wisata' element={<Wisata />} />
        <Route path='/Wisata/:wisataId' element={<Details />} />
        <Route path='/Budaya' element={<Budaya />} />
        <Route path='/Kuliner' element={<Kuliner />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
