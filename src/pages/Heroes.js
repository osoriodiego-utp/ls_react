import React from 'react'
import { Link } from 'react-router-dom'

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import { Icon } from 'react-materialize'

import data from '../data/heroes'

const Item = ({ heroe }) => {
  const percentUp = (100 / (heroe.votesUp + heroe.votesDown)) * heroe.votesUp
  const percentDown =
    (100 / (heroe.votesUp + heroe.votesDown)) * heroe.votesDown

  console.log(percentDown)

  return (
    <div className='row'>
      <div className='col s12'>
        <div className='card hoverable'>
          <div className='card-image'>
            <img src={heroe.img} alt='heroe' />
            <span className='card-title'>{heroe.name}</span>
            {heroe.votesUp >= heroe.votesDown ? (
              <button
                className='btn-floating halfway-fab waves-effect waves-light green'
                style={{ pointerEvents: 'none' }}
              >
                <Icon className='material-icons'>keyboard_arrow_up</Icon>
                {Math.round(percentUp)}
              </button>
            ) : (
              <button
                className='btn-floating halfway-fab waves-effect waves-light red'
                style={{ pointerEvents: 'none' }}
              >
                <Icon className='material-icons'>keyboard_arrow_down</Icon>
                {Math.round(percentDown)}
              </button>
            )}
          </div>
          <div
            className='card-content'
            style={{ background: 'black', color: 'white' }}
          >
            <p>
              {heroe.description.substring(0, 70)}...{' '}
              <Link to={`/heroes/${heroe.id}`}>ver más</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Heroes = ({ match }) => {
  return (
    <div className='container'>
      <div className='row'>
        {data.map(heroe => (
          <Item heroe={heroe} />
        ))}
      </div>
    </div>
  )
}

export default Heroes
