import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from '../../../asset/Logo (Primary).png'

type SidebarProps = {
  active: string;
};

interface NavbarProps {
  onToggleMenu: () => void;
}

const Sidebar: React.FC<NavbarProps> = ({ onToggleMenu }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState<SidebarProps["active"]>("dashboard");
  const navigate = useNavigate();
  //use effect to check if active is in logout
  useEffect(() => {
    if (active === "logout") {
      dispatch({ type: "LOGOUT" });
      navigate("/");
    }
  }, [active, dispatch, navigate]);

  return (
    <>
      <div
        className="bg-black fixed inset-0 bg-opacity-40 lg:hidden"
        onClick={onToggleMenu}
      />
      <div
        className="flex flex-col gap-4 bg-white text-black sticky top-0 h-screen work-sans pt-3"
        style={{ color: "#B8B7B7" }}
      >
        <Link to={"/"} onClick={onToggleMenu} className="pl-3 py-4 ml-3">
          <img
            src={Logo}
            alt=""
            className="h-[30px]"
          />
        </Link>

        <div className="flex flex-col gap-9 font-bold">
          <p className="pl-6 ml-3 text-black">Main Menu</p>

          {active === "dashboard" ? (
            <div
              className="flex pl-6 active-side-owner w-48 ml-3"
              onClick={onToggleMenu}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.834 6.4165H15.584"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.41602 11H15.5827"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 21C11.606 21 12.1762 20.9912 12.7129 20.9722C12.7162 20.5581 12.7412 20.045 12.8159 19.4807C13.0002 18.0887 13.505 16.2475 14.8762 14.8762C16.2475 13.505 18.0887 13.0002 19.4807 12.8159C20.045 12.7412 20.5581 12.7162 20.9722 12.7129C20.9912 12.1762 21 11.606 21 11C21 8.7582 20.8786 7.02497 20.5789 5.67664C20.2818 4.33967 19.8229 3.44322 19.1898 2.81017C18.5568 2.17712 17.6603 1.71821 16.3234 1.42108C14.975 1.12143 13.2418 1 11 1C8.7582 1 7.02497 1.12143 5.67664 1.42108C4.33967 1.71821 3.44322 2.17712 2.81017 2.81017C2.17712 3.44322 1.71821 4.33967 1.42108 5.67664C1.12143 7.02497 1 8.7582 1 11C1 13.2418 1.12143 14.975 1.42108 16.3234C1.71821 17.6603 2.17712 18.5568 2.81017 19.1898C3.44322 19.8229 4.33967 20.2818 5.67664 20.5789C7.02497 20.8786 8.7582 21 11 21ZM14.7986 19.7432C14.7454 20.1456 14.7224 20.5188 14.7152 20.8354C16.9697 20.5892 18.3237 20.0559 19.1898 19.1898C20.0559 18.3237 20.5892 16.9697 20.8354 14.7152C20.5188 14.7224 20.1456 14.7454 19.7432 14.7986C18.5389 14.9581 17.2109 15.37 16.2904 16.2904C15.37 17.2109 14.9581 18.5389 14.7986 19.7432Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Link
                to="/dashboard"
                className="pl-4"
                onClick={() => {
                  setActive("dashboard");
                }}
              >
                Dashboard
              </Link>
            </div>
          ) : (
            <div className="flex pl-6 w-48 ml-3" onClick={onToggleMenu}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.834 6.4165H15.584"
                  stroke="#B8B7B7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.41602 11H15.5827"
                  stroke="#B8B7B7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 21C11.606 21 12.1762 20.9912 12.7129 20.9722C12.7162 20.5581 12.7412 20.045 12.8159 19.4807C13.0002 18.0887 13.505 16.2475 14.8762 14.8762C16.2475 13.505 18.0887 13.0002 19.4807 12.8159C20.045 12.7412 20.5581 12.7162 20.9722 12.7129C20.9912 12.1762 21 11.606 21 11C21 8.7582 20.8786 7.02497 20.5789 5.67664C20.2818 4.33967 19.8229 3.44322 19.1898 2.81017C18.5568 2.17712 17.6603 1.71821 16.3234 1.42108C14.975 1.12143 13.2418 1 11 1C8.7582 1 7.02497 1.12143 5.67664 1.42108C4.33967 1.71821 3.44322 2.17712 2.81017 2.81017C2.17712 3.44322 1.71821 4.33967 1.42108 5.67664C1.12143 7.02497 1 8.7582 1 11C1 13.2418 1.12143 14.975 1.42108 16.3234C1.71821 17.6603 2.17712 18.5568 2.81017 19.1898C3.44322 19.8229 4.33967 20.2818 5.67664 20.5789C7.02497 20.8786 8.7582 21 11 21ZM14.7986 19.7432C14.7454 20.1456 14.7224 20.5188 14.7152 20.8354C16.9697 20.5892 18.3237 20.0559 19.1898 19.1898C20.0559 18.3237 20.5892 16.9697 20.8354 14.7152C20.5188 14.7224 20.1456 14.7454 19.7432 14.7986C18.5389 14.9581 17.2109 15.37 16.2904 16.2904C15.37 17.2109 14.9581 18.5389 14.7986 19.7432Z"
                  stroke="#B8B7B7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Link
                to="/owner"
                className="pl-4"
                onClick={() => {
                  setActive("dashboard");
                }}
                style={{ color: "#B8B7B7" }}
              >
                Dashboard
              </Link>
            </div>
          )}

          
          {active === "owner/support" ? (
            <div
              onClick={onToggleMenu}
              className="flex pl-6 active-side-owner w-48 ml-3"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11C1 13.2418 1.12143 14.975 1.42108 16.3234C1.71821 17.6603 2.17712 18.5568 2.81017 19.1898C3.44322 19.8229 4.33967 20.2818 5.67664 20.5789C7.02497 20.8786 8.7582 21 11 21C13.2418 21 14.975 20.8786 16.3234 20.5789C17.6603 20.2818 18.5568 19.8229 19.1898 19.1898C19.8229 18.5568 20.2818 17.6603 20.5789 16.3234C20.8786 14.975 21 13.2418 21 11C21 8.7582 20.8786 7.02497 20.5789 5.67664C20.2818 4.33967 19.8229 3.44322 19.1898 2.81017C18.5568 2.17712 17.6603 1.71821 16.3234 1.42108C14.975 1.12143 13.2418 1 11 1C8.7582 1 7.02497 1.12143 5.67664 1.42108C4.33967 1.71821 3.44322 2.17712 2.81017 2.81017C2.17712 3.44322 1.71821 4.33967 1.42108 5.67664C1.12143 7.02497 1 8.7582 1 11Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 15.5835C12 16.1358 11.5523 16.5835 11 16.5835C10.4477 16.5835 10 16.1358 10 15.5835V10.0835C10 9.53121 10.4477 9.0835 11 9.0835C11.5523 9.0835 12 9.53121 12 10.0835V15.5835ZM11 8.25016C10.4937 8.25016 10.0833 7.83976 10.0833 7.3335C10.0833 6.82724 10.4937 6.41683 11 6.41683C11.5063 6.41683 11.9167 6.82724 11.9167 7.3335C11.9167 7.83976 11.5063 8.25016 11 8.25016Z"
                  stroke="white"
                  fill="white"
                />
              </svg>
              <Link
                onClick={() => {
                  setActive("owner/support");
                }}
                to="/owner/support"
                className="pl-4"
              >
                Support
              </Link>
            </div>
          ) : (
            <div onClick={onToggleMenu} className="flex pl-6 w-48 ml-3">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11C1 13.2418 1.12143 14.975 1.42108 16.3234C1.71821 17.6603 2.17712 18.5568 2.81017 19.1898C3.44322 19.8229 4.33967 20.2818 5.67664 20.5789C7.02497 20.8786 8.7582 21 11 21C13.2418 21 14.975 20.8786 16.3234 20.5789C17.6603 20.2818 18.5568 19.8229 19.1898 19.1898C19.8229 18.5568 20.2818 17.6603 20.5789 16.3234C20.8786 14.975 21 13.2418 21 11C21 8.7582 20.8786 7.02497 20.5789 5.67664C20.2818 4.33967 19.8229 3.44322 19.1898 2.81017C18.5568 2.17712 17.6603 1.71821 16.3234 1.42108C14.975 1.12143 13.2418 1 11 1C8.7582 1 7.02497 1.12143 5.67664 1.42108C4.33967 1.71821 3.44322 2.17712 2.81017 2.81017C2.17712 3.44322 1.71821 4.33967 1.42108 5.67664C1.12143 7.02497 1 8.7582 1 11Z"
                  stroke="#B8B7B7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 15.5835C12 16.1358 11.5523 16.5835 11 16.5835C10.4477 16.5835 10 16.1358 10 15.5835V10.0835C10 9.53121 10.4477 9.0835 11 9.0835C11.5523 9.0835 12 9.53121 12 10.0835V15.5835ZM11 8.25016C10.4937 8.25016 10.0833 7.83976 10.0833 7.3335C10.0833 6.82724 10.4937 6.41683 11 6.41683C11.5063 6.41683 11.9167 6.82724 11.9167 7.3335C11.9167 7.83976 11.5063 8.25016 11 8.25016Z"
                  stroke="#B8B7B7"
                  fill="white"
                />
              </svg>
              <Link
                onClick={() => {
                  setActive("owner/support");
                }}
                to="/owner/support"
                className="pl-4"
                style={{ color: "#B8B7B7" }}
              >
                Support
              </Link>
            </div>
          )}

          {active === "settings" ? (
            <div
              onClick={onToggleMenu}
              className="flex pl-6 active-side-owner w-48 ml-3"
            >
              <svg
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.78765 4.50377C7.64473 5.27057 6.85267 5.72702 6.11994 5.46829C2.70181 4.26132 0.162206 8.68326 2.90702 11.0353C3.49849 11.5421 3.49849 12.4582 2.90702 12.965C0.162206 15.3171 2.70181 19.739 6.11994 18.532C6.85267 18.2733 7.64473 18.7298 7.78765 19.4966C8.45128 23.0569 13.5487 23.0569 14.2123 19.4966C14.3553 18.7298 15.1473 18.2733 15.8801 18.532C19.2982 19.739 21.8378 15.3171 19.093 12.965C18.5015 12.4582 18.5015 11.5421 19.093 11.0353C21.8378 8.68327 19.2982 4.26132 15.8801 5.46829C15.1473 5.72702 14.3553 5.27057 14.2123 4.50377C13.5487 0.943404 8.45128 0.943403 7.78765 4.50377Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <circle
                  r="2.66667"
                  transform="matrix(-1 0 0 1 10.9993 12.0002)"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
              <Link
                onClick={() => {
                  setActive("settings");
                }}
                to="/owner/settings"
                className="pl-4"
              >
                Settings
              </Link>
            </div>
          ) : (
            <div onClick={onToggleMenu} className="flex pl-6 w-48 ml-3">
              <svg
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.78765 4.50377C7.64473 5.27057 6.85267 5.72702 6.11994 5.46829C2.70181 4.26132 0.162206 8.68326 2.90702 11.0353C3.49849 11.5421 3.49849 12.4582 2.90702 12.965C0.162206 15.3171 2.70181 19.739 6.11994 18.532C6.85267 18.2733 7.64473 18.7298 7.78765 19.4966C8.45128 23.0569 13.5487 23.0569 14.2123 19.4966C14.3553 18.7298 15.1473 18.2733 15.8801 18.532C19.2982 19.739 21.8378 15.3171 19.093 12.965C18.5015 12.4582 18.5015 11.5421 19.093 11.0353C21.8378 8.68327 19.2982 4.26132 15.8801 5.46829C15.1473 5.72702 14.3553 5.27057 14.2123 4.50377C13.5487 0.943404 8.45128 0.943403 7.78765 4.50377Z"
                  stroke="#B8B7B7"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <circle
                  r="2.66667"
                  transform="matrix(-1 0 0 1 10.9993 12.0002)"
                  stroke="#B8B7B7"
                  stroke-width="2"
                />
              </svg>
              <Link
                onClick={() => {
                  setActive("settings");
                }}
                to="/owner/settings"
                className="pl-4"
                style={{ color: "#B8B7B7" }}
              >
                Settings
              </Link>
            </div>
          )}

          <div className="border w-64"></div>

          {active === "logout" ? (
            <div
              onClick={onToggleMenu}
              className="flex pl-6 active-side-owner w-48 ml-3"
            >
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11C1 13.1449 1.06129 14.6559 1.25438 15.772C1.44408 16.8685 1.74579 17.4878 2.16042 17.9251C2.5925 18.3807 3.24712 18.7464 4.36583 19.1382C5.19447 19.4284 6.19012 19.7054 7.43394 20.0515C7.88289 20.1764 8.36417 20.3103 8.8816 20.4571C10.7316 20.9819 12.0575 21.0957 13.0091 20.9286C13.9082 20.7707 14.5048 20.3588 14.9491 19.6886C15.4243 18.9719 15.756 17.9095 15.9574 16.4191C16.1572 14.94 16.2174 13.1359 16.2174 11C16.2174 8.86405 16.1572 7.05998 15.9574 5.58088C15.756 4.09049 15.4243 3.02811 14.9491 2.31138C14.5048 1.64116 13.9082 1.22931 13.0091 1.07141C12.0575 0.904299 10.7316 1.01809 8.88159 1.54285C8.36425 1.6896 7.88305 1.82349 7.43417 1.94839C6.19024 2.29451 5.19451 2.57157 4.36582 2.86175C3.24713 3.25349 2.5925 3.61921 2.16043 4.07488C1.74579 4.51216 1.44408 5.13148 1.25438 6.22794C1.06129 7.34404 1 8.85504 1 11Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <ellipse
                  rx="0.956522"
                  ry="0.88"
                  transform="matrix(-1 0 0 1 12.4341 11.1486)"
                  fill="white"
                />
                <path
                  d="M16.2617 18.9201C21.0443 18.9201 21.0443 17.8501 21.0443 11.1425C21.0443 4.43491 21.0443 3.08008 16.2617 3.08008"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span
                className="pl-4"
                onClick={() => {
                  setActive("logout");
                  dispatch({ type: "LOGOUT" });
                  navigate("/login");
                }}
              >
                Logout
              </span>
            </div>
          ) : (
            <div onClick={onToggleMenu} className="flex pl-6 w-48 ml-3">
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11C1 13.1449 1.06129 14.6559 1.25438 15.772C1.44408 16.8685 1.74579 17.4878 2.16042 17.9251C2.5925 18.3807 3.24712 18.7464 4.36583 19.1382C5.19447 19.4284 6.19012 19.7054 7.43394 20.0515C7.88289 20.1764 8.36417 20.3103 8.8816 20.4571C10.7316 20.9819 12.0575 21.0957 13.0091 20.9286C13.9082 20.7707 14.5048 20.3588 14.9491 19.6886C15.4243 18.9719 15.756 17.9095 15.9574 16.4191C16.1572 14.94 16.2174 13.1359 16.2174 11C16.2174 8.86405 16.1572 7.05998 15.9574 5.58088C15.756 4.09049 15.4243 3.02811 14.9491 2.31138C14.5048 1.64116 13.9082 1.22931 13.0091 1.07141C12.0575 0.904299 10.7316 1.01809 8.88159 1.54285C8.36425 1.6896 7.88305 1.82349 7.43417 1.94839C6.19024 2.29451 5.19451 2.57157 4.36582 2.86175C3.24713 3.25349 2.5925 3.61921 2.16043 4.07488C1.74579 4.51216 1.44408 5.13148 1.25438 6.22794C1.06129 7.34404 1 8.85504 1 11Z"
                  stroke="#B8B7B7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <ellipse
                  rx="0.956522"
                  ry="0.88"
                  transform="matrix(-1 0 0 1 12.4341 11.1486)"
                  fill="#B8B7B7"
                />
                <path
                  d="M16.2617 18.9201C21.0443 18.9201 21.0443 17.8501 21.0443 11.1425C21.0443 4.43491 21.0443 3.08008 16.2617 3.08008"
                  stroke="#B8B7B7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span
                onClick={() => {
                  setActive("logout");
                  dispatch({ type: "LOGOUT" });
                  navigate("/login");
                }}
                className="pl-4"
                style={{ color: "#B8B7B7" }}
              >
                Logout
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
