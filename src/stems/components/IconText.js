export class IconTextStem extends Stem {
    prepare() {
        return Botany.p({
            classes: ["icon-element"],
            children: [
                Botany.img({
                    src: this.attributes.icon,
                    width: "1.25em",
                    height: "1.25em"
                }),
                Botany.p({innerHTML: this.attributes.title})
            ]
        });
    }
}
