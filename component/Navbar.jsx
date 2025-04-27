import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useRef } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className="navbar w-full fixed bg-rose px-5lg:px-8 xl:px-[8%] py-2 flex items-center justify-between z-50 
        ">
        <a href="#top">
          <Image
            src={assets.logo}
            className="w-20 curser-pointer mr-14 ml-4"
            alt="logo"
            style={{ height: "3rem", width: "3rem" }}
          />
        </a>
        <ul
          className="nav hidden md:flex items-center gap-8 lg:gap-12 rounded-full px-12 py-3 
          ">
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="font-Ovo">
              My Services
            </a>
          </li>

          <li>
            <a href="#contact" className="font-Ovo">
              Contact
            </a>
          </li>
        </ul>
        <div>
          <a
            href="#contact"
            className="contact-btn hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo">
            Contact{" "}
            <Image src={assets.arrow_icon_dark} alt="arrow" className="w-3" />
          </a>
        </div>
        <div>
          <button className="block md:hidden ml-3 p-5" onClick={openMenu}>
            <Image
              src={assets.menu_white}
              alt=""
              className="w-6 "
              onClick={openMenu}
            />
          </button>
        </div>

        {/**-----------------------mobile menu-------------------------- */}
        <ul
          ref={sideMenuRef}
          className="sideMenu flex md: flex-col gap-4 py-20 px-10 fixed -right-64 tio-0 bottom-0 w-64 z-50 h-screen  transition duration-500">
          <div className=" right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_white}
              alt="close"
              className="w-5 mr-10 curser-pointer"
            />
          </div>

          <li>
            <a href="#top" className="font-Ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="font-Ovo" onClick={closeMenu}>
              My Services
            </a>
          </li>

          <li>
            <a href="#contact" className="font-Ovo" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
