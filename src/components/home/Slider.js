import React from 'react'

import slide1 from '../../img/slide/slide1.jpg'
import slide2 from '../../img/slide/slide2.jpg'
import slide3 from '../../img/slide/slide3.jpg'

import '../../css/home/Slider.css'

export default function Slider() {
    return (
        <div id="carouselExampleFade" className="carousel w-100 slide carousel-fade">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={slide2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
