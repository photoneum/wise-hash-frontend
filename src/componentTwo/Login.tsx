import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginPic from '../images/block.png';
import Logo from '../images/wisehash.png';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Mock database of emails
  const registeredEmails = ["test1@example.com", "test2@example.com", "test3@example.com", "test4@example.com", "test5@example.com"];

  // Default OTP
  const DEFAULT_OTP = "000000";

  // Handle email submission
  const handleEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (registeredEmails.includes(email)) {
      setMessage("Email found. Login authenticated.");
    } else {
      setMessage("New email. Sign up authenticated.");
    }

    setTimeout(() => {
      setShowOtpInput(true);
      setError("");
      setMessage(""); // Clear message before showing OTP input
    }, 2000);
  };

  // Handle OTP submission
  const handleOtpSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (otp === DEFAULT_OTP) {
      navigate("/dashboard");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="flex-center w-[90%] mx-auto md:w-2/4 mt-12 gap-2">
        <div className="max-w-2xl grid gap-6">
          <div className="text-center mb-6">
            <Link to={"/"} className="mt-5 mb-10 block mx-auto max-w-max">
              <img
                src={Logo}
                alt="Logo"
                className="h-32"
              />
            </Link>
            <h1 className="text-3xl font-extrabold">Welcome back</h1>
            <p className="font-extralight mt-1">
              It's great that you're here! Log in to start using WiseHash.
            </p>
          </div>

          {!showOtpInput ? (
            <form onSubmit={handleEmailSubmit}>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 pb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  value={email}
                  style={{ backgroundColor: "#EEEEEE" }}
                  className="outline-none p-4 rounded-md text-sm block w-full"
                  placeholder="e.g - website@example.com"
                  required
                />
              </div>

              {message && <p className="text-green-500 text-sm">{message}</p>}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="font-bold mt-5 py-3 rounded-md w-full"
                style={{ backgroundColor: "black", color: "#DEFA0F" }}
              >
                Continue
              </button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit}>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 pb-2"
                  htmlFor="otp"
                >
                  Enter OTP 
                  <span className="ml-1 text-sm">
                    (Check your mail)
                  </span>
                </label>
                <input
                  onChange={(event) => setOtp(event.target.value)}
                  type="text"
                  value={otp}
                  maxLength={6}
                  style={{ backgroundColor: "#EEEEEE" }}
                  className="outline-none p-4 rounded-md text-sm block w-full"
                  placeholder="000000"
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="font-bold mt-5 py-3 rounded-md w-full"
                style={{ backgroundColor: "black", color: "#DEFA0F" }}
              >
                Verify OTP
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="hidden md:block w-2/4 h-screen">
        <img
          src={LoginPic}
          alt="Onboarding"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Login;
