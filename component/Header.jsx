import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div className="w-11/12 max-w-4xl text-center mx-auto flex flex-col items-center justify-center gap-5 px-3 py-16 sm:py-20 md:py-24">
      {/* Profile Image */}
      <div className="mt-24 sm:mt-20 md:mt-28">
        <Image
          src="/media/profile-img.jpg"
          alt="profile"
          width={150}
          height={150}
          className="rounded-full w-24 sm:w-28 md:w-36"
        />
      </div>

      {/* Greeting */}
      <h3 className="flex items-end gap-2 text-base sm:text-lg md:text-xl lg:text-2xl font-medium mt-2">
        Hi! I'm Mohd. Imran
      </h3>

      {/* Main Heading */}
      <h2 className="head text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-Ovo leading-snug md:leading-tight">
        Advocate & Tax Consultant
      </h2>

      {/* Description */}
      <b>
        <p className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-center mx-auto font-Ovo leading-relaxed mt-2 sm:mt-3 px-2">
          A person who pleads for a person, cause or idea.
          <br className="hidden sm:block" /> <br className="hidden sm:block" />I
          chose to go to law school because <br></br>I thought that someday,
          somehow <br></br>I’d make a difference.
        </p>
      </b>
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-5">
        <a
          href="#contact"
          className="connect px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-full text-white flex items-center gap-2 text-sm sm:text-base md:text-lg">
          Let's Connect
          <Image
            src={assets.right_arrow_white}
            className="w-3 sm:w-4"
            alt="right_arrow"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
