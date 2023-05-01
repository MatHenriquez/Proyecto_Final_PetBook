import Home from "./COMPONENTS/HOME/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Landing from "./COMPONENTS/LANDING/Landing";
import Header from "./COMPONENTS/HEADER/Header";
import Footer from "./COMPONENTS/FOOTER/Footer";
import Detail from "./COMPONENTS/DETAIL/Detail";
import AvaliblePetsAdoption from "./COMPONENTS/AVALIBLE_PETS_ADOPTION/AvaliblePetsAdoption";
import Loginpage from "./COMPONENTS/LOGIN/Loginpage";
import Registration from "./COMPONENTS/REGISTRATION/Registration";
import About from "./COMPONENTS/ABOUT/About";
import Donations from "./COMPONENTS/DONATION/Donations";
import FormContact from "./COMPONENTS/FORMS/FormContact";
import "./index.css";
import FormCreatePet from "./COMPONENTS/FORMS/FormCreatePet";
import FormAdoption from "./COMPONENTS/FORMS/FormAdoption";
import Chatbot from "./COMPONENTS/CHATBOT/Chatbot";
import axios from "axios";
import Successfully from "./COMPONENTS/DONATION/Successfully";
import Shop from "./COMPONENTS/SHOP/Shop";
import FormHistory from "./COMPONENTS/HISTORY-ADOPTADOS/FormHistory";
import Admin from "./COMPONENTS/ADMIN/Admin";
import AplicationsRequest from "./COMPONENTS/APLICATIONSREQUEST/AplicationsRequest";
import ErrorPage from "./COMPONENTS/UTILS/ErrorPage";


//Instancia de axios para Railway.
// axios.defaults.baseURL = "https://proyectofinalpetbook-production.up.railway.app";

//Instancia de axios para Railway.
// axios.defaults.baseURL = "https://petbook-server.onrender.com";

//Instancia de axios para trabajo local:
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const location = useLocation();

  const [admin, setAdmin] = useState("");

  useEffect(() => {
    let verify = window.localStorage.getItem("Admin");
    if (verify === true) {
     return;
    }
    if (!verify) {
      window.localStorage.setItem("Admin", JSON.stringify(false));
      setAdmin(false);
    }

    let id = window.localStorage.getItem("id");
    async function getRoll() {
      let roll = await axios(`/users/verifyAdminRole/${id}`);
      window.localStorage.setItem("Admin", JSON.stringify(roll.data));
      setAdmin(roll.data)
    }
    getRoll();
  }, [window.localStorage.getItem("Admin"), window.localStorage.getItem("id")]);
  
  
  console.log(admin);

  return (
    <div className="app">
      {location.pathname !== "/" && <Chatbot />}

      <Routes>
        <Route index element={<Landing />} />
        <Route path="/header" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Loginpage />} />
        <Route
          path="/AvaliblePetsAdoption"
          element={<AvaliblePetsAdoption />}
        />
        <Route path="/register" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/FormAdoption/:id" element={<FormAdoption />} />
        <Route path="/FormContact" element={<FormContact />} />
        <Route path="/FormCreatePet" element={<FormCreatePet />} />
        <Route path="/FormHistory" element={<FormHistory />} />
        <Route path="/donate" element={<Donations />} />
        <Route path="/thanks" element={<Successfully />} />
        <Route path="/store" element={<Shop />} />
        <Route path="/chat" element={<Chatbot />} />
      
        {admin === true &&   <Route path="/admin" element={<Admin />} />}
        {admin === true && <Route path="/AplicationRequest" element={<AplicationsRequest/>}></Route>}
        <Route path='/error' element={<ErrorPage />} />

      </Routes>
    </div>
  );
}

export default App;
