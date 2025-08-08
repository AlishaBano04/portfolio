import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d12318b7-363a-480e-a6cb-bbef89d6c658");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-4 sm:px-[12%] py-10 scroll-mt-20 gap-6">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl head">
        Get in touch
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-sm sm:text-base md:text-lg">
        I'd love to hear from you! If you have any questions, comments or
        feedback please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="w-full p-3 text-sm sm:text-base text-black outline-none border-[0.5px] rounded-md bg-white"
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 text-sm sm:text-base text-black outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>

        <textarea
          name="message"
          rows={6}
          placeholder="Write your message here..."
          required
          className="w-full p-3 text-sm sm:text-base text-black outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"></textarea>

        <button
          type="submit"
          className="cursor-pointer py-3 px-8 w-full sm:w-max flex items-center justify-center sm:justify-between gap-2 bg-orange-500 text-white rounded-full mx-auto hover:bg-orange-400 duration-500">
          Submit Now
        </button>

        <p className="mt-4 text-center text-sm sm:text-base">{result}</p>
      </form>

      <hr className="mt-10" />
    </div>
  );
};

export default Contact;
