import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TitleLink = ({isHighLight, title, link}) => {
    if(!link){
        return <div
        className={`text-primaryAccent ${
          isHighLight ? "text-primaryTitle" : ""
        }`}
      >
        {title}
      </div>
    }
  return (
    <a href={link} target="_blank">
    <div
      className={`text-primaryAccent ${
        isHighLight ? "text-primaryTitle" : ""
      }`}
    >
      {title}
      <FontAwesomeIcon
        icon={faArrowRight}
        className={`text-xs -rotate-45 duration-300 ease-out ${
            isHighLight ? "translate-x-1 -translate-y-1" : ""
        }`}
      />
    </div>
  </a>
  )
}

export default TitleLink