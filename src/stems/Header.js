export class HeaderStem extends Stem {
    prepare() {
        return Botany.div({
            classes: ["header"],
            children: [ 
                Botany.div({
                    classes: ["header-links"],
                    children: [
                        Botany.a({
                            innerHTML: "Home",
                            href: "index.html",
                            target: "_self"
                        }),
                        Botany.a({
                            innerHTML: "Projects",
                            href: "projects.html",
                            target: "_self"
                        }),
                        Botany.a({
                            innerHTML: "Education & Experience",
                            href: "education.html",
                            target: "_self"
                        })
                    ]
                })
            ]
        })
    }
}
