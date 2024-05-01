import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";

const LeftSection = () => {
  return (
    <div>
      <div className="sticky top-12 grid grid-rows-[35%_45%_20%] h-[90vh]">
        <Header />
        <Navbar />
        <Contact />
      </div>
    </div>
  );
};

export default LeftSection;
