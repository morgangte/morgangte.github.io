import { HeaderStem } from './stems/Header.js';
import { EducationStem } from './stems/pages/Education.js';

window.addEventListener('load', main);

function main() {
    const page = new Plant(document.querySelector("#root"));

    const header = new HeaderStem();
    page.grow(header);

    const content = new EducationStem();
    page.grow(content);
}
