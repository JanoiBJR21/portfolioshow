import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";

const LeftSection = () => {
  return (
    <div className="px-5">
      <div className="sticky top-12 grid gap-y-5 lg:grid-rows-[35%_45%_20%] lg:h-[90vh]">
        <Header />
        <Navbar />
        <Contact />
      </div>
    </div>
  );
};

export default LeftSection;
