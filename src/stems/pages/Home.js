import { IconLinkStem, GitHubLinkStem } from '../components/IconLink.js';
import { IconTextStem } from '../components/IconText.js'

export class HomeStem extends Stem {
    prepare() {
        return Botany.div({
            classes: ["home-section-container"],
            children: [
                Botany.div({classes: ["home-section"], children: [
                    Botany.p({  innerHTML: "Morgan Gillette, " + this.getAgeText() }),
                    Botany.h1({ 
                        innerHTML: "Software Engineering Student", 
                        classes: ["title"]
                     }),
                    Botany.p({  
                        innerHTML: "I am a Software Engineering student at ENSICAEN (Caen, France), specializing in Cybersecurity and Artificial Intelligence, and graduating in 2026. I am currently doing an internship at SINTEF Digital in Oslo, Norway.",
                        classes: ["description"]
                    }),
                    Botany.div({classes: ["links"], children: [
                        (new GitHubLinkStem({
                            title: "GitHub",
                            link: "https://github.com/morgangte"
                        })).prepare(),
                        (new IconLinkStem({
                            title: "LinkedIn",
                            link: "https://www.linkedin.com/in/morgan-gillette1/",
                            icon: "resource/icons/linkedin.svg"
                        })).prepare(),
                        (new IconTextStem({
                            title: "morgan.gte[at]gmail.com",
                            icon: "resource/icons/email.svg"
                        })).prepare()
                    ]})
                ]})
            ]
        })
    }

    getAgeText() {
        try {
            let now = new Date();
            let birth = new Date(2003, 1, 2);
            return now.getFullYear() - birth.getFullYear() + " years old";
        } catch (error) {
            return "born on January 2, 2003";
        }
    }
}
