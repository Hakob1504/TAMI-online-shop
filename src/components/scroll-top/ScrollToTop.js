import React, { useState } from 'react'

import '../../css/scroll-btn/ScrollToTop.css'

export default function ScrollToTop() {

    let [shown, setShown] = useState(false)

    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 20) {
                setShown(true)
            }
            else{
                setShown(false)
            }
    })

    function goUp() {
        // document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    return <button onClick={goUp} style={{display: shown ? 'block' : 'none'}} className='scroll_top_btn btn floating-btn'>
        <svg width="50px" height="50px"
            viewBox="0 0 64.00 64.00" xmlns="http://www.w3.org/2000/svg"
            role="img" className="iconify iconify--emojione">
                <circle cx="32" cy="32" r="30" fill="#5f9ea0"></circle>
                <path fill="#ffffff" d="M48 30.3L32 15L16 30.3h10.6V49h10.3V30.3z"></path>
        </svg>
    </button>
}
