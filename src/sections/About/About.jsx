import React from 'react'
import { dataAbout } from '../../contents/ContentAbout'

const About = () => {
  return (
    <div className='space-y-4'>
      <div className='text-primaryAccent font-medium'>{dataAbout.title}</div>
      <div>{dataAbout.description}</div>
    </div>
  )
}

export default About