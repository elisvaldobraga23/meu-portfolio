import imgCadastro from "../assets/img/tela-cadastro-usuarios.png";
import imgListaCompras from "../assets/img/lista-de-compras.png";

export function dataProjetos() {
    return {
        projeto01:{
            Titulo:"Cadastro de Usuários",
            descricao:"Aplicação desenvolvida em React para gerenciamento de usuários de forma simples e intuitiva. O sistema permite cadastrar, listar e remover usuários dinamicamente.",
            tags:["HTML5", "CSS3", "React"],
            img: imgCadastro,
            link: "",
            linkGithub: "https://github.com/elisvaldobraga23/cadastro_de_usuarios"
        },
        projeto02:{
            Titulo:"Lista de Compras",
            descricao:"Aplicação web para gerenciamento de lista de compras, com adição, remoção e controle de itens, utilizando JavaScript puro e armazenamento local.",
            tags:["HTML5", "CSS3", "JavaScript"],
            img: imgListaCompras,
            link: "https://elisvaldobraga23.github.io/lista_de_compras/",
            linkGithub: "https://github.com/elisvaldobraga23/lista_de_compras"
        },

    }
}