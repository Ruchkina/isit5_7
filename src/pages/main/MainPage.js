// import {ButtonComponent} from "../../components/button/ButtonComponent.js";

// import {ajax} from "../../modules/ajax";
// import {urls} from "../../modules/urls";

import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";
import {PerformanceCardComponent} from "../../components/product-card/PerformanceCardComponents.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    async getData() {
        return ajax.get(urls.stocks())
    }

    async clickCard(e) {
        const cardId = e.target.dataset.id

        const performancePage = new PerformancePage(this.parent, cardId)
        await performancePage.render()
    }


    getHTML() {
        return (
            `
            <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    get page() {
        return document.getElementById('main-page')
    }

    // async getData() {
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

    async render() {
        this.parent.innerHTML = ''
        console.log(`2`);
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.parent.insertAdjacentHTML('beforeend', '<button type="button" class="btn btn-primary">Hello 3!</button>')
        console.log(`22`);
        const data = await this.getData()
        console.log(data);
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
    //         // const stockCard = new PerformanceCardComponent(this.page)
    //         // stockCard.render(item)
    //         const stockCard = new PerformanceCardComponent(this.page)
    //         stockCard.render(item, this.clickCard.bind(this))
    //     })
    // }




}
