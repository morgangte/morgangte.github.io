import { ProjectStem } from "./Projects/Project.js";

export class ProjectsStem extends Stem {
    prepare() {
        let list = [];
        for (const project of this.attributes.get("projects")) {
            list.push((new ProjectStem(this, [
                ["project", project]
            ])).prepare());
        }

        return Botany.div({
            classes: ["projects-list-container"],
            children: [
                Botany.div({children: [
                    Botany.h1({
                        classes: ["section-title"],
                        innerHTML: "Academic & Personal Projects"
                    }),
                    Botany.div({
                        classes: ["projects-list"],
                        children: list
                    })
                ]})
            ]
        });
   }
}
