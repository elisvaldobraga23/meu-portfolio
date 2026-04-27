import { dataProjetos } from "../data/projetos"
import "../styles/Projetos.css"

export function Projetos(){

    return (
        <section id="projetos">
            <h1 className="titulo titulo-portfolio">Portfólio</h1>
            <h2>Meus <span>Projetos</span></h2>
            <p>Linhas de código que constroem experiências</p>

            <div className="portfolio">

                {Object.values(dataProjetos()).map((projeto, index) => 
                    <div className="projeto" key={index}>
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