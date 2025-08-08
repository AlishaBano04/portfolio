// component/Address.jsx
export default function Address() {
  return (
    <section
      id="address"
      className="py-12 px-4 md:px-8 scroll-mt-24" // ✅ Added scroll margin for smooth anchor offset
      style={{ backgroundColor: "#001524" }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Matching 'Get in touch' style */}
        <h2 className="head text-center text-3xl sm:text-4xl md:text-5xl mt-4">
          Where You Can Find Me
        </h2>

        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto leading-relaxed bg-gray-900/50 p-4 sm:p-6 rounded-lg border border-gray-700 mt-8">
          Milan Chowk, Near Lala Bazar
          <br />
          Almora, Uttarakhand, India
        </p>
      </div>
    </section>
  );
}
