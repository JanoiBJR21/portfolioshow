import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { dataHeader } from "../../contents/ContentHeader";

const Header = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-3xl text-primaryTitle font-semibold">
        {dataHeader.name}
      </div>
      <div className="text-primaryAccent font-semibold">{dataHeader.title}</div>
      <div className="text-sm w-5/6">{dataHeader.caption}</div>
      <div className="mt-4">
        <a href={dataHeader.link} target="_blank">
          <span className="bg-primaryTitle rounded-md text-primaryAccent py-2 px-4">
            {dataHeader.btntitle}
            <span className="rotate-90 inline-block ml-2 text-sm">
              <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
