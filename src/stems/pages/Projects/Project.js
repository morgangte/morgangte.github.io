export class ProjectStem extends Stem {
    prepare() {
        const project = this.attributes.get("project");

        let details = [
            Botany.h1({
                classes: ["project-title"],
                innerHTML: project["name"]
            }),
            Botany.p({
                classes: ["project-description"],
                innerHTML: project["description"]
            })
        ];
        if (project["team-size"] > 1) {
            details.push(Botany.p({innerHTML: "Team of " + project["team-size"] + " people."}));
        }
        details.push(Botany.p({innerHTML: project["language"].join(", ")}));
        for (let i = 0; i < project["links"].length; i++) {
            details.push(Botany.div({children: [Botany.a({
                innerHTML: project["links"][i]["name"],
                href: project["links"][i]["link"]
            })]}))
        }

        return Botany.div({
            classes: ["project-element"],
            children: [
                Botany.div({
                    classes: ["project-side-column"],
                    children: [
                        Botany.p({innerHTML: project["date"]}),
                        Botany.p({innerHTML: project["type"]})
                    ]
                }),
                Botany.div({ 
                    classes: ["project-content-column"],
                    children: details 
                })
            ]
        });
    }
}
