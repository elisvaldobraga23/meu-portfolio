import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Cabecalho } from './components/Cabecalho'
import { Inicio } from './components/Inicio'
import { Sobre } from './components/Sobre'
import { Projetos } from './components/Projetos'
import { Contato } from './components/Contato'
import { Rodape } from './components/Rodape'
import "./styles/Global.css"



function App() {

  return (
    <>
      <Cabecalho />
      <Inicio />
      <Sobre />
      <Projetos />
      <ToastContainer />
      <Contato />
      <Rodape />
    </>
  )
}

export default App
