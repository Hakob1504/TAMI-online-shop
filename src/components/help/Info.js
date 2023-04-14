import React from 'react'
import useStore from '../../hooks/useStore'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import '../../css/help/Info.css'

export default function Info() {

    let [helpStore] = useStore('helpStore')
    let { findCategory } = helpStore

    let { path } = useParams()

    let category = findCategory(path);

    return (
        <main className='info_main container'>
            <div className="back_btn_div">
                <Link to={'/help'} className="btn btn-outline-dark">Back</Link>
            </div>
            <div className="category_info_div">
                <h2>{category.title.toUpperCase()}</h2>
                <p>{category.info}</p>
            </div>
        </main>
    )
}
