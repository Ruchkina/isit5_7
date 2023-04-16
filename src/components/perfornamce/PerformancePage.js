import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";
import {PerformanceComponent} from "./PerformanceComponent.js";
import {BackButtonComponent} from "../button/BackButtonComponent.js";
import {MainPage} from "../../pages/main/MainPage.js";

export class PerformancePage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    get page() {
        return document.getElementById('stock-page')
    }

    getHTML() {
        return (
            `
                <div id="stock-page">
                </div>
            `
        )
    }

    async clickBack() {
        const mainPage = new MainPage(this.parent)
        await mainPage.render()
    }



    async getData() {
        return ajax.get(urls.stock(this.id))
    }

    async render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.page)
        backButton.render(this.clickBack.bind(this))

        const data = this.getData()
        console.log('qqq')
        console.log((await data).data)
        const stock = new PerformanceComponent(this.page)
        stock.render((await data).data)
    }

}

