import React from "react";
import { Link } from "react-router-dom";
import Block from '../../images/block.png'

interface Props {
  // define props here
}

const Header: React.FC<Props> = () => {
  // component logic here

  return (
    <div className=" overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center mt-20 md:mt-40  gap-4 lg:p-10">
        <h1 className="font-semibold text-3xl leading-relaxed w-2/3 relative tracking-widest">
        “Transforming Supply Chain Transparency with Blockchain” with a short description of the purpose, focusing on enhancing transparency, trust, and efficiency.
          {/* <span className="relative">
            wheel
            <img
              src={require("../../asset/images/Ellipse 1.png")}
              className="absolute w-full top-5 -right-10"
              width={"200px"}
              alt=""
            />
          </span> */}
        </h1>
        {/* <img draggable={false} src={require("../../asset/images/placer.png")} alt="" /> */}

        
        <div className="mb-10 md:mb-20"></div>
        <img
          src={Block}
          alt=""
          draggable={false}
        />
       
      </div>
    </div>
  );
};

export default Header;
