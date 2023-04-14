import React from 'react'

import useStore from '../../hooks/useStore'

import '../../css/footer/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {

  let [footerStore] = useStore('footerStore')
  let { renderSocSites, renderLinks } = footerStore

  return (
    <footer>
      <div className="newsetler_link_div">
        <Link to={'/newsletter'}>FOLLOW OUR NEWSLETTER</Link>
      </div>
      <div className="socsites_div">
        {renderSocSites}
      </div>
      <div className="links_div">
        {renderLinks}
      </div>
      <div className="license_div container">
        <div className="links_div">
          <Link>COOKIES SETTINGS</Link>
          <Link>PRIVACY POLICY</Link>
          <Link>TERMS OF USE</Link>
        </div>
        <div className="copyright_div">
          <p>ARMENIA</p>
          <p>© ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  )
}
