import Home from "./COMPONENTS/HOME/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./COMPONENTS/LANDING/Landing";
import Header from "./COMPONENTS/HEADER/Header";
import Footer from "./COMPONENTS/FOOTER/Footer";
import Detail from "./COMPONENTS/DETAIL/Detail";
import AvaliblePetsAdoption from "./COMPONENTS/AVALIBLE_PETS_ADOPTION/AvaliblePetsAdoption";
import Loginpage from './COMPONENTS/LOGIN/Loginpage';
import Registration from './COMPONENTS/REGISTRATION/Registration';
import About from './COMPONENTS/ABOUT/About';
import Donations from './COMPONENTS/DONATION/Donations';
import FormContact from './COMPONENTS/FORMS/FormContact';
import './index.css'
import FormCreatePet from "./COMPONENTS/FORMS/FormCreatePet";
import FormAdoption from './COMPONENTS/FORMS/FormAdoption'
import Successfully from "./Components/DONATION/Successfully";
import Shop from "./COMPONENTS/SHOP/Shop";
import FormHistory from "./COMPONENTS/HISTORY-ADOPTADOS/FormHistory";
import Chatbot from "./COMPONENTS/CHATBOT/Chatbot";
import Admin from "./COMPONENTS/ADMIN/Admin";


function App() {

  const location = useLocation();

  return (

    
    <div className="app">
      {location.pathname !== "/" && <Chatbot /> }
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/header" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path ='/login' element={<Loginpage />} />
        <Route path="/AvaliblePetsAdoption" element={<AvaliblePetsAdoption/>} />
        <Route path="/register" element={<Registration />} />
        <Route path='/about' element={<About />} />
        <Route path="/FormAdoption" element={<FormAdoption />} />
        <Route path="/FormContact" element={<FormContact/>} />
        <Route path="/FormCreatePet" element={<FormCreatePet/>}/>
        <Route path="/FormHistory" element={<FormHistory /> } />
        <Route path="/donate" element={<Donations />} />
        <Route path="/thanks" element={<Successfully />} />
        
        <Route path="/store" element={<Shop />} />      
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/admin" element={<Admin/>} />

      </Routes>
    </div>
  );
}

export default App;
