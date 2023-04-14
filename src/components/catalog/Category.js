import React from 'react'

import '../../css/category/Category.css'
import { useParams } from 'react-router'
import useStore from '../../hooks/useStore'

export default function Category() {

    let [menuStore, catalogStore] = useStore('menuStore', 'catalogStore')
    let { menu } = menuStore

    let { category } = useParams()

    let link = menu.categ.find((c) => c.category === category || c.category === 'special prices')

    function Category() {
        if (link.category === 'special prices') {
            return <div className="catalog_div">
                <div className="catalog_products_div">
                    {Object.values(catalogStore.catalog).map(category => {
                        return category.products.map(c => {
                            if (c.oldPrice) {
                                return <div className='product_div' key={c.key}>
                                    <img className='product_img' src={c.src} alt="" />
                                    <p className='product_name'>
                                        {c.name.length <= 13 ? c.name.toUpperCase() : c.name.substring(0, 13).toUpperCase() + '...'}
                                    </p>
                                    <p className='product_color'>{c.color}</p>
                                    {c.oldPrice
                                        ?
                                        <p className="product_price_old_price">
                                            <del>{c.oldPrice}</del>
                                            <span>{c.price} AMD</span>
                                        </p> :
                                        <p className="product_price">
                                            {c.price} AMD
                                        </p>}
                                        <button className="add_btn btn btn-outline-dark">+</button>
                                </div>
                            }
                        })
                    })}
                </div>
            </div>
        }
        return Object.values(catalogStore.catalog).map((category, i) => {
            if (Object.keys(catalogStore.catalog)[i] === link.category) {
                return <div className='catalog_div' key={link.category}>
                    <img className='category_big_img' src={category.bigImgSrc} alt="" />
                    <div className="catalog_products_div">
                        {
                            category.products.map((c) => {
                                return <div className='product_div' key={c.key}>
                                    <img className='product_img' src={c.src} alt="" />
                                    <p className='product_name'>
                                        {c.name.length <= 13 ? c.name.toUpperCase() : c.name.substring(0, 13).toUpperCase() + '...'}
                                    </p>
                                    <p className='product_color'>{c.color}</p>
                                    {c.oldPrice
                                        ?
                                        <p className="product_price_old_price">
                                            <del>{c.oldPrice}</del>
                                            <span>{c.price} AMD</span>
                                        </p> :
                                        <p className="product_price">
                                            {c.price} AMD
                                        </p>}
                                </div>
                            })
                        }
                    </div>
                </div>
            }
        })
    }

    return (
        <main className='category_main container'>
            {Category()}
        </main>
    )
}
