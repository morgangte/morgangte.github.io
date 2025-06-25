export class IconLinkStem extends Stem {
    prepare() {
        return Botany.div({
            classes: ["icon-element"],
            children: [
                Botany.img({
                    src: this.attributes.get("icon"),
                    width: "1.25em",
                    height: "1.25em"
                }),
                Botany.a({
                    href: this.attributes.get("link"),
                    innerHTML: this.attributes.get("title")
                })
            ]
        });
    }
}

export class GitHubLinkStem extends IconLinkStem {
    constructor(parent, attributes=[]) {
        super(parent, attributes);
        this.attributes.set("icon", "resource/icons/github.svg");
    }
}
