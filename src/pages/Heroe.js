import React from 'react'
import data from '../data/heroes'

import { Slide, Slider, Caption } from 'react-materialize'

const Heroe = ({ match }) => {
  const heroe = data.find(x => x.id === Number(match.params.id))

  return (
    <Slider
      fullscreen={false}
      options={{
        height: 700,
        indicators: false
      }}
    >
      <Slide image={<img src={heroe.img} alt={heroe.name} />}>
        <Caption placement='center'>
          <div className='card vote-card'>
            <h3 style={{ paddingTop: '20px' }}>{heroe.name}</h3>
            <div className='card-content'>
              <h3 style={{ fontSize: '2vw' }}>{heroe.description}</h3>
              <a href={heroe.info}>
                <h5 className='light grey-text text-lighten-3'>[ + ]</h5>
              </a>
            </div>
          </div>
        </Caption>
      </Slide>
    </Slider>
  )
}

export default Heroe
