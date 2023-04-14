import { makeAutoObservable } from "mobx"

import instagramSrc from '../img/soc-sites/instagram.png'
import facebookSrc from '../img/soc-sites/facebook.png'
import twitterSrc from '../img/soc-sites/twitter.png'
import pinterestSrc from '../img/soc-sites/pinterest.png'
import youtubeSrc from '../img/soc-sites/youtube.png'
import { Link } from "react-router-dom"

export default class FooterStore {

    socSites = socSitesStub()

    renderSocSites = this.socSites.map(socSite => {
        return <Link key={socSite.src}>
            <img src={socSite.src} alt="" />
        </Link>
    })

    links = linksStub()

    renderLinks = this.links.map(link => {
        return <div className="link_categories" key={link.title}>
            <h5>{link.title.toUpperCase()}</h5>
            <ul>
                {link.links.map(link => {
                    return <li key={link}>
                        <Link className="footer_link">{link.toUpperCase()}</Link>
                    </li>
                })}
            </ul>
        </div>
    })

    constructor(RootStore) {
        this.RootStore = RootStore
        makeAutoObservable(this)
    }
}

function socSitesStub() {
    return [
        {
            src: instagramSrc
        },
        {
            src: facebookSrc
        },
        {
            src: twitterSrc
        },
        {
            src: pinterestSrc
        },
        {
            src: youtubeSrc
        },
    ]
}
function linksStub() {
    return [
        {
            title: "Help",
            links: [
                'shop at zara.com',
                'product',
                'payment',
                'exchanges and returns',
                'my account'
            ]
        },
        {
            title: "Follow Us",
            links: [
                'newsettler',
                'instagram',
                'facebook',
                'twitter',
                'pinterest',
                'youtube'
            ]
        },
        {
            title: "Company",
            links: [
                'about us',
                'join life',
                'offices',
                'stories'
            ]
        },
        {
            title: "Policies",
            links: [
                'privacy policy',
                'purchase conditions',
                'cookies settings'
            ]
        },
    ]
}