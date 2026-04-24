import foto from "../assets/img/foto-perfil.png"
import "../styles/Inicio.css"
import { LinkBotao } from "./LinkBotao"

export function Inicio(){
    return(
        <>
            <section className="inicio">
                <div className="column">
                    <h1 >Desenvolvedor <span>Front-End</span></h1>
                    <p>Criando experiências digitais sofisticadas, interfaces elegantes e produtos que marcam. Da ideia ao código — com precisão e estilo.</p>
                    <div className="linha">
                        <LinkBotao className="link-btn-projetos">Ver Projetos</LinkBotao>
                        <LinkBotao className="link-btn-contato">Contatos</LinkBotao>
                    </div>
                </div>
                <img className="foto-perfil" src={foto} alt="" />
            </section>
        </>
    )
}