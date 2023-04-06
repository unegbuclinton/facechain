// Import Dependency
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Import Assets Images
import avatar from "../../assets/images/header/avatar.jpg";
import bell from "../../assets/images/header/bell.svg";
import deposite from "../../assets/images/header/deposite.svg";
import language from "../../assets/images/header/language.svg";

// Import Components
import Icon from "../icons/icons";

// Import Styling
import "./header.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  //   const { logout } = useLogout();
  const logout = () => {
    navigate("/");
  };

  return (
    <header>
      <div className="hidden justify-center items-center sm:flex">
        <p className="text-white font-buttons text-2xl font-bold">Facechain</p>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex text-greyTextSecondary font-medium">
          <NavLink
            to="/home"
            className={(isActive) =>
              `flex h-nav-item items-center ${
                isActive.isActive ? "h-active-nav relative cursor-default" : ""
              }`
            }
          >
            <Icon name="home" />
            <li className="ml-2.5">Home</li>
          </NavLink>
          <NavLink
            to="/riders"
            className={(isActive) =>
              `flex h-nav-item items-center ${
                isActive.isActive ? "h-active-nav relative cursor-default" : ""
              }`
            }
          >
            <Icon name="riders" />
            <li className="ml-2.5">Riders</li>
          </NavLink>
          <NavLink
            to="/family-pools"
            className={(isActive) =>
              `flex h-nav-item items-center ${
                isActive.isActive ? "h-active-nav relative cursor-default" : ""
              }`
            }
          >
            <Icon name="pools" />
            <li className="ml-2.5">Pools</li>
          </NavLink>
          <NavLink
            to="/watchlist"
            className={(isActive) =>
              `flex h-nav-item items-center ${
                isActive.isActive ? "h-active-nav relative cursor-default" : ""
              }`
            }
          >
            <Icon name="watchlist" />
            <li className="ml-2.5">Watchlist</li>
          </NavLink>
          <NavLink
            to="/more"
            className={(isActive) =>
              `flex h-nav-item items-center ${
                isActive.isActive ? "h-active-nav relative" : ""
              }`
            }
          >
            <Icon name="more" />
            <li className="ml-2.5">More</li>
          </NavLink>
        </ul>
      </nav>
      <div className="flex text-white items-center justify-between w-full sm:w-auto cursor-pointer">
        <div className="ml-4 mr-3 hidden sm:block">
          <img
            src={language}
            alt="language"
            className="text-greyText mx-2 text-xl"
          />
        </div>
        <div className="mx-3 hidden sm:block cursor-pointer">
          <img src={deposite} alt="deposite" />
        </div>
        <div className="mx-3 flex flex-row items-center relative cursor-pointer">
          <img src={bell} alt="notification" />
          <p
            className="bg-primary h-5 w-5 mx-2 flex items-center justify-center rounded-full text-xs absolute -top-2
                         left-1 overflow-hidden border-2 border-darkGrey"
          >
            2
          </p>
        </div>
        <div className="block sm:hidden cursor-pointer">
          <p className="font-buttons text-2xl font-bold">MoonRider</p>
        </div>
        <div className="ml-3 flex items-center relative">
          <img
            className="w-10 h-10 object-cover rounded-full border-2 mx-2"
            src={avatar}
            alt=""
            onClick={(e) => {
              setShowDropdown(!showDropdown);
            }}
          />
          {/* <p className="hidden 2lg:block">{user && user.fullname}</p> */}
          <FontAwesomeIcon
            className="text-greyText ml-2 hidden sm:block cursor-pointer"
            icon={faCaretDown}
            onClick={(e) => {
              setShowDropdown(!showDropdown);
            }}
          />
        </div>
        {showDropdown && (
          <ul className="block absolute bg-black bottom-[-40px] right-2 sm:right-12 z-[10000] w-[100px]  py-2 ">
            <li className="text-greyText font-medium py-1 text-base cursor-pointer px-4 hover:bg-slate-900">
              Account
            </li>
            <li className="text-greyText font-medium py-1 text-base cursor-pointer px-4 hover:bg-slate-900">
              Settings
            </li>
            <li
              className="text-greyText font-medium py-1 text-base cursor-pointer px-4 hover:bg-slate-900"
              onClick={logout}
            >
              Log Out
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
