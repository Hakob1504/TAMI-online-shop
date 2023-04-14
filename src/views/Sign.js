import React, { useState } from 'react'

import '../css/sign/Sign.css'
import { Link } from 'react-router-dom'
import SignIn from '../components/sign/SignIn'
import Register from '../components/sign/Register'

export default function Sign() {
    
    return (
        <main className='sign_main container'>
             {registerShown ? <Register /> : <SignIn />}
            <Link onClick={changeRegisterShown}>{registerShown ? 'Click to sign in' : "Haven't an account yet? Click for registration"}</Link>
        </main>
    )
}
