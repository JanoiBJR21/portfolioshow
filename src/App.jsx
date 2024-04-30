import React from "react";
import "./App.css";

function App() {
  return (
    <div className="mt-12 mx-auto max-w-6xl grid grid-cols-[40%_60%] gap-6">
      <div>
        <div className="sticky top-12 grid grid-rows-[35%_45%_20%] h-screen">
        <div>
          <div className="text-3xl text-primaryTitle">Apichat Wongtala</div>
          <div>Junoi Front-end Developer *between jobs</div>
          <div>From concept to reality, bridging the gap with code, transforming ideas into tangible digital solutions.</div>
          <div>View Resume</div>
        </div>
        <div>Navbar</div>
        <div className="flex items-end">Link</div>
        </div>
      </div>
      <div>
        <div>About</div>
        <div className="mb-96">Experience</div>
        <div className="mb-96">Experience</div>
        <div className="mb-96">Experience</div>
        <div className="mb-96">Experience</div>
        <div className="mb-96">Experience</div>
        <div className="mb-96">Experience</div>
      </div>
    </div>
  );
}

export default App;
