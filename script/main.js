window.addEventListener('load', main);

function main() {
    fetch("../resource/projects.json")
        .then((res) => res.json())
        .then((data) => {
            const projects = data["projects"];
            insertProjects(projects);
        });
}

function insertProjects(projects) {
    let projectColumns = document.querySelectorAll(".projects-column");

    for (let i = 0; i < projects.length; i++) {
        insertProject(projects[i], projectColumns[i % projectColumns.length]);
    }
}

function insertProject(project, column) {
    let article = document.createElement("article");
    article.classList.add("project");

    article.appendChild(projectElement(project["name"], "p", "project-name"));
    article.appendChild(projectElement(project["type"] + " - " + project["date"], "p", "project-type"));
    article.appendChild(projectElement(project["description"], "p", "project-description"));
    if (project["team-size"] > 1) {
        article.appendChild(projectElement("Team of " + project["team-size"] + " people.", "p", "project-team-size"));
    }
    article.appendChild(projectElement(project["language"].join(", "), "p", "project-language"));

    let links = project["links"];
    for (let i = 0; i < links.length; i++) {
        article.appendChild(projectLink(links[i]));
    }

    column.appendChild(article);
}

function projectElement(text, element, css) {
    let el = document.createElement(element);
    el.classList.add(css);
    el.innerText = text;

    return el;
}

function projectLink(link) {
    let p = document.createElement("p");
    p.classList.add("project-link");

    let el = document.createElement("a");
    el.setAttribute("href", link["link"]);
    el.setAttribute("target", "_blank");
    el.innerText = link["name"];

    p.appendChild(el);
    return p;
}
