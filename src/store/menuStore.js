import { makeAutoObservable } from "mobx"
import { Link } from "react-router-dom"

export default class MenuStore {

    menu = menuStub()

    get renderMenu() {
        return <div className="offcanvas_menu_div">
            <ul className="gender_ul">
                {
                    this.menu.gender.map(gend => {
                        return <li key={gend.key}>
                            <Link className="gender_link">{gend.gender.toUpperCase()}</Link>
                        </li>
                    })
                }
            </ul>
            <hr />
            <ul className="categories_ul">
                {
                    this.menu.categ.map((link) => {
                        return <li key={link.key}>
                            <Link
                                to={link.category !== 'catalog' ? `/catalog/${link.category}` : '/catalog'}
                                className="categories_link"
                                style={link.category === 'special prices'
                                    ?
                                    { color: 'red' }
                                    :
                                    { color: 'black' }}>{link.category.toUpperCase()}
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    }

    constructor(RootStore) {
        this.RootStore = RootStore
        makeAutoObservable(this)
    }
}

function menuStub() {
    return {
        gender: [
            {
                gender: 'man',
                key: Math.random()
            },
            {
                gender: 'woman',
                key: Math.random()
            },
            {
                gender: 'kids',
                key: Math.random()
            },
        ],
        categ: [
            {
                category: 'catalog',
                key: Math.random()
            },
            {
                category: 'new',
                key: Math.random()
            },
            {
                category: 'trousers',
                key: Math.random()
            },
            {
                category: 't-shirts',
                key: Math.random()
            },
            {
                category: 'shirts',
                key: Math.random()
            },
            {
                category: 'shoes',
                key: Math.random()
            },
            {
                category: 'blazers',
                key: Math.random()
            },
            {
                category: 'special prices',
                key: Math.random()
            },
        ]
    }
}