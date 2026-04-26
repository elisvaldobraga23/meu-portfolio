import "../styles/Sobre.css"
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

const linguagens = {
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
    },

}

export function Sobre() {
    return (
        <section id="sobre">
            <h1 className="titulo titulo-sobre">Sobre Mim</h1>
            <h2>Código com <span>Propósito</span></h2>
            <p>Cada pixel e cada linha de código tem um motivo de existir</p>

            <div className="linha">
                <div className="column">
                    <h3>Olá, Sou Elisvaldo Braga</h3>
                    <p className="p-sobre">
                        Desenvolvedor Front-End apaixonado por criar interfaces que combinam beleza com funcionalidade. Trabalho com as tecnologias mais modernas do mercado para transformar ideias em produtos digitais de alto impacto.</p>

                <p className="p-sobre">Com foco em performance, acessibilidade e design centrado no usuário, entrego experiências que encantam tanto quem usa quanto quem assina o código.</p>
                
                <p className="p-sobre">Quando não estou codando, estou explorando tendências de UI/UX, contribuindo para projetos open source, ou tomando um café enquanto planejo o próximo desafio.
                    </p>
                </div>

                
                       
                <div className="cards">
                   
                        {Object.values(linguagens).map((linguagem, index) => {
                            const Icon = linguagem.icon;
                            return(
                                <div className="card" key={index}>
                                    <Icon 
                                        className="icons" 
                                        style={{
                                            color: linguagem.color, 
                                            background: linguagem.background
                                            }} 
                                    />
                                    <h1 
                                        className="titulo-card"
                                        style={{color:linguagem.color}}
                                    >{linguagem.texto}</h1>
                                </div>

                            )
                        })}
                    
                </div>
            </div>
            
        </section>
    )
}

