// component/Address.jsx
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Address() {
  return (
    <section
      id="address"
      className="py-12 px-4 md:px-8 scroll-mt-24"
      style={{ backgroundColor: "#001524" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="head text-center text-3xl sm:text-4xl md:text-5xl mt-4">
          Where You Can Find Me
        </h2>

        <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed bg-gray-900/50 p-4 sm:p-6 rounded-lg border border-gray-700 mt-8 space-y-4">
          <p className="text-[#ff6700]">
            <b>My Office Address</b>
          </p>
          <p className="flex items-center justify-center gap-2">
            Milan Chowk, Near Lala Bazar, <br />
            Almora, Uttarakhand, India
          </p>{" "}
          <hr></hr>
          <p className="text-[#ff6700]">
            <b>My Contact Details</b>
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-[#ff6700]" />
            ikalmora@gmail.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-[#ff6700]" />
            9548381120
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaWhatsapp className="text-[#ff6700]" />
            8958364786
          </p>
        </div>
      </div>
    </section>
  );
}
