import { HeaderStem } from './stems/Header.js';
import { HomeStem } from './stems/pages/Home.js';

window.addEventListener('load', main);

function main() {
    const page = new Plant(document.querySelector("#root"));

    const header = new HeaderStem(page);
    page.grow(header);

    const content = new HomeStem(page);
    page.grow(content);
}
