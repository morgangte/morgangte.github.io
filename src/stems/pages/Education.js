import { BackgroundStem } from "./Education/Background.js";

export class EducationStem extends Stem {
    prepare() {
        return Botany.div({classes: ["education-sections-container"], children: [
            Botany.div({children: [
                Botany.h1({
                    classes: ["section-title"],
                    innerHTML: "Internships"
                }),
                (new BackgroundStem(this, [
                    ["title", "Student Internship"],
                    ["date", "April - Aug. 2025"],
                    ["org", "SINTEF Digital"],
                    ["location", "Oslo, Norway"],
                    ["description", "Develoment of an LLM-based Assistant for Cybersecurity Risk Assessment."]
                ])).prepare(),
                Botany.h1({
                    classes: ["section-title"],
                    innerHTML: "Studies"
                }),
                (new BackgroundStem(this, [
                    ["title", "Master's degree in Engineering, Computer Science major"],
                    ["date", "2023 - 2026"],
                    ["org", "ENSICAEN"],
                    ["location", "Caen, France"],
                    ["description", "Three years French Engineering school, Computer Science major, specializing in Cybersecurity and Artificial Intelligence."]
                ])).prepare(),
                (new BackgroundStem(this, [
                    ["title", "Pre-engineering school (CPGE MPSI-MP)"],
                    ["date", "2021 - 2023"],
                    ["org", "Lycée Malherbe"],
                    ["location", "Caen, France"],
                    ["description", "Two years intensive program of maths, physics and chemistry."]
                ])).prepare(),
            ]})
        ]});
    }
}
