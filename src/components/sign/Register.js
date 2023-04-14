import React, { useState } from 'react'

import useStore from '../../hooks/useStore'
import { Link } from 'react-router-dom'

export default function SignIn() {

    let [value1, setValue1] = useState('')
    let [value2, setValue2] = useState('')
    let [value3, setValue3] = useState('')
    let [value4, setValue4] = useState('')

    let [signStore] = useStore('signStore')
    let { registerFields } = signStore

    registerFields[0].value = value1
    registerFields[1].value = value2
    registerFields[2].value = value3
    registerFields[3].value = value4
    registerFields[0].setValue = setValue1
    registerFields[1].setValue = setValue2
    registerFields[2].setValue = setValue3
    registerFields[3].setValue = setValue4

    function update(name, value, fn) {

        let field = registerFields.find(f => name === f.name)

        if(field !== undefined) {
            field.value = value.trim()
            field.valid = field.pattern.test(field.value)
        }
        return fn
    }

    let valid = registerFields.every(f => f.valid)

    return (
        <main className='register_main container'>
            <form className='sign_form'>
                <h2>Register</h2>
                {
                    registerFields.map(field => {
                        return <div className='input_div' key={field.name}>
                            <input
                            style={{borderColor: !field.value.length || field.valid ? 'black' : 'red'}}
                                type={field.type}
                                placeholder={field.name}
                                value={field.value}
                                onChange={(e) => update(field.name, e.target.value, field.setValue(e.target.value))}
                            />
                            {field.value.length && !field.valid ? <p>{field.err}</p> : null}
                        </div>
                    })
                }
                <label>
                    <input type="checkbox" className='form-check-input' /> remember
                </label>
                <button disabled={!valid}
                 className="btn btn-outline-dark">Register</button>
            </form>
            <Link to={'/sign-in'}>Click here to sign in</Link>
        </main>

    )
}
