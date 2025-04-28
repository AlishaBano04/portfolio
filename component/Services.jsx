import { assets, serviceData } from "@/assets/assets";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="head text-center text-5xl">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
        I am an advocate with 16+ YEARS OF EXPERIENCE. And we provide wide range
        of services like Accounting and taxation.
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:cols-1 gap-6 my-10">
        {serviceData.map(({ title, description }, index) => (
          <div
            key={index}
            className="service-data border border-black-400 rounded-lg px-8 py-12 hover:-translate-y-1 duration=">
            <h3 className="list text-lg my-4 text-white-700">{title}</h3>
            <p className="text-sm text-white-600 leading-5">
              {" "}
              &#x2705; &nbsp;{description}
            </p>
          </div>
        ))}
      </div>
      <h2 className="list text-2xl bold">Services We Offer</h2>
      <br></br>
      <p className="service-list">&#x2705; Income Tax Return (ITR)</p>
      <p className="service-list">&#x2705; GST Registration & Returns</p>
      <p className="service-list">&#x2705; Apply PAN / TAN</p>

      <p className="service-list">&#x2705; Balance Sheet</p>
      <p className="service-list">&#x2705; Project Report</p>
      <p className="service-list">&#x2705; Digital Signature (DSC)</p>
      <p className="service-list">&#x2705; MSME Registration</p>
      <p className="service-list">&#x2705; GeM Registration</p>
      <p className="service-list">&#x2705; E-Tender support</p>
      <p className="service-list">&#x2705; TDS Return.</p>

      <p className="service-list">&#x2705; Accounting & Bookkeping</p>
    </div>
  );
};

export default Skills;
