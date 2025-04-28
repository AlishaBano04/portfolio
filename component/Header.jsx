import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="mt-10 sm:mt-10">
        <Image
          src="/media/profile-image.jpg"
          alt="profile"
          width={150}
          height={150}
          className="rounded-full w-28 mt-32"
        />
      </div>

      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 ">
        Hi! I'm Mohd. Imran
      </h3>
      <h2 className=" head text-5xl sm:text-6xl lg:text-[66px] font-Ovo">
        Advocate & Tax Consultant
      </h2>
      <p className="max-w-2xl mx-auto font-Ovo">
        A person who pleads for a person, cause or idea. <br></br> I chose to go
        to law school because I thought that someday, somehow I’d make a
        difference.
      </p>
      <div className="flex flex-col sm:flex-row  items-center gap-4 mt-4">
        <a
          href="#contact"
          className="connect px-10 py-3  rounded-full  text-white flex items-center gap-2">
          Let's Connect{" "}
          <Image
            src={assets.right_arrow_white}
            className="w-4"
            alt="right_arrow"
          />
        </a>
        <a
          href="#skills"
          className="my-services px-10 py-3 border rounded-full border-white-100 flex items-center gap-2">
          My Services
        </a>
      </div>
    </div>
  );
};

export default Header;
