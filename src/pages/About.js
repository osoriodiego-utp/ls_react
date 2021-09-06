import React from 'react'

import { Parallax } from 'react-materialize'

const About = () => {
  return (
    <div>
      <Parallax
        image={
          <img
            src='https://cdn.pixabay.com/photo/2014/09/17/21/43/bricks-450106__340.jpg'
            alt='bricks'
          />
        }
        options={{
          responsiveThreshold: 0
        }}
      />
      <div className='section white'>
        <div>
          <h2>Sitio en construcción</h2>
        </div>
      </div>
      <Parallax
        image={
          <img
            src='https://cdn.pixabay.com/photo/2014/09/17/21/43/bricks-450106__340.jpg'
            alt='bricks'
          />
        }
        options={{
          responsiveThreshold: 0
        }}
      />
    </div>
  )
}

export default About
