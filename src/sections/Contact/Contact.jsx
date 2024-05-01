import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const hoverIcons = "hover:scale-150 hover:text-primaryTitle transition-all";
  return (
    <div className="flex items-end gap-4 text-2xl pb-5">
      <div className={hoverIcons}>
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <div className={hoverIcons}>
        <FontAwesomeIcon icon={faFacebook} />
      </div>
      <div className={hoverIcons}>
        <FontAwesomeIcon icon={faTwitter} />
      </div>
      <div className={hoverIcons}>
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <div className={hoverIcons}>
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </div>
  );
};

export default Contact;
