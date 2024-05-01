import React from "react";
import "./App.css";
import LeftSection from "./sections/LeftSection/LeftSection";
import RightSection from "./sections/RightSection/RightSection";

function App() {
  return (
    <div className="mt-12 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]">
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default App;
