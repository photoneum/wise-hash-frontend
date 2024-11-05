import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/wisehash.png"

interface Props {
  // define props here
}

const Navbar: React.FC<Props> = () => {
  // component logic here

  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-between py-6 w-11/12 max-w-screen-2xl mx-auto">
      <Link to={"/"}>
        <img src={Logo} alt="" className="w-60 h-32"/>
      </Link>


      <div className="flex gap-10 hidden sm:flex">
        <Link to='' className="hover:text-green-900 hover:font-bold">About</Link>
        <Link to='' className="hover:text-green-900 hover:font-bold">Product & Services</Link>
        <Link to='' className="hover:text-green-900 hover:font-bold">Contact</Link>
      </div>
      <div className="relative bottom-2 min-[850px]:flex gap-4 hidden">
        <Link to={"/login"} className="hidden sm:flex">
          <button
            className="bg-green-900 text-white py-3 mb-3 mt-5 rounded-lg font-extrabold outline "
            style={{ width: "150px",  }}
          >
            Get started
          </button>
        </Link>
        {/* make button small on small view port */}
      </div>
    </div>
  );
};

export default Navbar;
