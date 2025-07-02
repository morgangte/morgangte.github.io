export class IconLinkStem extends Stem {
    prepare() {
        return Botany.div({
            classes: ["icon-element"],
            children: [
                Botany.img({
                    src: this.attributes.icon,
                    width: "1.25em",
                    height: "1.25em"
                }),
                Botany.a({
                    href: this.attributes.link,
                    innerHTML: this.attributes.title
                })
            ]
        });
    }
}

export class GitHubLinkStem extends IconLinkStem {
    constructor(parent, attributes=[]) {
        super(parent, attributes);
        this.attributes.icon = "resource/icons/github.svg";
    }
}
