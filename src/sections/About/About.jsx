import React from 'react'
import { dataAbout } from '../../contents/ContentAbout'

const About = () => {
  return (
    <div>
      <div>{dataAbout.title}</div>
      <div>{dataAbout.description}</div>
    </div>
  )
}

export default About