import React from 'react'
import { Link } from 'react-router-dom'
import add from '../icons/add.svg'

const Header = ({ header }) => {
  return <header>
    <section className='hero is-dark'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>Blank String</h1>
          <h2 className='subtitle'>Soundboard</h2>
        </div>
      </div>
    </section>
    <div className='container'>
      <div className='tabs'>
        <ul>
          <li className={`is-${header.soundboard}`}>
            <Link to='/'>Soundboard</Link>
          </li>
          <li className={`is-${header.sound}`}>
            <Link to='/sound'>
              <span><img alt='add' src={add} /> New</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
}

export default Header
