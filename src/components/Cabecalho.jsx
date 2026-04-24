import { Link } from 'react-router-dom';
import { LinkBotao } from './LinkBotao';
import "../styles/Cabecalho.css"


export function Cabecalho(){
    return (
        <header className="cabecalho">
            <h1>DEV.</h1>
            <nav className="nav-cabecalho">
               <Link to="/" className="link-nav">Inicio</Link>
               <Link to="/sobre" className="link-nav">Sobre</Link>
               <Link to="/projetos" className="link-nav">Projetos</Link>
            </nav>
            <LinkBotao to="/contato" className="link-btn-cabecalho">Fale Comigo</LinkBotao>
        </header>
    )
}