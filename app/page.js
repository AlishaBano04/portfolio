"use client";
import Header from "@/component/Header";
import Navbar from "@/component/Navbar";
import About from "@/component/About";
import Services from "@/component/Services";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
