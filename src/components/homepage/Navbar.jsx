// images and icons
import message from "../../assets/icons/logo.svg";
import { FaCaretDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// from react
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [schoolsDropDown, setSchoolsDropDown] = useState(false);
  const [exploresDropDown, setExploresDropDown] = useState(false);

  const handleSchools = () => {
    setSchoolsDropDown(!schoolsDropDown);
    setExploresDropDown(false);
  };
  const handleExplores = () => {
    setExploresDropDown(!exploresDropDown);
    setSchoolsDropDown(false);
  };

  function handleBurger() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="relative flex items-center justify-between px-4 py-4 text-lg text-white bg__gradient md:px-8 lg:px-16 md:text-xl">
      <Link to="/" className="flex items-center gap-4 logo">
        <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]">
          <img
            src={message}
            alt={message}
            className="object-cover w-full h-full"
          />
        </div>
        <span className="font-bold">OFFER LETTER</span>
      </Link>
      <ul className="items-center hidden gap-8 xl:flex">
        <li>
          <Link to="#">Webinars</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>

        <li className="relative flex items-center gap-4 cursor-pointer hover__parent">
          Schools{" "}
          <span className="fa-caret">
            <FaCaretDown />

            {/* <img src={arrowDown} alt="arrow-down" /> */}
          </span>
          <ul className="hover__child absolute top-7 bg-[#143f80] py-4 min-w-max z-30">
            <li>
              <Link to="/canada" className="py-4 px-8 block hover:bg-[#0D2C58]">
                Study in Canada
              </Link>
            </li>
            <li>
              <Link
                to="/australia"
                className="py-4 px-8 block hover:bg-[#0D2C58]"
              >
                Study in Australia
              </Link>
            </li>
            <li>
              <Link to="/uk" className="py-4 px-8 block hover:bg-[#0D2C58]">
                Study in UK
              </Link>
            </li>
            <li>
              <Link to="#" className="py-4 px-8 block hover:bg-[#0D2C58]">
                Study in USA
              </Link>
            </li>
            <li>
              <Link to="#" className="py-4 px-8 block hover:bg-[#0D2C58]">
                Study in NZ
              </Link>
            </li>
            <li>
              <Link to="#" className="py-4 px-8 block hover:bg-[#0D2C58]">
                Study in Europe
              </Link>
            </li>
          </ul>
        </li>
        <li className="relative flex items-center gap-4 cursor-pointer hover__parent">
          Explores{" "}
          <span className="fa-caret">
            <FaCaretDown />
          </span>
          <ul className="hover__child absolute top-7 bg-[#143f80] py-4 min-w-max z-30">
            <li>
              <Link to="#" className="py-4 px-8 block hover:bg-[#0D2C58]">
                Study Abroad
              </Link>
            </li>
            <li>
              <Link to="#" className="py-4 px-8 block hover:bg-[#0D2C58]">
                MBBS in Abroad
              </Link>
            </li>
            <li>
              <Link to="#" className="py-4 px-8 block hover:bg-[#0D2C58]">
                Study in India
              </Link>
            </li>
            <li>
              <Link to="#" className="py-4 px-8 block hover:bg-[#0D2C58]">
                MBBS in India{" "}
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="items-center hidden gap-8 xl:flex">
        <li>
          <Link to="#">Profile Evaluation</Link>
        </li>
        <li className="">
          <Link
            to="/login"
            className="px-8 py-3 border border-white rounded-lg"
          >
            Log in
          </Link>
        </li>
      </ul>

      <button
        className="text-2xl text-white xl:hidden"
        type="button"
        onClick={handleBurger}
      >
        <GiHamburgerMenu />
      </button>
      <ul
        className={`w-full flex flex-col xl:hidden absolute top-[72px] left-0 z-50 bg-[#133f7f] py-10 border-t border-[#000] ${
          !showMenu && "hidden"
        }`}
      >
        <li>
          <Link to="#" className="block px-8 py-4">
            Webinars
          </Link>
        </li>
        <li>
          <Link to="/services" className="block px-8 py-4">
            Services
          </Link>
        </li>
        <li className="overflow-hidden">
          <button
            className={`w-full flex items-center justify-between px-8 py-4 ${
              schoolsDropDown && "bg-[#0D2C58]"
            }`}
            type="button"
            onClick={handleSchools}
          >
            Schools{" "}
            <span className="fa-caret">
              <FaCaretDown />
            </span>
          </button>
          <ul className={`${!schoolsDropDown && "h-0"}`}>
            <li>
              <Link
                className="block px-8 py-4"
                to="/canada"
                onClick={handleBurger}
              >
                Study in Canada
              </Link>
            </li>
            <li>
              <Link
                className="block px-8 py-4"
                to="/australia"
                onClick={handleBurger}
              >
                Study in Australia
              </Link>
            </li>
            <li>
              <Link className="block px-8 py-4" to="/uk" onClick={handleBurger}>
                Study in UK
              </Link>
            </li>
            <li>
              <Link className="block px-8 py-4" to="#" onClick={handleBurger}>
                Study in USA
              </Link>
            </li>
            <li>
              <Link className="block px-8 py-4" to="#" onClick={handleBurger}>
                Study in NZ
              </Link>
            </li>
            <li>
              <Link className="block px-8 py-4" to="#" onClick={handleBurger}>
                Study in Europe
              </Link>
            </li>
          </ul>
        </li>
        <li className="overflow-hidden">
          <button
            className={`flex items-center justify-between w-full px-8 py-4 ${
              exploresDropDown && "bg-[#0D2C58]"
            }`}
            type="button"
            onClick={handleExplores}
          >
            Explores
            <span className="fa-caret">
              <FaCaretDown />
            </span>
          </button>
          <ul className={`${!exploresDropDown && "h-0"}`}>
            <li>
              <Link
                className="block px-8 py-4"
                to="/canada"
                onClick={handleBurger}
              >
                Study in Canada
              </Link>
            </li>
            <li>
              <Link
                className="block px-8 py-4"
                to="/australia"
                onClick={handleBurger}
              >
                Study in Australia
              </Link>
            </li>
            <li>
              <Link className="block px-8 py-4" to="/uk" onClick={handleBurger}>
                Study in UK
              </Link>
            </li>
            <li>
              <Link className="block px-8 py-4" to="#" onClick={handleBurger}>
                Study in USA
              </Link>
            </li>
            <li>
              <Link className="block px-8 py-4" to="#" onClick={handleBurger}>
                Study in NZ
              </Link>
            </li>
            <li>
              <Link className="block px-8 py-4" to="#" onClick={handleBurger}>
                Study in Europe
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="#" className="block px-8 py-4" onClick={handleBurger}>
            Profile Evaluation
          </Link>
        </li>
        <li>
          <Link to="/login" className="block px-8 py-4" onClick={handleBurger}>
            Log in
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
