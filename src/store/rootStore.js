import { makeAutoObservable } from "mobx";

import FooterStore from "./footerStore";
import HelpStore from "./helpStore";
import CatalogStore from "./catalogStore";
import MenuStore from "./menuStore";
import SignStore from "./signStore";

export default class RootStore {
    constructor() {
        makeAutoObservable(this)
        this.footerStore = new FooterStore(this)
        this.helpStore = new HelpStore(this)
        this.catalogStore = new CatalogStore(this)
        this.menuStore = new MenuStore(this)
        this.signStore = new SignStore(this)
    }
}