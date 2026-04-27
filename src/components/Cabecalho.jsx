import { LinkBotao } from './LinkBotao';
import { useState, useEffect } from 'react';
import "../styles/Cabecalho.css"


export function Cabecalho(){
    
    const [aberto, setAberto] = useState(false)

    function toggleMenu(){
        setAberto(prev => !prev);
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 768) {
                setAberto(false);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
}, []);

    return (
        <header>

            <div className='cabecalho'>
                <h1>Elisvaldo <span>Braga</span></h1>
                <button className='hamburguer' onClick={toggleMenu}>
                    <span className="material-symbols-outlined">
                menu
                </span>
                </button>
                <nav className={aberto ? "nav-cabecalho ativo" : "nav-cabecalho"}>
                    <a href='#inicio' className="link-nav" onClick={() => setAberto(false)}>Inicio</a>
                    <a href='#sobre' className="link-nav" onClick={() => setAberto(false)}>Sobre</a>
                    <a href='#projetos' className="link-nav" onClick={() => setAberto(false)}>Projetos</a>
                </nav>
                <a href='#contato' className="link-btn-cabecalho">Fale Comigo</a>
            </div>

        </header>
    )
}