import foto from "../assets/img/foto-perfil.png"
import "../styles/Inicio.css"

export function Inicio(){
    return(
        <>
            <section id="inicio" className="inicio">
                <div className="column">
                    <h1 >Desenvolvedor <span>Front-End</span></h1>
                    <p>Criando experiências digitais sofisticadas, interfaces elegantes e produtos que marcam. Da ideia ao código — com precisão e estilo.</p>
                    <div className="linha">
                        <a href="#projetos" className="btn-inicio link-btn-projetos">Ver Projetos</a>
                        <a href="#contato" className="btn-inicio link-btn-contato">Contatos</a>
                    </div>
                </div>
                <img className="foto-perfil" src={foto} alt="Foto de Perfil" />
            </section>
        </>
    )
}