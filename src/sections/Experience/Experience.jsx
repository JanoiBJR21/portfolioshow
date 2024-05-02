import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import imgExp1 from "../../assets/exp_site.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  return (
    <div className="">
      <div className="text-primaryAccent font-medium">Experience</div>

      <div
        className={`grid grid-cols-[30%_70%] rounded-md px-2 py-6 transition-all ${
          isMouseEnter["id1"] ? " bg-zinc-900" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter({ id1: true })}
        onMouseLeave={() => setIsMouseEnter({ id1: false })}
      >
        <div>
          <div>
            <span
              className={`text-sm ${
                isMouseEnter["id1"] ? "text-primaryAccent" : ""
              }`}
            >
              2023-2024
            </span>
          </div>
          <div>
            <img
              src={imgExp1}
              alt="imgExperience"
              className="w-5/6 rounded-md border-2 border-gray-700"
            />
          </div>
        </div>
        <div className="grid gap-y-4">
          <a href="https://janoibjr21.github.io/portfolioshow/" target="_blank">
            <div
              className={`text-primaryAccent ${
                isMouseEnter["id1"] ? "text-primaryTitle" : ""
              }`}
            >
              Portfolio of Apichat Wongtala
              <FontAwesomeIcon
                icon={faArrowRight}
                className={`text-xs -rotate-45 duration-300 ease-out ${
                  isMouseEnter["id1"] ? "translate-x-1 -translate-y-1" : ""
                }`}
              />
            </div>
          </a>
          <div
            className={`flex gap-4 items-end text-xl ${
              isMouseEnter["id1"] ? "text-primaryTitle" : ""
            }`}
          >
            <a
              href="https://github.com/JanoiBJR21/portfolioshow"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:scale-125 hover:text-primaryTitle transition-all"
              />
            </a>
          </div>
          <div className="text-sm">
            · A simple and minimalist portfolio for developers built with React
            and TailwindCSS, designed to be clean and fast.
          </div>
          <div>
            <div className="flex gap-4 text-sm">
              <a href="https://react.dev/" target="_blank">
                <div
                  className={`bg-zinc-800 px-2 py-1 rounded-md ${
                    isMouseEnter["id1"] ? "text-primaryTitle" : ""
                  }`}
                >
                  React
                </div>
              </a>
              <a href="https://tailwindcss.com/" target="_blank">
                <div
                  className={`bg-zinc-800 px-2 py-1 rounded-md ${
                    isMouseEnter["id1"] ? "text-primaryTitle" : ""
                  }`}
                >
                  TailwindCSS
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`grid grid-cols-[30%_70%] rounded-md px-2 py-6 transition-all ${
          isMouseEnter["id2"] ? " bg-zinc-900" : ""
        }`}
        onMouseEnter={() => setIsMouseEnter({ id2: true })}
        onMouseLeave={() => setIsMouseEnter({ id2: false })}
      >
        <div>
          <div>
            <span
              className={`text-sm ${
                isMouseEnter["id2"] ? "text-primaryAccent" : ""
              }`}
            >
              2023-2024
            </span>
          </div>
          <div>
            <img
              src={imgExp1}
              alt="imgExperience"
              className="w-5/6 rounded-md border-2 border-gray-700"
            />
          </div>
        </div>
        <div className="grid gap-y-4">
          <a href="https://janoibjr21.github.io/portfolioshow/" target="_blank">
            <div
              className={`text-primaryAccent ${
                isMouseEnter["id2"] ? "text-primaryTitle" : ""
              }`}
            >
              Portfolio of Apichat Wongtala
              <FontAwesomeIcon
                icon={faArrowRight}
                className={`text-xs -rotate-45 duration-300 ease-out ${
                  isMouseEnter["id2"] ? "translate-x-1 -translate-y-1" : ""
                }`}
              />
            </div>
          </a>
          <div
            className={`flex gap-4 items-end text-xl ${
              isMouseEnter["id2"] ? "text-primaryTitle" : ""
            }`}
          >
            <a
              href="https://github.com/JanoiBJR21/portfolioshow"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:scale-125 hover:text-primaryTitle transition-all"
              />
            </a>
          </div>
          <div className="text-sm">
            · A simple and minimalist portfolio for developers built with React
            and TailwindCSS, designed to be clean and fast.
          </div>
          <div>
            <div className="flex gap-4 text-sm">
              <a href="https://react.dev/" target="_blank">
                <div
                  className={`bg-zinc-800 px-2 py-1 rounded-md ${
                    isMouseEnter["id2"] ? "text-primaryTitle" : ""
                  }`}
                >
                  React
                </div>
              </a>
              <a href="https://tailwindcss.com/" target="_blank">
                <div
                  className={`bg-zinc-800 px-2 py-1 rounded-md ${
                    isMouseEnter["id2"] ? "text-primaryTitle" : ""
                  }`}
                >
                  TailwindCSS
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
