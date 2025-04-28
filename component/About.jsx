import { infoList } from "@/assets/assets";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 mt-28 scroll-mt-20">
      <h2 className="head text-center text-5xl ">About Me</h2>

      <div className="m-auto mt-4">
        <p className="text-center text-justify max-w-2xl mx-auto mb-12">
          Hi! I am Mohd. Imran, an advocate and Tax consultant with a passion
          for delivering helping clients navigate complex challenges. I have
          done M.Com, LL.b and I am a dedicated tax advocate with 16+ years of
          experience.I specialize in taxation and I am committed to providing
          clear, practical, and results-driven legal advice. With 16+ years of
          experience in this field, I have represented a diverse range of
          clients I pride myself on my integrity, diligence, and client-centered
          approach. I believe in a proactive and detail-oriented approach to tax
          issues—keeping clients informed, protected, and empowered every step
          of the way.
        </p>

        <ul className="grid lg:grid-cols-3 md:grid-cols-1 mx-6 sm:cols-1 gap-6 my-10">
          {infoList.map(({ title, description }, index) => (
            <li
              key={index}
              className="about-me border-[0.5px] border-gray-400 rounded-xl p-6 curser-pointer hover:-translate-x-1 duration-500">
              <h3 className="list my-4 font-semibold text-white-700">
                {title}
              </h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
