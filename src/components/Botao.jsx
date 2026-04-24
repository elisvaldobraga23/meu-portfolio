import "../styles/Botao.css"

export function Botao(props){
    const  { className, children } = props

    return (
        <button className={className}>{children}</button>
    )
}