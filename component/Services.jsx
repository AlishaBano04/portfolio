import { assets, serviceData } from "@/assets/assets";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="head text-center text-5xl">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
        I am an advocate with 15+ YEARS OF EXPERIENCE. And we provide wide range
        of services like Accounting and bookkeeping.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:cols-1 gap-6 my-10">
        {serviceData.map(({ title, description }, index) => (
          <div
            key={index}
            className="service-data border border-black-400 rounded-lg px-8 py-12 hover:-translate-y-1 duration=">
            <h3 className="text-lg my-4 text-white-700">{title}</h3>
            <p className="text-sm text-white-600 leading-5">
              {" "}
              &#x2705; &nbsp;{description}
            </p>
          </div>
        ))}
      </div>
      <p className="service-list">
        &#x2705; Preparation of balace sheet and Profit & Loss accounts.
      </p>
      <p className="service-list">&#x2705; Income Tax Return.</p>
      <p className="service-list">&#x2705; TDS Return.</p>
      <p className="service-list">&#x2705; GST Registration.</p>
      <p className="service-list">&#x2705; Company Incorporation.</p>
      <p className="service-list">&#x2705;PAN card application.</p>{" "}
      <p className="service-list">&#x2705; Trade mark registration.</p>
    </div>
  );
};

export default Skills;
