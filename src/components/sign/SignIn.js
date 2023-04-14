import React, { useState } from 'react'

import useStore from '../../hooks/useStore'
import { Link } from 'react-router-dom'

import '../../css/sign/Sign.css'

export default function SignIn() {

    let [value1, setValue1] = useState('')
    let [value2, setValue2] = useState('')
    let [value3, setValue3] = useState('')
    let [value4, setValue4] = useState('')

    let [signStore] = useStore('signStore')
    let { signInFields } = signStore

    signInFields[0].value = value1
    signInFields[1].value = value2
    signInFields[0].setValue = setValue1
    signInFields[1].setValue = setValue2

    function update(name, value, fn) {
        let field = signInFields.find(f => name === f.name)

        if (field !== undefined) {
            field.value = value.trim()
            field.valid = field.pattern.test(field.value)
        }

        return fn
    }

    let valid = signInFields.every(f => f.valid)

    return (
        <main className='sign_main container'>
            <form className='sign_form'>
                <h2>Sign in</h2>
                {
                    signInFields.map((field) => {
                        return <div className='input_div' key={field.name}>
                            <input
                                style={{ borderColor: !field.value.length || field.valid ? 'black' : 'red' }}
                                type={field.type}
                                placeholder={field.name}
                                value={field.value}
                                onChange={(e) => update(field.name, e.target.value, field.setValue(e.target.value))}
                            />
                            {field.value.length && !field.valid ? <p>* {field.err}</p> : null}
                        </div>
                    })
                }
                <label>
                    <input type="checkbox" className='form-check-input' /> remember
                </label>
                <button disabled={!valid}
                 className="btn btn-outline-dark">Sign in</button>
            </form>
            <Link to={'/register'}>Haven't an account yet? Click for registration</Link>
        </main>

    )
}
