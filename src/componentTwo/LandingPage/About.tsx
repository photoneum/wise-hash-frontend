import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

interface Props {
  // define props here
}

const About: React.FC<Props> = () => {
  // component logic here

  useEffect(() => {
    window.scrollTo(0, 0); // reset scroll position on mount
  }, []);

  return (
    <div
      className="bg-black text-white"
      style={{ height: "100%", backgroundColor: "black" }}
    >
      <Navbar />
      <div className="flex flex-col text-center gap-4 mt-10">
        <span className="font-bold text-8xl relative"> Who we are... </span>
        <span className="text-xl">...and what we're about at Linkdrive.</span>
      </div>
      <div className="flex flex-col m-10">
        <span className="text-xl" style={{ color: "#8383E6" }}>
          ABOUT US
        </span>
        <div className="flex flex-col mt-5 font-bold text-4xl">
          <span>When we say Linkdrive, here's</span>
          <span>what we mean...in 4 words.</span>
        </div>
      </div>
      <div className="flex flex-col m-10 gap-10 mt-40 max-w-screen-lg">
        <div className="flex gap-10 flex-col sm:flex-row">
          <div className="flex flex-col gap-4 sm:w-[45%]">
            <span className="font-bold text-2xl">Ease</span>
            <span>
              We’re removing the stress of commuting, especially in busy areas —
              If you’ve ever dragged your change with a conductor or even left
              it, you can relate.
            </span>
          </div>
          <div
            className="border-r border-white mx-4 hidden sm:block"
            style={{ height: "150px" }}
          ></div>
          <div className="flex flex-col gap-4 sm:w-[45%]">
            <span className="font-bold text-2xl">Speed</span>
            <span>
              We’re providing a fast way to link up with anyone anywhere and
              anytime. No driver delays you because you’re at the wheel!
            </span>
          </div>
        </div>
        <div className="flex gap-10 flex-col sm:flex-row">
          <div className="flex flex-col gap-4 sm:w-[45%]">
            <span className="font-bold text-2xl">Reliability</span>
            <span>
              We’re providing a reliable, secure, and available service. Call us
              when you need us, and we’re there.
            </span>
          </div>
          <div
            className="border-r border-white mx-4 hidden sm:block"
            style={{ height: "150px" }}
          ></div>
          <div className="flex flex-col gap-4 sm:w-[45%]">
            <span className="font-bold text-2xl">Convenience</span>
            <span>
              We make everything easy for you from start to finish. From getting
              a car to getting around, Linkdrive makes it all convenient
            </span>
          </div>
        </div>
      </div>
      <div className="m-10 mt-40 flex">
        <div className="md:w-2/4 flex flex-col gap-6">
          <span className="block">
            Linkdrive is a peer-to-peer car-sharing service providing
            stress-free ways to commute. We have an ever-expanding community of
            trusted car owners and a firm commitment to keeping you in control
            of your movement. With Linkdrive, you’re assured of safe,
            dependable, and prompt car rental services.
          </span>
          <span className="block">
            We currently operate in Lagos, Nigeria, and will expand to more
            cities soon. Our culture is user-centric, and we promise to always
            deliver the best possible services to our users — car owners and
            renters — from user experience to customer service.
          </span>
        </div>
        <div className="hidden md:block md:w-2/4 relative">
          <img
            src={require("../../asset/images/7xm 13.png")}
            width={"500px"}
            alt=""
            className="absolute -bottom-40 ml-20 left-28"
          />
        </div>
      </div>

      <div className="flex flex-col p-10 text-white bg-black mt-20">
        <div className="flex flex-col text-center pt-10">
          <span className="font-bold text-4xl">Ready to earn more by</span>
          <span className="font-bold text-4xl">renting out your vehicle</span>
          <Link to="/get-started">
            <button
              className="placer-button py-3 mt-7 rounded font-extrabold mx-auto mb-20"
              style={{
                width: "220px",
                color: "white",
                backgroundColor: "#8383E6",
              }}
            >
              Put up a ride
            </button>
          </Link>
        </div>
        <div className="border p-10 rounded-xl flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-1 mb-10 md:mb-0">
            <img
              src={require("../../asset/Logo (Alternate).png")}
              alt=""
              width={"200px"}
              className="mb-5"
            />
            <span className="block text-sm font-light">
              Linkdrive is a peer-to-peer car-sharing service
            </span>
            <span className="block text-sm font-light">
              providing easy ways to commute for car renters
            </span>
            <span className="block text-sm font-light">
              and viable extra income for car owners.
            </span>
          </div>
          <div className="flex flex-col gap-4 mb-10 md:mb-0">
            <span className="font-extralight block">Company</span>
            <Link to={"/about"} className="block">
              About
            </Link>
            <a
              href="mailto:info@linkdrive.app"
              target="_blank"
              className="block"
            >
              Support
            </a>
          </div>
          <div className="flex flex-col gap-4 mb-10 md:mb-0">
            <span className="font-extralight block">Contact</span>
            <a
              href="mailto:info@linkdrive.app"
              target="_blank"
              className="block"
            >
              info@linkdrive.app
            </a>
            <span className="block">+234 8094586558</span>
          </div>
          <hr
            className="border-1 border-gray-300 sm:mt-14 mb-10 md:hidden"
            style={{ width: "100%" }}
          />
          <div className="flex flex-col gap-4 mb-10 md:mb-0">
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
                target="_blank" rel="noreferrer"
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
          <div className="flex flex-col gap-4 mb-10 md:mb-0">
            <span className="font-extralight block">Legal</span>
            <span className="block font-extralight text-sm">
              Terms of service
            </span>
            <span className="block font-extralight text-sm">
              Privacy policy
            </span>
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
    </div>
  );
};

export default About;
