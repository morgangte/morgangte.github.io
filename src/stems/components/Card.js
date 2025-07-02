export class CardStem extends Stem {
    prepare() {
        let sections = [];
        for (const section of this.attributes.sections) {
            sections.push((new CardSectionStem({
                title: section.title,
                paragraphs: section.paragraphs,
                links: section.links,
                sidelines: section.sidelines
            }).prepare()));
        }

        return Botany.div({
            children: sections
        });
    }
}

class CardSectionStem extends Stem {
    prepare() {
        let side = [];
        for (const line of this.attributes.sidelines) {
            side.push(Botany.p({
                innerHTML: line
            }));
        }

        let details = [
            Botany.h1({
                innerHTML: this.attributes.title
            })
        ];
        for (const paragraph of this.attributes.paragraphs) {
            if (paragraph === "") continue;
            details.push(Botany.p({
                innerHTML: paragraph
            }));
        }
        if (this.attributes.links !== undefined) {
            for (const link of this.attributes.links) {
                details.push(Botany.div({children: [Botany.a({
                    innerHTML: link.name,
                    href: link.link
                })]}))
            }            
        }

        return Botany.div({
            classes: ["card-section"],
            children: [
                Botany.div({
                    classes: ["card-section-side"],
                    children: side
                }),
                Botany.div({
                    classes: ["card-section-main"],
                    children: details
                })
            ]
        });
    }
}
