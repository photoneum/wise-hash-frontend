// src/componentTwo/Car-Rider/index.tsx
import React, { useState } from "react";
import Navbar from "./makeup/Navbar";
import Sidebar from "./makeup/Sidebar";
import SupportFragment from "../SupportFragment";

interface Prop {
  children?: React.ReactNode;
} 

const OwnerSupport: React.FC<Prop> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex relative">
      <div className="fixed z-20 lg:hidden">
        {isMenuOpen && <Sidebar onToggleMenu={handleToggleMenu} />}
      </div>
      <div className="hidden lg:block">
        <Sidebar onToggleMenu={() => null} />
      </div>
      <div className="w-full z-10">
        <Navbar onToggleMenu={handleToggleMenu} />
        <SupportFragment />
      </div>
    </div>
  );
};

export default OwnerSupport;
