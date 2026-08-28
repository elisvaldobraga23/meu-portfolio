import foto from "../assets/img/foto-perfil.png"
import "../styles/Inicio.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function Inicio(){

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);
    
    return(
        <>
            <section id="inicio" className="inicio">
                <div className="column">
                    <h1 data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500">Desenvolvedor <span>Front-End</span></h1>
                    <p  data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="1000">Criando experiências digitais sofisticadas, interfaces elegantes e produtos que marcam. Da ideia ao código — com precisão e estilo.</p>
                    <div className="linha">
                        <a 
                        data-aos="zoom-in"
                        href="#projetos" className="btn-inicio link-btn-projetos">Ver Projetos</a>
                        <a 
                        data-aos="zoom-in"
                        href="#contato" className="btn-inicio link-btn-contato">Contatos</a>
                    </div>
                </div>
                <img
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className="foto-perfil" src={foto} alt="Foto de Perfil" />
            </section>
        </>
    )
}