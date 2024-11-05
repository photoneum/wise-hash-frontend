import React, { useEffect, useState } from 'react';
import Navbar from "./makeup/Navbar";
import Sidebar from "./makeup/Sidebar";


const Settings = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

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
          <div>
            Settings
          </div>
        </div>
      </div>
    )
}

export default Settings
