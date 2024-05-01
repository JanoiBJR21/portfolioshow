import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navIcon = (
    <FontAwesomeIcon className="mr-2 text-primaryTitle" icon={faArrowRight} />
  );
  return (
    <div className="flex flex-col gap-4 font-semibold">
      <div>{navIcon}About</div>
      <div>Experience</div>
      <div>Project</div>
      <div>Article</div>
    </div>
  );
};

export default Navbar;
