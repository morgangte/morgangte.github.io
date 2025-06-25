export class BackgroundStem extends Stem {
    prepare() {
        return Botany.div({
            classes: ["background-element"],
            children: [
                Botany.div({
                    classes: ["background-side-column"],
                    children: [
                        Botany.p({innerHTML: this.attributes.get("date")}),
                        Botany.p({innerHTML: this.attributes.get("org")}),
                        Botany.p({innerHTML: this.attributes.get("location")}),
                    ]
                }),
                Botany.div({ 
                    classes: ["background-content-column"],
                    children: [
                        Botany.p({
                            classes: ["title"],
                            innerHTML: this.attributes.get("title")
                        }),
                        Botany.p({innerHTML: this.attributes.get("description")}),
                    ]
                })
            ]
        });
    }
}