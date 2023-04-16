import {MainPage} from "../../pages/main/MainPage.js";
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";
import {BackButtonComponent} from "../button/BackButtonComponent.js";
import {PerformanceComponent} from "./PerformanceComponent.js";

export class PerformancePage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }
    // getData() {
    //     return {
    //         id: 1,
    //         src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
    //         title: "Акция",
    //         text: "Такой акции вы еще не видели"
    //     }
    // }

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

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }

    // render() {
    //     this.parent.innerHTML = ''
    //     const html = this.getHTML()
    //     this.parent.insertAdjacentHTML('beforeend', html)
    //
    //
    //     const data = this.getData()
    //     const stock = new PerformanceComponent(this.page)
    //     stock.render(data)
    //
    //     const backButton = new BackButtonComponent(this.page)
    //     backButton.render(this.clickBack.bind(this))
    // }

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
        const stock = new PerformanceComponent(this.page)
        stock.render(data.data)
    }

}