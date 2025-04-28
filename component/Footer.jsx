import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
const Footer = () => {
  return (
    <div className="footer-box w-full px-[12%] py-10 scroll-mt-20 ">
      <h4 className="text-center mb-2 text-lg">
        My contact details<br></br> Feel free to contact me for any feedback or
        query.
      </h4>
      <div className="text-center">
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src="/whatsapp.png" alt="" width={20} height={20} />
          9548381120
        </div>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src="/call_icon.svg" alt="" width={20} height={20} />
          8958364786
        </div>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon_dark} alt="" width={20} />
          ikalmora@gmail.com
        </div>
      </div>
      <br></br>
      <p className="create text-center">&copy; All right reserved</p>
      <p className="create text-center">Created and developed by Alisha</p>
    </div>
  );
};

export default Footer;
