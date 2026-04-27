import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export function Contato(){

    return (
        <section id="contato">
            <h1 className="titulo titulo-contado">Contato</h1>
            <h2>Vamos <span>Conversar</span></h2>
            <p>Tem um projeto em mente?</p>
            <p>Estou pronto para transformá-lo em realidade.</p>

            <div className="fale-comigo">
                <h1>Fale comigo</h1>
                <p>Seja para um projeto freelance, uma oportunidade de trabalho, ou apenas para trocar ideias sobre tecnologia - minha caixa de entrada está aberta.</p>
                
                <div className="contatos">
                    <MdAlternateEmail />
                    <div className="contatos-column">
                        <p className="rede">E-mail</p>
                        <p className="nome-rede">elisvaldo123braga03@gmail.com</p>
                    </div>
                </div>
                <div className="contatos">
                    <FaWhatsapp />
                    <div className="contatos-column">
                        <p className="rede">WhatsApp</p>
                        <p className="nome-rede">+55 (88) 9 9629-2920</p>
                    </div>
                </div>
                <div className="contatos">
                    <FaLocationDot />
                    <div className="contatos-column">
                        <p className="rede">Localização</p>
                        <p className="nome-rede">Aracati, CE - Brasil</p>
                    </div>
                </div>
            </div>
        </section>
    )
}