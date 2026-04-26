import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

export function dadosTecnologias(){

    return {

    html:{
        texto: "HTML5",
        icon: FaHtml5,
        color: "rgb(229, 83, 45)",
        background: "#f16b3224"
    },

    css:{
        texto: "CSS3",
        icon: FaCss3Alt,
        color: "#0881B9",
        background: "#089FE725"

    },

    js:{
        texto: "JavaScript",
        icon: DiJavascript1,
        color: "#FA9F2F",
        background: "#FFCC4425"
    },

    react:{
        texto: "React",
        icon: FaReact,
        color: "#1082A7",
        background: "#1082A725"

    },

    py:{
        texto: "Python",
        icon: FaPython,
        color: "#3D76A7",
        background: "#FFD24615"
    },
    
    git:{
        texto: "Git",
        icon: FaGitAlt,
        color: "#DF523C",
        background: "#47360840"
    },

    github:{
        texto: "Github",
        icon: FaGithub,
        color: "#B90808",
        background: "#B9080830"
    }
}
}