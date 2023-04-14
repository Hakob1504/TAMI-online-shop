import React from 'react'

import Slider from '../components/home/Slider'

import { Link } from 'react-router-dom'

import '../css/home/Home.css'

export default function Home() {
    return (
        <main>
            <div className="catalog_link_div">
                <Link to={'/catalog'} className='btn btn-outline-light'>Catalog</Link>
            </div>
            <Slider />
        </main>
    )
}
