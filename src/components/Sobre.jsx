import "../styles/Sobre.css"
import { dadosTecnologias } from "../data/linguagens.js"; 

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
                   
                        {Object.values(dadosTecnologias()).map((tecnologia, index) => {
                            const Icon = tecnologia.icon;
                            return(
                                <div className="card" key={index}>
                                    <Icon 
                                        className="icons" 
                                        style={{
                                            color: tecnologia.color, 
                                            background: tecnologia.background
                                            }} 
                                    />
                                    <h1 
                                        className="titulo-card"
                                        style={{color:tecnologia.color}}
                                    >{tecnologia.texto}</h1>
                                </div>

                            )
                        })}
                    
                </div>
            </div>
            
        </section>
    )
}

