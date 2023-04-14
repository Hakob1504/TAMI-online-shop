import { makeAutoObservable } from "mobx"

import bagSrc from '../img/help/bag.png'
import returnSrc from '../img/help/return.png'
import paymentSrc from '../img/help/wallet.png'
import hangerSrc from '../img/help/hanger.png'
import buildingSrc from '../img/help/building.png'
import recycleSrc from '../img/help/recycle.png'

import { Link } from "react-router-dom"

export default class HelpStore {

    helpCategories = helpCategoriesStub()

    findCategory = (path) => this.helpCategories.find(categ => path == categ.path)

    renderHelpCategories = this.helpCategories.map(category => {
        return <Link to={`/help/${category.path}`} className="help_category_div" key={category.title}>
            <img src={category.src} alt="" />
            <h3>{category.title.toUpperCase()}</h3>
        </Link>
    })

    constructor(RootStore) {
        this.RootStore = RootStore
        makeAutoObservable(this)
    }
}

function helpCategoriesStub() {
    return [
        {
            title: 'shop at zara.com',
            info: "To make a purchase on Zara.com you need to sign up as a REGISTERED user. Registering is very easy. We will only ask you for the information we need to speed up the purchase process. You will find format examples in the registration form to help you when you enter details such as your telephone number. Your order information and registration details will always be available to you through the link your account.",
            src: bagSrc,
            path: 'shop-at-zara.com'
        },
        {
            title: 'exchanges and returns',
            info: "The exchange option is not available for online purchases. Nevertheless, you can always return your order for free within the established return period and place another order. You can find further information on the Exchange and Refunds Policy and the right to waiver in our Purchase Conditions.",
            src: returnSrc,
            path: 'exchanges-and-returns'
        },
        {
            title: 'payment',
            info: "Payment on delivery Please note cash payment is valid on purchases under 300 000 AMD. Orders over 300 000 AMD can be paid on delivery only by card.",
            src: paymentSrc,
            path: 'payment'
        },
        {
            title: 'product',
            info: "On Zara.com you can find new products every week, just like in our stores. If the item you want has sold out but it has the symbol  comming soon, you can register your email address and we will let you know as soon as it becomes available, within 15 days of your registration.This process does not reserve the item.You may also view the stock on our website using our “Check in-store availability” option.",
            src: hangerSrc,
            path: 'product'
        },
        {
            title: 'shops and company',
            info: "We have provided a Store locator, where you can consult our stores' addresses, telephone numbers and sections (Woman, Man, Kids). If you have any queries or suggestions, please contact us through any of the Customer Service channels, and we will be pleased to help you.",
            src: buildingSrc,
            path: 'shops-and-company'
        },
        {
            title: 'clothes collection programme',
            info: "As part of our social and environmental commitment, we want to help you extend the useful life of your garments. To this end, we have developed a used clothing collection program. In collaboration with local non-profit organisations, we recover garments that are no longer used and give them a second life. We currently offer this service in our stores, and we are working to bring it to our online store customers through home collection services or nearby drop points. For more information, visit our Collection programme section.If you have any queries or suggestions, please contact us through any of the Customer Service channels. We will be delighted to help you.",
            src: recycleSrc,
            path: 'clothes-collection-programme'
        }
    ]
}