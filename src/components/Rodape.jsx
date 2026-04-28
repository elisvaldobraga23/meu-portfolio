import "../styles/Rodape.css"

export function Rodape(){
    return (
        <footer>
            <div className="rodape">
                <p className="copy">&copy;2026 Elisvaldo Braga - Todos os direitos reservados.</p>
                <div className="menu-footer">
                    <a href='#inicio' className="link-nav-footer" >Inicio</a>
                    <a href='#sobre' className="link-nav-footer">Sobre</a>
                    <a href='#projetos' className="link-nav-footer" >Projetos</a>
                    <a href='#contato' className="link-nav-footer" >Contatos</a>
                </div>
            </div>
        </footer>
    )
}