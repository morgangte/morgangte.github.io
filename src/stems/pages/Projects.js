import { CardStem } from "../components/Card.js";

export class ProjectsStem extends Stem {
    prepare() {
        let cards = [];
        for (const project of this.attributes.projects) {
            cards.push((new CardStem({
                sections: [{
                    title: project.name,
                    paragraphs: [
                        project.description,
                        project["team-size"] > 1 ? "Team of " + project["team-size"] + "." : "",
                        project.language.join(", "),
                    ],
                    links: project.links,
                    sidelines: [project.date, project.type]
                }]
            }).prepare()));
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
                        children: cards
                    })
                ]})
            ]
        });
    }
}
