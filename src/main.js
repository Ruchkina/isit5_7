

// const root = document.getElementById('root');
//
// root.insertAdjacentHTML('beforeend', '<button type="button" class="btn btn-primary">Hello world 2!</button>')

// import {MainPage} from "./pages/main/MainPage.js";
//
// export class MainPage {
//     constructor(parent) {
//         this.parent = parent;
//     }
//     render() {
//         this.parent.insertAdjacentHTML('beforeend', '<button type="button" class="btn btn-primary">Hello world 3!</button>')
//     }
// }
import {MainPage} from "./pages/main/MainPage.js";

const root = document.getElementById('root');

const mainPage = new MainPage(root);

await mainPage.render();

