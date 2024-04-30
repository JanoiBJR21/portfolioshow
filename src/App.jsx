import React from "react";
import "./App.css";

function App() {
  return (
    <div className="mx-auto max-w-6xl grid grid-cols-[40%_60%] gap-6">
      <div>
        <div className="sticky top-0 grid grid-rows-[35%_45%_20%] h-screen">
        <div>Title</div>
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
