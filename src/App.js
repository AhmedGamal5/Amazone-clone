import React, {useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import './App.css';
import  './components/Header.css';
import 'swiper/css';
// components
import Homee from "./components/Homee";
import Error from "./components/Error"
import Header from "./components/Header";
import Signin from "./components/Signin"
import Orders from "./components/Orders";
import Checkout from "./components/Checkout";
// import Footer from "./components/Footer";


import {auth} from "./firebase"
import { useAuth } from "./Context/Globalstate";

const App = () => {
  const {dispatch} = useAuth()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>  
      <Routes>       
        <Route path="/" element={<><Header /><Homee /></>} />
        <Route path="*" element={<Error />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Checkout" element={<><Header /><Checkout /></>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
