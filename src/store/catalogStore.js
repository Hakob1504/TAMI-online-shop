import { makeAutoObservable } from "mobx";

// big images

import bigImgBlazers from '../img/products/blazers/wool-blazer-camel.jpg'
import bigImgNew from '../img/products/big-images/big-img-new.jpg'
import bigImgTShirts from '../img/products/big-images/big-img-t-shirts.jpg'
import bigImgTrousers from '../img/products/big-images/big-img-trousers.jpg'
import bigImgShirts from '../img/products/big-images/big-img-shirts.jpg'
import bigImgShoes from '../img/products/big-images/big-img-shoes.jpg'

// wool blazers

import blazerCamelSrc from '../img/products/blazers/wool-blazer-camel.jpg'
import trousersOysterWhiteSrc from '../img/products/blazers/wool-trousers-oyster-white.jpg'
import blazerNavyBlueSrc from '../img/products/blazers/wool-suit-blazer-navy-blue.jpg'
import trousersNavyBlueSrc from '../img/products/blazers/wool-suit-trousers-navy-blue.jpg'
import blazerWhiteSrc from '../img/products/blazers/linen-suit-blazer-white.jpg'
import texturedSuitBlazerSkyBlueSrc from '../img/products/blazers/textured_suit_blazer_sky_blue.jpg'
import texturedSuitBlazerBlueSrc from '../img/products/blazers/textured_suit_blazer_blue.jpg'
import texturedSuitBlazerCamelSrc from '../img/products/blazers/textured_suit_blazer_camel.jpg'

// new

import relaxedBlazersSrc from '../img/products/new/new-blazers.jpg'
import twillShirtSrc from '../img/products/new/new-twill-shirt.jpg'
import wideFitTrousersSrc from '../img/products/new/new-wide-fit-trousers.jpg'
import cottonShirtSrc from '../img/products/new/new-cotton-shirt.jpg'
import oversizeParkaSrc from '../img/products/new/new-oversize-technical-parka.jpg'
import waterRepellentJacketSrc from '../img/products/new/new-water-repellent-jacket.jpg'
import strippedCottonShirtSrc from '../img/products/new/new-stripped-cotton-shirt.jpg'
import strippedCottonShortSrc from '../img/products/new/new-stripped-cotton-short.jpg'

// t-shirts

import texturedPrintCamelSrc from '../img/products/t-shirts/textured-print-camel.jpg'
import texturedPrintWhite1Src from '../img/products/t-shirts/textured-print-white.jpg'
import texturedPrintWhite2Src from '../img/products/t-shirts/textured-print-white2.jpg'
import abstractPrintKnitSrc from '../img/products/t-shirts/abstract-print-knit-black.jpg'
import ribNeckBlackSrc from '../img/products/t-shirts/rib-neck-black.jpg'
import ribNeckYellowSrc from '../img/products/t-shirts/rib-neck-yellow.jpg'
import ribNeckCamelSrc from '../img/products/t-shirts/rib-neck-cameljpg.jpg'
import ribNeckMidBlueSrc from '../img/products/t-shirts/rib-neck-mid-blue.jpg'
import ribNeckRussetSrc from '../img/products/t-shirts/rib-neck-russet.jpg'
import ribNeckSkyBlueSrc from '../img/products/t-shirts/rib-neck-sky-blue.jpg'
import ribNeckWhiteSrc from '../img/products/t-shirts/rib-neck-white.jpg'
import basicMediumWeightSrc from '../img/products/t-shirts/basic-medium-weight.jpg'

// trousers

