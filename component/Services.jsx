import React from "react";

const Services = () => {
  const services = [
    "Income Tax Return (ITR)",
    "GST Registration & Return",
    "Apply PAN / TAN",
    "Balance Sheet",
    "Project Report",
    "Digital Signature (DSC)",
    "Partnership Firm Deed",
    "MSME Registration",
    "GeM Registration",
    "E-Tendering Services",
    "TDS / TCS Return",
    "Accounting & Bookkeping",
  ];

  return (
    <div
      id="services"
      className="w-full px-6 sm:px-10 md:px-[12%] py-12 sm:py-16 scroll-mt-20"
      style={{ backgroundColor: "#001524" }}>
      {/* Heading */}
      <h2
        className="head text-center text-3xl sm:text-4xl md:text-5xl"
        style={{
          backgroundImage: "linear-gradient(270deg, #ff6700 10%, #f72585 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "'Poppins', sans-serif",
        }}>
        Services We Offer
      </h2>

      {/* Description */}
      <p className="text-center max-w-2xl mx-auto mt-3 mb-10 sm:mb-12 text-gray-300 text-base sm:text-lg px-2">
        We provide wide range of services like accounting and taxation.
      </p>

      {/* Service Boxes */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-data bg-[#001524] border border-gray-700 rounded-lg shadow-md px-4 sm:px-6 py-6 sm:py-8 flex items-center justify-center text-center text-white font-medium text-sm sm:text-base md:text-lg hover:-translate-y-1 duration-500"
            style={{
              boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            }}>
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
