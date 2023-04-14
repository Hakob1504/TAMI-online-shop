import React from 'react'


import '../../css/header/Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='nav'>
      <form className='search_form'>
        <input type="text" placeholder='Search...' />
        <button>Search</button>
      </form>
      <ul>
        <li>
          <Link to={'/sign-in'}>Start Session</Link>
        </li>
        <li>
          <Link to={'/help'}>Help</Link>
        </li>
      </ul>
    </div>
  )
}
