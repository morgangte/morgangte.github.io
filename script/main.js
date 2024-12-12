window.addEventListener('load', main);

function main() {
    updateAgeSpan();
    fetch("resource/projects.json")
        .then((res) => res.json())
        .then((data) => {
            const projects = data["projects"];
            insertProjects(projects);
        });
}

function updateAgeSpan() {
    try {
        let now = new Date();
        let birth = new Date(2003, 1, 2);
        let span = document.querySelector("#age-span");
        span.innerText = (now.getFullYear() - birth.getFullYear()) + " years old";
    } catch (error) {
        console.error("Could not update age");
    }
}

function insertProjects(projects) {
    let section = document.querySelector("#projects-section");
    for (let i = 0; i < projects.length; i++) {
        insertProject(projects[i], section);
    }
}

function insertProject(project, section) {
    let item = document.createElement("div");
    item.classList.add("content-item");

    let infos = createDivElement("dates-and-location-column");
    infos.appendChild(createCustomElement("p", project["date"]));
    infos.appendChild(createCustomElement("p", project["type"]));
    item.appendChild(infos);

    let content = createDivElement("content-column");
    content.appendChild(createCustomElement("h3", project["name"]));
    content.appendChild(createCustomElement("p", project["description"]));
    if (project["team-size"] > 1) {
        content.appendChild(createCustomElement("p", "Team of " + project["team-size"] + " people."));
    }
    content.appendChild(createCustomElement("p", project["language"].join(", ")));
    let links = project["links"];
    for (let i = 0; i < links.length; i++) {
        content.appendChild(projectLink(links[i]));
    }
    item.appendChild(content);

    section.appendChild(item);
}

function createDivElement(css) {
    let div = document.createElement("div");
    div.classList.add(css);
    return div;
}

function createCustomElement(element, content) {
    let el = document.createElement(element);
    el.innerText = content;
    return el;
}

function projectLink(link) {
    let p = document.createElement("p");

    let el = document.createElement("a");
    el.setAttribute("href", link["link"]);
    el.setAttribute("target", "_blank");
    el.innerText = link["name"];

    p.appendChild(el);
    return p;
}
