import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Material = ({isHighLight, icon, link}) => {
  return (
    <div
      className={`flex gap-4 items-end text-xl ${
        isHighLight ? "text-primaryTitle" : ""
      }`}
    >
      <a href={link} target="_blank">
        <FontAwesomeIcon
          icon={icon}
          className="hover:scale-125 hover:text-primaryTitle transition-all"
        />
      </a>
    </div>
  );
};

export default Material;
