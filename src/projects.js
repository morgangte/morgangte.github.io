import { HeaderStem } from './stems/Header.js';
import { ProjectsStem } from './stems/pages/Projects.js';

window.addEventListener('load', main);

function main() {
    const page = new Plant(document.querySelector("#root"));
    
    const header = new HeaderStem(page);
    page.grow(header);

    fetch(
        "resource/projects.json"
    ).then(
        (res) => res.json()
    ).then((data) => {
        const content = new ProjectsStem(page, [
            ["projects", data["projects"]]
        ]);
        page.grow(content);
    });
}
