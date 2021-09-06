import React, { useEffect, useState } from 'react'

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import './style.css'
import { Icon } from 'react-materialize'

import data from '../data/heroes'

const Home = () => {
  const [voted, setVoted] = useState(undefined)
  const [lastVote, setLastVoted] = useState(undefined)
  const [votesUp, setVotesUp] = useState(0)
  const [votesDown, setVotesDown] = useState(0)
  const heroe = data[data.length - 1]

  const percentUp = (100 / (votesUp + votesDown)) * votesUp
  const percentDown = (100 / (votesUp + votesDown)) * votesDown

  useEffect(() => {
    document.title = 'Heroes'
    setVoted(false)
    setVotesUp(heroe.votesUp)
    setVotesDown(heroe.votesDown)
  }, [])

  function onVote (vote) {
    if (vote === 'like') {
      setVotesUp(votesUp + 1)
    } else {
      setVotesDown(votesDown + 1)
    }
    setVoted(true)
    setLastVoted(vote)
  }

  return (
    <>
      <section
        className='hero is-medium'
        style={{
          width: '100%',
          backgroundImage: `url(${heroe.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='hero-body '>
          <div className='row'>
            <div className='col s5'>
              <div className='row'>
                <div className='col s12 m12'>
                  {voted ? (
                    <div className='card vote-card'>
                      <div className='card-content'>
                        <span className='card-title'>
                          {heroe.editorial} - <b>{heroe.name}</b>
                        </span>
                        <div className='row'>
                          <div className='col s4'>
                            {lastVote === 'like' ? (
                              <button
                                className=' btn-large green'
                                style={{ marginRight: '10px' }}
                              >
                                <Icon className='material-icons'>
                                  keyboard_arrow_up
                                </Icon>
                              </button>
                            ) : (
                              <button className=' btn-large red'>
                                <Icon className='material-icons'>
                                  keyboard_arrow_down
                                </Icon>
                              </button>
                            )}
                          </div>
                          <div className='col s8'>
                            <span className='card-title'>
                              <b>Su voto ha sido registrado</b>
                            </span>
                          </div>
                        </div>
                        <p>{heroe.description}</p>
                        <br />
                        <div className='center-align'>
                          <button
                            className='waves-effect waves-light btn-large black '
                            style={{ marginRight: '10px' }}
                            onClick={() => setVoted(false)}
                          >
                            Votar nuevamente
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className='card vote-card'>
                      <div className='card-content'>
                        <p>Dinos tu opinión sobre</p>
                        <span className='card-title'>
                          <b>{heroe.name}?</b>
                        </span>
                        <p>{heroe.description}</p>
                        <br />
                        <br />
                        <div className='row'>
                          <div className='col s4'>
                            <b>¿Cuál es tu voto?</b>
                          </div>
                          <div className='col s8'>
                            <button
                              className='waves-effect waves-light btn-large green'
                              onClick={() => onVote('like')}
                              style={{ marginRight: '10px' }}
                            >
                              <Icon className='material-icons'>
                                keyboard_arrow_up
                              </Icon>
                              {Math.round(percentUp)}
                            </button>
                            <button
                              className='waves-effect waves-light btn-large red'
                              onClick={() => onVote('dislike')}
                            >
                              <Icon className='material-icons'>
                                keyboard_arrow_down
                              </Icon>
                              {Math.round(percentDown)}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='col s6'></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
