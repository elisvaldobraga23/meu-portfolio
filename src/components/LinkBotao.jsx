import { Link } from "react-router-dom";
import "../styles/LinkBotao.css"

export function LinkBotao({ to, children, className}){
    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    )
}