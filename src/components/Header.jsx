import React from "react";
import logo from "../assets/images/logo.svg";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    if (navToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navToggle]);

  return (
    <header data-header className="py-5">
      <div className="container ">
        <div className="nav-test flex justify-between items-center ">
          <a href="#" className="logo">
            <img src={logo} alt="dprod logo" />
          </a>
          <button
            className={`nav-toggle lg:hidden bg-[#d7d7d7] hover:bg-[#de972c] hover:text-white p-4 rounded-[50%] transition-all`}
            onClick={() => setNavToggle(!navToggle)}
          >
            <GiHamburgerMenu size={20} />
          </button>
          <nav
            data-navbar
            className={`lg:left-[0px] lg:block lg:static lg:bg-transparent lg:h-fit fixed top-0 h-screen  left-[-450px] bg-[#f2f2f2] w-[300px] transition-all z-50 ${
              navToggle ? "active" : ""
            } `}
          >
            <p className="nav-title text-center text-[hsla(0, 0%, 0%, 0.4)] lg:hidden">
              Main menu
            </p>
            <ul
              className={` ${
                navToggle ? "open" : ""
              } lg:w-full lg:flex  lg:ml-[-6rem] lg:justify-between`}
            >
              <li className="border border-[hsla(0, 0%, 0%, 0.15)]  lg:border-none p-5 lg:p-0">
                <a href="#">Home</a>
              </li>
              <li className="border border-[hsla(0, 0%, 0%, 0.15)]  lg:border-none p-5 lg:p-0">
                <a href="#">Services</a>
              </li>
              <li className="border border-[hsla(0, 0%, 0%, 0.15)] lg:border-none p-5 lg:p-0">
                <a href="#">About</a>
              </li>
              <li className="border border-[hsla(0, 0%, 0%, 0.15)]  lg:border-none p-5 lg:p-0">
                <a href="#">Projects</a>
              </li>
              <li className="border border-[hsla(0, 0%, 0%, 0.15)]  lg:border-none p-5 lg:p-0">
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
