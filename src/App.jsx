import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from "@fortawesome/free-solid-svg-icons";
import fileResume from "./assets/Resume.pdf"
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function App() {
  const hoverIcons = "hover:scale-150 hover:text-primaryTitle transition-all"
  return (
    <div className="mt-12 mx-auto max-w-6xl grid grid-cols-[40%_60%]">
      <div>
        <div className="sticky top-12 grid grid-rows-[35%_45%_20%] h-[90vh]">
          <div className="flex flex-col gap-2">
            <div className="text-3xl text-primaryTitle font-semibold">
              Apichat Wongtala
            </div>
            <div className="text-primaryAccent font-semibold">
              Front-end Developer *between jobs
            </div>
            <div className="text-sm w-5/6">
              From concept to reality, bridging the gap with code, transforming
              ideas into tangible digital solutions.
            </div>
            <div className="mt-4">
              <a href={fileResume} target="_blank">
              <span className="bg-primaryTitle rounded-md text-primaryAccent py-2 px-4">View Resume
              <span className="rotate-90 inline-block ml-2 text-sm"><FontAwesomeIcon className="animate-bounce" icon={faArrowDown} /></span>
              </span>
              </a>
            </div>
          </div>
          <div>Navbar</div>
          <div className="flex items-end gap-4 text-2xl pb-5">
            <div className={hoverIcons}><FontAwesomeIcon icon={faGithub} /></div>
            <div className={hoverIcons}><FontAwesomeIcon icon={faFacebook} /></div>
            <div className={hoverIcons}><FontAwesomeIcon icon={faTwitter} /></div>
            <div className={hoverIcons}><FontAwesomeIcon icon={faInstagram} /></div>
            <div className={hoverIcons}><FontAwesomeIcon icon={faLinkedin} /></div>
          </div>
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
