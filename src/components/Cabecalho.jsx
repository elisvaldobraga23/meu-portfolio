import { Link } from 'react-router-dom';
import { LinkBotao } from './LinkBotao';
import { useState } from 'react';
import "../styles/Cabecalho.css"


export function Cabecalho(){
    
    const [aberto, setAberto] = useState(false)

    function toggleMenu(){
        setAberto(prev => !prev);
    }

    return (
        <header className="cabecalho">
            <h1>DEV.</h1>

            <button className='hamburguer' onClick={toggleMenu}>
                <span className="material-symbols-outlined">
menu
</span>
            </button>


            <nav className={aberto ? "nav-cabecalho ativo" : "nav-cabecalho"}>
               <Link to="/" className="link-nav" onClick={toggleMenu}>Inicio</Link>
               <Link to="/sobre" className="link-nav" onClick={toggleMenu}>Sobre</Link>
               <Link to="/projetos" className="link-nav" onClick={toggleMenu}>Projetos</Link>
            </nav>
            <LinkBotao to="/contato" className="link-btn-cabecalho">Fale Comigo</LinkBotao>
        </header>
    )
}