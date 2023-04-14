import React from 'react'
import Nav from '../header/Nav'

import '../../css/header/Header.css'
import Menu from './Menu'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="sale_div">
        <Link to={'/catalog/special prices'}>UP TO 70% SALE</Link>
      </div>
      <div className='header_components container'>
        <Menu />
        <Nav />
      </div>
    </header>
  )
}
