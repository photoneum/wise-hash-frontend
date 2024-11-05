import React from "react";
import { Link } from "react-router-dom";

interface Props {
  // define props here
}

const Footer: React.FC<Props> = () => {
  return (
    // component logic here
    <div className="flex flex-col p-10 text-black bg-white">
     
      <div className="border p-10 rounded-xl flex flex-col lg:flex-row justify-between max-w-screen-xl mx-auto w-11/12">
        <div className="flex flex-col gap-1 mb-10 lg:mb-0">
          <img
            src={require("../../images/wisehash.png")}
            alt=""
            width={"200px"}
            className="mb-5"
          />
          <span className="block text-sm font-light">
            WiseHash is a peer-to-peer supply-chain service
          </span>
          <span className="block text-sm font-light">
            providing easy ways of payment using blockchain
          </span>
          
        </div>
        <div className="flex flex-col gap-4 mb-10 lg:mb-0">
          <span className="font-extralight block">Company</span>
          <Link to={"/about"} className="block">
            About
          </Link>
          <a href="mailto:info@linkdrive.app" target="_blank" className="block">
            Support
          </a>
        </div>
        <div className="flex flex-col gap-4 mb-10 lg:mb-0">
          <span className="font-extralight block">Contact</span>
          <a href="mailto:info@linkdrive.app" target="_blank" className="block">
            info@wisehash.com
          </a>
          <span className="block">+234 </span>
        </div>
        <hr
          className="border-1 border-gray-300 sm:mt-10 mb-10 lg:hidden"
          style={{ width: "100%" }}
        />
        <div className="flex flex-col gap-4 mb-10 lg:mb-0">
          <span className="font-extralight block">Social</span>
          <div className="flex gap-6">
            <a href="https://twitter.com/linkdrivehq" target="_blank">
              <img
                src={require("../../asset/images/twitter.png")}
                alt=""
                width={"20px"}
                className=""
              />
            </a>
            <a href="https://www.instagram.com/linkdrivehq/" target="_blank">
              <img
                src={require("../../asset/images/instagram.png")}
                alt=""
                width={"20px"}
                className=""
              />
            </a>
            <a
              href="https://www.linkedin.com/company/lindrive-solutions-ltd/"
              target="_blank"
            >
              <img
                src={require("../../asset/images/linkedin.png")}
                alt=""
                width={"20px"}
                className=""
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-10 lg:mb-0">
          <span className="font-extralight block">Legal</span>
          <span className="block font-extralight text-sm">
            Terms of service
          </span>
          <span className="block font-extralight text-sm">Privacy policy</span>
        </div>
        <div className="mt-0 sm:mt-5" style={{ height: "10px" }}>
          <a href="https://twitter.com/DeckDash" target="_blank">
            <img
              src={require("../../asset/images/ddash.png")}
              alt=""
              width={"40px"}
              className="relative bottom-5"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
