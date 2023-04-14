import React from 'react'

import useStore from '../../hooks/useStore'

import '../../css/header/Menu.css'
import { Link } from 'react-router-dom'

export default function Menu() {

    let [menuStore] = useStore('menuStore')
    let { renderMenu } = menuStore

    return (
        <div className='menu_div'>
            <Link to={'/'} className='logo'>TAMI</Link>
            <div className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                                {renderMenu}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