import joggerBlackSrc from '../img/products/trousers/jogger-black.jpg'
import joggerStoneSrc from '../img/products/trousers/jogger-stone.jpg'
import joggerBlueSrc from '../img/products/trousers/jogger-blue.jpg'
import joggerLightGreenSrc from '../img/products/trousers/jogger-light-green.jpg'
import cargoJoggingBlackSrc from '../img/products/trousers/cargo-jogging-black.jpg'
import cargoJoggingKhakiSrc from '../img/products/trousers/cargo-jogging-khaki.jpg'
import cargoJoggingLightKhakiSrc from '../img/products/trousers/cargo-jogging-light-khaki.jpg'
import cargoJoggingOysterWhiteSrc from '../img/products/trousers/cargo-jogging-oyster-white.jpg'
import suitTrousersBlack from '../img/products/trousers/suit-trousers-black.jpg'
import suitTrousersNavyBlue from '../img/products/trousers/suit-trousers-navy-blue.jpg'
import suitTrousersEcru from '../img/products/trousers/suit-trousers-ecru.jpg'
import suitTrousersCamel from '../img/products/trousers/suit-trousers-camel.jpg'

// shirts

import printedStripedSrc from '../img/products/shirts/printed-striped-shirt.jpg'
import abstractPrintSrc from '../img/products/shirts/abstract-print-shirt.jpg'
import photoPrintSrc from '../img/products/shirts/photo-print-shirt.jpg'
import printKnitSrc from '../img/products/shirts/print-knit-shirt.jpg'

// shoes

import loaferKhakiSrc from '../img/products/shoes/sporty-split-suede-loafers-khaki.jpg'
import loaferBlackSrc from '../img/products/shoes/sporty-split-suede-loafers-black.jpg'
import loaferBrownSrc from '../img/products/shoes/sporty-split-suede-loafers-brown.jpg'
import loaferCoralSrc from '../img/products/shoes/sporty-split-suede-loafers-coral.jpg'
import monochromeSlidesBlackSrc from '../img/products/shoes/monochrome-slides-black.jpg'
import monochromeSlidesWhiteSrc from '../img/products/shoes/monochrome-slides-white.jpg'


export default class CatalogStore {

    catalog = catalogStub()

    get show() {
        return Object.values(this.catalog).map((category, i) => {

            if (i % 2 === 0) {
                return <div className="category_div category_div_row" key={category.products[0].key}>
                    <div className="category_products_div">
                        {category.products.map(pr => {
                            return <div key={pr.key} className="product_div">
                                <img className="product_img" src={pr.src} alt="" />
                                <p className="product_name">
                                    {pr.name.length <= 13 ? pr.name.toUpperCase() : pr.name.substring(0, 13).toUpperCase() + '...'}
                                </p>
                                <p className="product_color">{pr.color}</p>
                                {pr.oldPrice
                                    ?
                                    <p className="product_price_old_price">
                                        <del>{pr.oldPrice}</del>
                                        <span>{pr.price} AMD</span>
                                    </p> :
                                    <p className="product_price">
                                        {pr.price} AMD
                                    </p>}
                                <button className="btn btn-outline-dark">+</button>
                            </div>
                        }).slice(0, 8)}
                    </div>
                    <img className="category_big_img" src={category.bigImgSrc} alt="" />
                </div>
            } else {
                return <div className="category_div category_div_reverse" key={category.products[0].key}>
                    <img className="category_big_img" src={category.bigImgSrc} alt="" />
                    <div className="category_products_div">
                        {category.products.map(pr => {
                            return <div key={pr.key} className="product_div">
                                <img className="product_img" src={pr.src} alt="" />
                                <p className="product_name">
                                    {pr.name.length <= 13 ? pr.name.toUpperCase() : pr.name.substring(0, 13).toUpperCase() + '...'}
                                </p>
                                <p className="product_color">{pr.color}</p>
                                {pr.oldPrice
                                    ?
                                    <p className="product_price_old_price">
                                        <del>{pr.oldPrice}</del>
                                        <span>{pr.price} AMD</span>
                                    </p> :
                                    <p className="product_price">
                                        {pr.price} AMD
                                    </p>}
                                <button className="add_btn btn btn-outline-dark">+</button>
                            </div>
                        }).slice(0, 8)}
                    </div>
                </div>
            }
        })
    }

