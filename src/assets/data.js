import fenPhoto from "../media/fen.jpg";
import CV from "../assets/CV.pdf";

export const NAVBAR_ITEM = [
    { id: 1, link: "#home", title: "Home" },
    { id: 2, link: "#skills", title: "Skills" },
    { id: 3, link: "#projects", title: "Projects" },
    { id: 4, link: "#about", title: "About" },
];

export const SKILLS = [
    {
        title: "Languages",
        names: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL"]
    },
    {
        title: "Frameworks / Libraries",
        names: ["Bootstrap", "Tailwind", "React", "Jquery", "Node.js", "Express.js", "Npm"]
    },
    {
        title: "Tools",
        names: ["VScode", "Git", "Github"]
    },
];

export const PROFILE = {
    photo: fenPhoto,
    name: "Fenila Sosa Philip",
    resume: CV,
    intro: "I'm a self-taught Front-end Developer based in Berlin with a passion for technology, learning, and solving real - world problems through code.",
    about: "",
    mystory: ""
}


