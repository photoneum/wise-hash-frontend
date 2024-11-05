import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducer";
import { Link } from "react-router-dom";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Logo from '../../../asset/Logo (Primary).png'

interface NavbarProps {
  onToggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleMenu }) => {
  const user = useSelector((state: RootState) => state.userReducer.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollDisabled, setScrollDisabled] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setScrollDisabled(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setScrollDisabled(false);
  };

  // Disable scrolling when the modal is open
  useEffect(() => {
    if (scrollDisabled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [scrollDisabled]);

  return (
    <div className="flex justify-between px-8 py-1 lg:py-4 navbar-owner">
      <div className="flex items-center lg:hidden">
        <button title="div"
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          onClick={onToggleMenu}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
            />
          </svg>
        </button>
        <Link to={"/"} className="pl-3 py-4 ml-3">
          <img
            src={Logo}
            alt=""
            className="h-[30px]"
          />
        </Link>
        <Link to={"/"} className=" gap-4 ml-3 hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.5C1 6.60949 1.06075 7.43281 1.19863 8.0532C1.33399 8.66225 1.53001 9.01274 1.75864 9.24136C1.98726 9.46999 2.33775 9.66601 2.9468 9.80137C3.56719 9.93925 4.39051 10 5.5 10C6.60949 10 7.43281 9.93925 8.0532 9.80137C8.66225 9.66601 9.01274 9.46999 9.24136 9.24136C9.46999 9.01274 9.66601 8.66225 9.80137 8.0532C9.93925 7.43281 10 6.60949 10 5.5C10 4.39051 9.93925 3.56719 9.80137 2.9468C9.66601 2.33775 9.46999 1.98726 9.24136 1.75864C9.01274 1.53001 8.66225 1.33399 8.0532 1.19863C7.43281 1.06075 6.60949 1 5.5 1C4.39051 1 3.56719 1.06075 2.9468 1.19863C2.33775 1.33399 1.98726 1.53001 1.75864 1.75864C1.53001 1.98726 1.33399 2.33775 1.19863 2.9468C1.06075 3.56719 1 4.39051 1 5.5Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 18.5C1 19.6095 1.06075 20.4328 1.19863 21.0532C1.33399 21.6622 1.53001 22.0127 1.75864 22.2414C1.98726 22.47 2.33775 22.666 2.9468 22.8014C3.56719 22.9392 4.39051 23 5.5 23C6.60949 23 7.43281 22.9392 8.0532 22.8014C8.66225 22.666 9.01274 22.47 9.24136 22.2414C9.46999 22.0127 9.66601 21.6622 9.80137 21.0532C9.93925 20.4328 10 19.6095 10 18.5C10 17.3905 9.93925 16.5672 9.80137 15.9468C9.66601 15.3378 9.46999 14.9873 9.24136 14.7586C9.01274 14.53 8.66225 14.334 8.0532 14.1986C7.43281 14.0608 6.60949 14 5.5 14C4.39051 14 3.56719 14.0608 2.9468 14.1986C2.33775 14.334 1.98726 14.53 1.75864 14.7586C1.53001 14.9873 1.33399 15.3378 1.19863 15.9468C1.06075 16.5672 1 17.3905 1 18.5Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 5.5C14 6.60949 14.0608 7.43281 14.1986 8.0532C14.334 8.66225 14.53 9.01274 14.7586 9.24136C14.9873 9.46999 15.3378 9.66601 15.9468 9.80137C16.5672 9.93925 17.3905 10 18.5 10C19.6095 10 20.4328 9.93925 21.0532 9.80137C21.6622 9.66601 22.0127 9.46999 22.2414 9.24136C22.47 9.01274 22.666 8.66225 22.8014 8.0532C22.9392 7.43281 23 6.60949 23 5.5C23 4.39051 22.9392 3.56719 22.8014 2.9468C22.666 2.33775 22.47 1.98726 22.2414 1.75864C22.0127 1.53001 21.6622 1.33399 21.0532 1.19863C20.4328 1.06075 19.6095 1 18.5 1C17.3905 1 16.5672 1.06075 15.9468 1.19863C15.3378 1.33399 14.9873 1.53001 14.7586 1.75864C14.53 1.98726 14.334 2.33775 14.1986 2.9468C14.0608 3.56719 14 4.39051 14 5.5Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 18.5C14 19.6095 14.0608 20.4328 14.1986 21.0532C14.334 21.6622 14.53 22.0127 14.7586 22.2414C14.9873 22.47 15.3378 22.666 15.9468 22.8014C16.5672 22.9392 17.3905 23 18.5 23C19.6095 23 20.4328 22.9392 21.0532 22.8014C21.6622 22.666 22.0127 22.47 22.2414 22.2414C22.47 22.0127 22.666 21.6622 22.8014 21.0532C22.9392 20.4328 23 19.6095 23 18.5C23 17.3905 22.9392 16.5672 22.8014 15.9468C22.666 15.3378 22.47 14.9873 22.2414 14.7586C22.0127 14.53 21.6622 14.334 21.0532 14.1986C20.4328 14.0608 19.6095 14 18.5 14C17.3905 14 16.5672 14.0608 15.9468 14.1986C15.3378 14.334 14.9873 14.53 14.7586 14.7586C14.53 14.9873 14.334 15.3378 14.1986 15.9468C14.0608 16.5672 14 17.3905 14 18.5Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className={`flex items-center gap-2 ml-auto`}>
        <button title="notification" onClick={openModal}>
          <NotificationsNoneOutlinedIcon />
        </button>

        <Link to={"/settings"} className="avatar-bg rounded-full p-2">
          <img
            src={`https://ui-avatars.com/api/?name=${user?.firstName}+${user?.lastName}color=fff&size=20&font-size=0.6`}
            alt=""
            width={18}
          />
        </Link> 
        <Link
          to={"/settings"}
          className="text-sm hidden min-[450px]:block"
        >{` ${user?.firstName} ${user?.lastName}`}
        </Link>
      </div>
      
      {isModalOpen && (
        <div className="fixed top-20 rounded right-2  py-4 bg-white shadow-lg overflow-y-auto overflow-y-auto max-h-full">
          <div className="flex justify-between items-center px-6">
            <p className="font-semibold text-xl">
              Notifications
            </p>
            <button title="close" onClick={closeModal}>
              <CloseOutlinedIcon />
            </button>
          </div>

          
          <div className="flex border-t mt-6 pt-3 gap-2 px-6">
            <SettingsOutlinedIcon  className="text-[#D9D9D9]"/>

            <p>
              Mark all as read
            </p>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Navbar;
