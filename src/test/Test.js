import React, { useEffect, useState } from 'react'

export default function Test() {

    let [value1, setValue1] = useState('')
    let [value2, setValue2] = useState('')
    let [valid, setValid] = useState(false)

    let signInFields = [
        {
            name: 'email',
            label: 'Email',
            value: value1,
            setValue: setValue1,
            valid: false,
            pattern: /^.+@.+$/
        },
        {
            name: 'password',
            label: 'Password',
            value: value2,
            setValue: setValue2,
            valid: false,
            pattern: /(?=.*[0-9])(?=.*[a-z])(?=.{8,})/
        },
    ]
    

    

    return (
        <form className='container text-center mt-5'>
            <div className="d-flex flex-column gap-3">
                {signInFields.map((field) => {
                    return <input
                        key={field.name}
                        type={field.name}
                        placeholder={field.name}
                        value={field.value}
                        onChange={() => {}}
                    />
                })}
            </div>
            <button>submit</button>
        </form>
    )
}
