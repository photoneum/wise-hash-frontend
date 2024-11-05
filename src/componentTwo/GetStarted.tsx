import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const GetStarted: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // reset scroll position on mount
  }, []);

  const handleGetStarted = (userType: string) => {
    dispatch({
      type: "SIGNUP",
      payload: {
        userType,
      },
    });
    navigate(`/signup?userType=${userType}`); // Pass the userType as a query parameter
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-center w-full md:w-2/4 mt-20 gap-2">
        <div className="text-center mb-6">
          <Link to={"/"} className="mt-5 mb-10 block mx-auto max-w-max">
            <img
              src={require("../asset/Logo (Primary).png")}
              alt=""
              className="h-10"
            />
          </Link>
          <h1 className="text-3xl font-extrabold">
            Get started with Linkdrive
          </h1>
          <p className="font-extralight mt-1">Please choose an option</p>
        </div>

        <div className="grid">
          <button
            onClick={() => handleGetStarted("CAR_OWNER")}
            className="flex gap-10 text-black bg-white border get-started py-4 mt-3 rounded-lg px-10 font-bold transition-colors duration-300"
          >
            <div className="flex flex-col items-start get-started">
              <span className="" style={{ color: "inherit" }}>
                Become a host
              </span>
              <span
                className="font-extralight text-white"
                style={{ color: "#B8B7B7" }}
              >
                Make extra cash by renting out your car
              </span>
            </div>
          </button>

          <button
            onClick={() => handleGetStarted("CAR_RIDER")}
            className="flex gap-6 get-started bg-white border py-4 mt-3 rounded-lg px-10 font-bold second-button cursor-pointer transition-colors duration-300"
          >
            <div className="flex flex-col items-start">
              <span className="text-black" style={{ color: "inherit" }}>
                Get a car
              </span>
              <span
                className="font-extralight text-white"
                style={{ color: "#B8B7B7" }}
              >
                Move around in style, using a car you love
              </span>
            </div>
          </button>
        </div>
        <Link to={"/login"} className="font-extralight mt-5">
          Already have an account? <span className="font-bold">Log in</span>
        </Link>
      </div>

      <div className="hidden md:block w-2/4 h-screen">
        <img
          src={require("../asset/Image for onboarding/Linkdrive onboarding screen 2 1.png")}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default GetStarted;
