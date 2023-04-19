import Home from "./COMPONENTS/HOME/Home";
import { Routes, Route } from "react-router-dom";
import Landing from "./COMPONENTS/LANDING/Landing";
import Header from "./COMPONENTS/HEADER/Header";
import Footer from "./COMPONENTS/FOOTER/Footer";
import Detail from "./COMPONENTS/DETAIL/Detail";
import AvaliblePetsAdoption from "./COMPONENTS/AVALIBLE_PETS_ADOPTION/AvaliblePetsAdoption";
import Login from './COMPONENTS/LOGIN/Login';
import Registration from './COMPONENTS/REGISTRATION/Registration';
import About from './COMPONENTS/ABOUT/About';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/header" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path ='/login' element={<Login />} />
        <Route path="/AvaliblePetsAdoption" element={<AvaliblePetsAdoption/>} />
        <Route path="/register" element={<Registration />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
