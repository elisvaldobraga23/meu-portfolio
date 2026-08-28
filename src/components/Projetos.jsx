import { dataProjetos } from "../data/projetos"
import "../styles/Projetos.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function Projetos(){

    useEffect(() => {
        AOS.init({
            once: false
        });
    }, []);
    
    return (
        <section id="projetos">
            <h1 data-aos="fade-down" className="titulo titulo-portfolio">Portfólio</h1>
            <h2 data-aos="fade-down">Meus <span>Projetos</span></h2>
            <p data-aos="fade-down">Linhas de código que constroem experiências</p>

            <div className="portfolio">

                {Object.values(dataProjetos()).map((projeto, index) => 
                    <div 
                    data-aos="fade-up"
                    data-aos-duration="2500"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-out"
                        className="projeto" key={index}>
                        <img src={projeto.img} alt="imagem do projeto" />
                        <h1 className="titulo-projeto">{projeto.Titulo}</h1>
                        <p className="p-projeto">{projeto.descricao}</p>
                        <div className="tags">
                            {projeto.tags.map(tag =>
                                <div className="tag">
                                    {tag}
                                </div>
                            )}
                        </div>

                        <div className="links">
                            <a className="link link-ver-projeto" href={projeto.link} target="_blank">Ver Projeto</a>
                            <a className="link link-github" href={projeto.linkGithub} target="_blank">GitHub</a>
                        </div>
                    </div>
                )}

            </div>
        </section>
    )
}