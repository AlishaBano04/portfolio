import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

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
      <nav className="navbar w-full fixed bg-rose px-5 lg:px-8 xl:px-[8%] py-2 flex items-center justify-between z-50">
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <a href="#top" className="flex items-center">
            <Image
              src={assets.logo}
              className="w-10 cursor-pointer ml-4"
              alt="logo"
              style={{ height: "2.5rem", width: "2.5rem" }}
            />
          </a>
          <span className="text-white font-bold text-lg sm:text-xl">
            Tax Solution Point
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="nav hidden md:flex items-center gap-8 lg:gap-12 rounded-full px-12 py-3 ml-auto">
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
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#address" className="font-Ovo">
              Address
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact
            </a>
          </li>
        </ul>

        {/* Contact button (desktop) */}
        <div>
          <a
            href="#contact"
            className="contact-btn hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo">
            Contact{" "}
            <Image src={assets.arrow_icon_dark} alt="arrow" className="w-3" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div>
          <button className="block md:hidden ml-3 p-5" onClick={openMenu}>
            <Image src={assets.menu_white} alt="menu" className="w-6" />
          </button>
        </div>

        {/* ---------------- Mobile Menu ---------------- */}
        <ul
          ref={sideMenuRef}
          className="sideMenu flex flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[#001524] text-white transition duration-500">
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_white}
              alt="close"
              className="w-5 cursor-pointer"
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
            <a href="#services" className="font-Ovo" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#address" className="font-Ovo" onClick={closeMenu}>
              Address
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
