import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./componentTwo/LandingPage/LandingPage";
import Login from './componentTwo/Login';


import CarOwner from './componentTwo/Car-Owner/index';
import OwnerSupport from './componentTwo/Car-Owner/Support'
import OwnerSettings from './componentTwo/Car-Owner/Settings';



const AppTwo = () => {
    return (
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />

           

            {/* Owner Part */}

            <Route path="/dashboard" element={<CarOwner />} />
            <Route path="/owner/support" element={<OwnerSupport />} />
            <Route path="/owner/settings" element={<OwnerSettings />} />
            {/* Owner Part */}

           
            
          </Routes>
        
      </BrowserRouter>
    )
}

export default AppTwo
