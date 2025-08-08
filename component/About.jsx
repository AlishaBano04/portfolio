import { infoList } from "@/assets/assets";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-4 sm:px-[8%] md:px-[12%] py-8 sm:py-10 mt-20 sm:mt-28 scroll-mt-20">
      {/* Heading */}
      <h2 className="head text-center text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">
        About Me
      </h2>

      <div className="m-auto mt-2 sm:mt-4">
        {/* Paragraph */}
        <p className="text-justify text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
          Hi! I am Mohd. Imran, an advocate and Tax consultant with a passion
          for delivering helping clients navigate complex challenges. I have
          done M.Com, LL.b and I am a dedicated tax advocate with 16+ years of
          experience. I specialize in taxation and I am committed to providing
          clear, practical, and results-driven legal advice. With 16+ years of
          experience in this field, my personal strength lies in my ability to
          pick up new things quickly and my commitment to hard work, my friendly
          nature, sharing knowledge to others, and respect to elders & my work.
        </p>

        {/* Info List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-10">
          {infoList.map(({ title, description }, index) => (
            <li
              key={index}
              className="about-me border border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:-translate-y-1 duration-500">
              <h3 className="list text-center my-2 sm:my-4 font-semibold text-white">
                {title}
              </h3>
              <p className="text-center text-sm sm:text-base">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
