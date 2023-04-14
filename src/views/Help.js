import React from 'react'

import useStore from '../hooks/useStore'

import '../css/help/Help.css'
import { Link } from 'react-router-dom'

export default function Help() {

    let [helpStore] = useStore('helpStore')
    let { renderHelpCategories } = helpStore

    return (
        <main className='help_main container'>
            <div className="back_btn_div">
            <Link to={'/'} className="btn btn-outline-dark">Back</Link>
            </div>
            <div className='help_inner_div'>
                <h2>Help</h2>
                <div className="help_categories">
                    {renderHelpCategories}
                </div>
            </div>
        </main>
    )
}
