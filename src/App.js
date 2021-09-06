import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bulma/css/bulma.min.css'
import './App.css'

import Home from './pages/Home'
import Heroes from './pages/Heroes'
import Heroe from './pages/Heroe'
import About from './pages/About'
import Login from './pages/Login'

function App () {
  return (
    <div style={{ marginLeft: '200px', marginRight: '200px' }}>
      <Router>
        <nav className='navbar is-black'>
          <div className='navbar-menu'>
            <div className='navbar-start'>
              <li className='navbar-item'>
                <Link to='/'>INICIO</Link>
              </li>
            </div>
            <div className='navbar-end'>
              <li className='navbar-item'>
                <Link to='/heroes'>HEROES ANTERIORES</Link>
              </li>
              <li className='navbar-item'>
                <Link to='/about'>¿CÓMO FUNCIONA?</Link>
              </li>
              <li className='navbar-item'>
                <Link to='/login'>INICIAR SESIÓN</Link>
              </li>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path='/heroes' exact component={Heroes}></Route>
          <Route path='/heroes/:id' component={Heroe}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/' exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
