// import {ButtonComponent} from "../../components/button/ButtonComponent.js";

import {PerformanceCardComponent} from "../../components/product-card/PerformanceCardComponents.js";
import {PerformancePage} from "../../components/perfornamce/PerformancePage.js";
import {ajax} from "../../modules/ajax";
import {urls} from "../../modules/urls";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get page() {
        return document.getElementById('main-page')
    }

    getHTML() {
        return (
            `
            <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    // getData() {
    //     return [
    //         {
    //             id: 1,
    //             src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
    //             title: "Граф Монте_кристо",
    //             text: "Такой акции вы еще не видели 1"
    //         },
    //         {
    //             id: 2,
    //             src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
    //             title: "Акция",
    //             text: "Такой акции вы еще не видели 2"
    //         },
    //         {
    //             id: 3,
    //             src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
    //             title: "Акция",
    //             text: "Такой акции вы еще не видели 3"
    //         },
    //     ]
    // }

    clickCard(e) {
        const cardId = e.target.dataset.id

        const stockPage = new PerformancePage(this.parent, cardId)
        stockPage.render()
    }


    // render() {
    //     this.parent.innerHTML = ''
    //     const html = this.getHTML()
    //     this.parent.insertAdjacentHTML('beforeend', html)
    //
    //     const data = this.getData()
    //     data.forEach((item) => {
    //         // const stockCard = new PerformanceCardComponent(this.page)
    //         // stockCard.render(item)
    //         const stockCard = new PerformanceCardComponent(this.page)
    //         stockCard.render(item, this.clickCard.bind(this))
    //     })
    // }
    async getData() {
        return ajax.get(urls.stocks())
    }

    async render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const data = await this.getData()
        data.data.forEach((item) => {
            const stockCard = new PerformanceCardComponent(this.page)
            stockCard.render(item, this.clickCard.bind(this))
        })
    }
        // render() {
        //     this.parent.innerHTML = ''
        //     const html = this.getHTML()
        //     this.parent.insertAdjacentHTML('beforeend', html)
        //
        //     const data = this.getData()
        //     data.forEach((item) => {
        //         const stockCard = new PerformanceCardComponent(this.page)
        //         stockCard.render(item)
        //     })
        // }

}
