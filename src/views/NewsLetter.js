import React from 'react'

import '../css/newsletter/NewsLetter.css'
import { Link } from 'react-router-dom'

export default function NewsLetter() {
    return (
        <main className='newsletter_main container'>
            <div className="title_div">
                <h2>NEWSLETTER</h2>
                <p>Select your interests and receive the latest news and trends each week.</p>
            </div>
            <form className="subscribtion_form">
                <input type="email" placeholder='email' />
                <label>
                    <input className='form-check-input' type="checkbox" />
                    <p>I have read and understand the <Link>Privacy and Cookies Policy</Link> and agree to receive personalised commercial communications from <b>TAMI</b> by email.</p>
                </label>
            </form>
            <div className="select_section_div">
                <h4>Sections</h4>
                <ul>
                    <li>
                        <label>
                            <input className='form-check-input' type="checkbox" />
                            <p>MAN</p>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input className='form-check-input' type="checkbox" />
                            <p>WOMAN</p>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input className='form-check-input' type="checkbox" />
                            <p>KIDS</p>
                        </label>
                    </li>
                </ul>
            </div>
            <div className="subscribtion_btns_div">
                <button className="btn btn-dark">Subscribe</button>
                <button className="btn btn-outline-dark">Unsubscribe</button>
            </div>
        </main>
    )
}
