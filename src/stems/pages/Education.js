import { CardStem } from "../components/Card.js";

export class EducationStem extends Stem {
    prepare() {
        return Botany.div({
            classes: ["education-sections-container"],
            children: [
                Botany.div({children: [
                    Botany.h1({classes: ["section-title"], innerHTML: "Internships"}),
                    (new CardStem({
                        sections: [{
                            title: "Student Internship",
                            paragraphs: ["Developed an LLM-based Assistant for Cybersecurity Risk Assessment."],
                            sidelines: ["April - Aug. 2025", "SINTEF Digital", "Oslo, Norway"]
                        }]
                    }).prepare()),
                    Botany.h1({classes: ["section-title"], innerHTML: "Studies"}),
                    (new CardStem({
                        sections: [{
                            title: "Master's degree in Engineering, Computer Science major",
                            paragraphs: ["Three years French Engineering school, Computer Science major, specializing in Cybersecurity and Artificial Intelligence."],
                            sidelines: ["2023 - 2026", "ENSICAEN", "Caen, France"]
                        }]
                    }).prepare()),
                    (new CardStem({
                        sections: [{
                            title: "Pre-engineering school (CPGE MPSI-MP)",
                            paragraphs: ["Two years intensive program of maths, physics and chemistry."],
                            sidelines: ["2021 - 2023", "Lycée Malherbe", "Caen, France"]
                        }]
                    }).prepare()),
                ]})
            ]
        });
    }
}