    constructor(RootStore) {
        this.RootStore = RootStore
        makeAutoObservable(this)
    }
}

function catalogStub() {
    return {
        'new': {
            bigImgSrc: bigImgNew,
            products: [
                {
                    name: 'relaxed fit blazers',
                    categ: 'new',
                    color: 'black',
                    price: 39900,
                    src: relaxedBlazersSrc,
                    key: Math.random(),
                },
                {
                    name: 'twill shirt with pocket',
                    categ: 'new',
                    color: 'oyster-white',
                    price: 28900,
                    src: twillShirtSrc,
                    key: Math.random(),
                },
                {
                    name: 'wide fit trousers',
                    categ: 'new',
                    color: 'navy-blue',
                    price: 29900,
                    src: wideFitTrousersSrc,
                    key: Math.random(),
                },
                {
                    name: 'cotton shirt with pocket',
                    categ: 'new',
                    color: 'blue',
                    price: 24900,
                    src: cottonShirtSrc,
                    key: Math.random(),
                },
                {
                    name: 'water repellent jacket with pockets',
                    categ: 'new',
                    color: 'black',
                    price: 49900,
                    src: waterRepellentJacketSrc,
                    key: Math.random(),
                },
                {
                    name: 'stripped cotton shirt',
                    categ: 'new',
                    color: 'sky-blue',
                    price: 29900,
                    src: strippedCottonShirtSrc,
                    key: Math.random(),
                },
                {
                    name: 'stripped cotton short',
                    categ: 'new',
                    color: 'sky-blue',
                    price: 29900,
                    src: strippedCottonShortSrc,
                    key: Math.random(),
                },
                {
                    name: 'oversize technical parka',
                    categ: 'new',
                    color: 'ecru',
                    price: 89900,
                    src: oversizeParkaSrc,
                    key: Math.random(),
                },
            ]
        },
        'blazers': {
            bigImgSrc: bigImgBlazers,
            products: [
                {
                    name: 'wool blazer',
                    categ: 'blazers',
                    color: 'camel',
                    price: 39000,
                    src: blazerCamelSrc,
                    key: Math.random(),
                },
                {
                    name: 'wool trousers',
                    categ: 'blazers',
                    color: 'oyster-white',
                    oldPrice: 42900,
                    price: 29000,
                    src: trousersOysterWhiteSrc,
                    key: Math.random(),
                },
                {
                    name: 'linen suit blazer',
                    categ: 'blazers',
                    color: 'white',
                    price: 52900,
                    src: blazerWhiteSrc,
                    key: Math.random(),
                },
                {
                    name: 'wool blazer',
                    categ: 'blazers',
                    color: 'navy-blue',
                    price: 44900,
                    src: blazerNavyBlueSrc,
                    key: Math.random(),
                },
                {
                    name: 'wool trousers',
                    categ: 'blazers',
                    color: 'navy-blue',
                    price: 38900,
                    src: trousersNavyBlueSrc,
                    key: Math.random(),
                },
                {
                    name: 'textured suit blazer',
                    categ: 'blazers',
                    color: 'sky-blue',
                    price: 65900,
                    src: texturedSuitBlazerSkyBlueSrc,
                    key: Math.random(),
                },
                {
                    name: 'textured suit blazer',
                    categ: 'blazers',
                    color: 'blue',
                    price: 65900,
                    src: texturedSuitBlazerBlueSrc,
                    key: Math.random(),
                },
                {
                    name: 'textured suit blazer',
                    categ: 'blazers',
                    color: 'camel',
                    price: 65900,
                    src: texturedSuitBlazerCamelSrc,
                    key: Math.random(),
                },
            ]
        },
        't-shirts': {
            bigImgSrc: bigImgTShirts,
            products: [
                {
                    name: 'abstract print knit t-shirt',
                    categ: 't-shirts',
                    color: 'black',
                    oldPrice: 22900,
                    price: 19900,
                    src: abstractPrintKnitSrc,
                    key: Math.random(),
                },
                {
                    name: 'textured print t-shirt',
                    categ: 't-shirts',
                    color: 'camel',
                    oldPrice: 22900,
                    price: 16900,
                    src: texturedPrintCamelSrc,
                    key: Math.random(),
                },
                {
                    name: 'textured print t-shirt',
                    categ: 't-shirts',
                    color: 'white',
                    oldPrice: 22900,
                    price: 16900,
                    src: texturedPrintWhite1Src,
                    key: Math.random(),
                },
                {
                    name: 'textured print t-shirt',
                    categ: 't-shirts',
                    color: 'white',
                    oldPrice: 22900,
                    price: 19900,
                    src: texturedPrintWhite2Src,
                    key: Math.random(),
                },
                {
                    name: 'rib neck t-shirt',
                    categ: 't-shirts',
                    color: 'black',
                    price: 13900,
                    src: ribNeckBlackSrc,
                    key: Math.random(),
                },
                {
                    name: 'rib neck t-shirt',
                    categ: 't-shirts',
                    color: 'camel',
                    price: 13900,
                    src: ribNeckCamelSrc,
                    key: Math.random(),
                },
                {
                    name: 'rib neck t-shirt',
                    categ: 't-shirts',
                    color: 'mid-blue',
                    price: 13900,
                    src: ribNeckMidBlueSrc,
                    key: Math.random(),
                },
                {
                    name: 'rib neck t-shirt',
                    categ: 't-shirts',
                    color: 'russet',
                    price: 13900,
                    src: ribNeckRussetSrc,
                    key: Math.random(),
                },
                {
                    name: 'rib neck t-shirt',
                    categ: 't-shirts',
                    color: 'sky-blue',
                    price: 13900,
                    src: ribNeckSkyBlueSrc,
                    key: Math.random(),
                },
                {
                    name: 'rib neck t-shirt',
                    categ: 't-shirts',
                    color: 'white',
                    price: 13900,
                    src: ribNeckWhiteSrc,
                    key: Math.random(),
                },
                {
                    name: 'rib neck t-shirt',
                    categ: 't-shirts',
                    color: 'yellow',
                    price: 13900,
                    src: ribNeckYellowSrc,
                    key: Math.random(),
                },
                {
                    name: 'basic medium height t-shirt',
                    categ: 't-shirts',
                    color: 'black / white',
                    price: 13900,
                    src: basicMediumWeightSrc,
                    key: Math.random(),
                },
            ]
        },
        'trousers': {
            bigImgSrc: bigImgTrousers,
            products: [
                {
                    name: 'jogger waist trousers',
                    categ: 'trousers',
                    color: 'black',
                    price: 19900,
                    src: joggerBlackSrc,
                    key: Math.random(),
                },
                {
                    name: 'jogger waist trousers',
                    categ: 'trousers',
                    color: 'stone',
                    price: 19900,
                    src: joggerStoneSrc,
                    key: Math.random(),
                },
                {
                    name: 'jogger waist trousers',
                    categ: 'trousers',
                    color: 'blue',
                    price: 19900,
                    src: joggerBlueSrc,
                    key: Math.random(),
                },
                {
                    name: 'jogger waist trousers',
                    categ: 'trousers',
                    color: 'light-green',
                    price: 19900,
                    src: joggerLightGreenSrc,
                    key: Math.random(),
                },
                {
                    name: 'cargo jogging trousers',
                    categ: 'trousers',
                    color: 'black',
                    oldPrice: 29900,
                    price: 24900,
                    src: cargoJoggingBlackSrc,
                    key: Math.random(),
                },
                {
                    name: 'cargo jogging trousers',
                    categ: 'trousers',
                    color: 'khaki',
                    oldPrice: 29900,
                    price: 24900,
                    src: cargoJoggingKhakiSrc,
                    key: Math.random(),
                },
                {
                    name: 'cargo jogging trousers',
                    categ: 'trousers',
                    color: 'light-khaki',
                    oldPrice: 29900,
                    price: 24900,
                    src: cargoJoggingLightKhakiSrc,
                    key: Math.random(),
                },
                {
                    name: 'cargo jogging trousers',
                    categ: 'trousers',
                    color: 'oyster-white',
                    oldPrice: 29900,
                    price: 24900,
                    src: cargoJoggingOysterWhiteSrc,
                    key: Math.random(),
                },
                {
                    name: 'suit trousers',
                    categ: 'trousers',
                    color: 'black',
                    price: 34900,
                    src: suitTrousersBlack,
                    key: Math.random(),
                },
                {
                    name: 'suit trousers',
                    categ: 'trousers',
                    color: 'navy-blue',
                    price: 34900,
                    src: suitTrousersNavyBlue,
                    key: Math.random(),
                },
                {
                    name: 'suit trousers',
                    categ: 'trousers',
                    color: 'ecru',
                    price: 34900,
                    src: suitTrousersEcru,
                    key: Math.random(),
                },
                {
                    name: 'suit trousers',
                    categ: 'trousers',
                    color: 'camel',
                    price: 34900,
                    src: suitTrousersCamel,
                    key: Math.random(),
                },
            ]
        },
        'shirts': {
            bigImgSrc: bigImgShirts,
            products: [
                {
                    name: 'printed striped shirt',
                    categ: 'shirts',
                    color: 'blue / white',
                    oldPrice: 24900,
                    price: 19900,
                    src: printedStripedSrc,
                    key: Math.random(),
                },
                {
                    name: 'abstract print shirt',
                    categ: 'shirts',
                    color: 'pink / green',
                    oldPrice: 29900,
                    price: 24900,
                    src: abstractPrintSrc,
                    key: Math.random(),
                },
                {
                    name: 'photo print shirt',
                    categ: 'shirts',
                    color: 'blue',
                    price: 24900,
                    src: photoPrintSrc,
                    key: Math.random(),
                },
                {
                    name: 'print knit shirt',
                    categ: 'shirts',
                    color: 'red / green',
                    oldPrice: 24900,
                    price: 19900,
                    src: printKnitSrc,
                    key: Math.random(),
                },
            ]
        },
        'shoes': {
            bigImgSrc: bigImgShoes,
            products: [
                {
                    name: 'sporty split suede loafers',
                    categ: 'shoes',
                    color: 'khaki',
                    oldPrice: 24900,
                    price: 19900,
                    src: loaferKhakiSrc,
                    key: Math.random(),
                },
                {
                    name: 'sporty split suede loafers',
                    categ: 'shoes',
                    color: 'black',
                    oldPrice: 24900,
                    price: 19900,
                    src: loaferBlackSrc,
                    key: Math.random(),
                },
                {
                    name: 'sporty split suede loafers',
                    categ: 'shoes',
                    color: 'brown',
                    oldPrice: 24900,
                    price: 19900,
                    src: loaferBrownSrc,
                    key: Math.random(),
                },
                {
                    name: 'sporty split suede loafers',
                    categ: 'shoes',
                    color: 'coral',
                    oldPrice: 24900,
                    price: 19900,
                    src: loaferCoralSrc,
                    key: Math.random(),
                },
                {
                    name: 'monochrome slides',
                    categ: 'shoes',
                    color: 'black',
                    price: 22900,
                    src: monochromeSlidesBlackSrc,
                    key: Math.random(),
                },
                {
                    name: 'monochrome slides',
                    categ: 'shoes',
                    color: 'white',
                    price: 22900,
                    src: monochromeSlidesWhiteSrc,
                    key: Math.random(),
                },
            ]
        },
    }
}
