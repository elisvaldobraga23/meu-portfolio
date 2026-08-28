import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BotaoEnviar } from "./BotaoEnviar";
import { toast } from "react-toastify";
import "../styles/Contato.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function formatarNome(nome) {
  const ignorar = ["da", "de", "do", "das", "dos"];

  return nome
    .toLowerCase()
    .trim()
    .split(" ")
    .filter(Boolean)
    .map(p =>
      ignorar.includes(p)
        ? p
        : p.charAt(0).toUpperCase() + p.slice(1)
    )
    .join(" ");
}

export function Contato() {

   useEffect(() => {
          AOS.init({
              duration: 800,
              once: false
          });
      }, []);

  const [enviado, setEnviado] = useState(false);
  const form = useRef();

  function handleSubmit(e) {
  e.preventDefault();

  setEnviado(true)

  const formEnvio = e.target;

  if (!formEnvio.checkValidity()) {
    return; // não anima
  }
    const formEl = form.current;

    // 👉 formata o nome antes de enviar
    formEl.name.value = formatarNome(formEl.name.value);

  emailjs
    .sendForm("service_76tdscp", 'template_5juibg3', formEl, {
      publicKey:'TyOl4Ja_2ImA6AWdW'
    })
    .then(() => {
      
      setTimeout(() => {
        toast.success("E-mail enviado com sucesso");
        formEl.reset();
        setEnviado(false);
      }, 2500);
    })
    .catch((error) => {
      setTimeout(() => {
        setEnviado(false)
        toast.error("Falha ao enviar o E-mail!");
        console.log(error);
      }, 2500);
    });
}

  return (
    <section id="contato">
      <h1 data-aos="fade-down" className="titulo titulo-contato">Contato</h1>
      <h2 data-aos="fade-down">
        Vamos <span>Conversar</span>
      </h2>
      <p data-aos="fade-down" className="p-contato">
        Tem um projeto em mente? <br />
        Estou pronto para transformá-lo em realidade.
      </p>

      <div className="grid">
        <div data-aos="fade-right" className="fale-comigo">
          <h1>Fale comigo</h1>
          <p>
            Seja para um projeto freelance, uma oportunidade de trabalho, ou
            apenas para trocar ideias sobre tecnologia - minha caixa de entrada
            está aberta.
          </p>


            <div data-aos="fade-right"
        data-aos-duration="4000"
        data-aos-delay="0"
        data-aos-easing="ease-in-out" className="contatos">
              <a href="mailto:elisvaldo123braga03@gmail.com" target="_blank">
                <MdAlternateEmail className="icon" />
                <div className="contatos-column">
                  <p className="contato-tipo">E-mail</p>
                  <p className="contato-info">elisvaldo123braga03@gmail.com</p>
                </div>
              </a>
            </div>
          <div 
          data-aos="fade-right"
        data-aos-duration="4000"
        data-aos-delay="800"
        data-aos-easing="ease-in-out" className="contatos">
            <a href="https://wa.me/5588996292920" target="_blank">
              <FaWhatsapp className="icon" />
              <div className="contatos-column">
                <p className="contato-tipo">WhatsApp</p>
                <p className="contato-info">+55 (88) 9 9629-2920</p>
            </div>
            </a>
          </div>
          <div data-aos="fade-right"
        data-aos-duration="4000"
        data-aos-delay="1600"
        data-aos-easing="ease-in-out" className="contatos">
            <FaLocationDot className="icon" />
            <div className="contatos-column">
              <p className="contato-tipo">Localização</p>
              <p className="contato-info">Aracati, CE - Brasil</p>
            </div>
          </div>
          <div className="redes-sociais">
            <a href="https://github.com/elisvaldobraga23" target="_blank" title="GitHub" className="rede-social icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/elisvaldo-braga/" target="_blank" title="Linkedin" className="rede-social">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/elisvaldobraga/" target="_blank" title="Instagram" className="rede-social">
              <FaInstagram />
            </a>
          </div>
        </div>

        <form data-aos="fade-left" ref={form} onSubmit={handleSubmit}>
          <div className="form-nome column">
            <label htmlFor="nome">Nome Completo</label>
            <input type="text" name="name" id="nome" placeholder="Seu nome" required />
          </div>
          <div className="form-email column">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="seu@email.com"
              required
            />
          </div>
          <div className="form-msg column">
            <label htmlFor="msg">Mensagem</label>
            <textarea
              name="message"
              id="msg"
              rows={10}
              placeholder="Conte sobre seu projeto ou ideia..."
              required
            ></textarea>
          </div>
          <BotaoEnviar value="Send" enviado={enviado}></BotaoEnviar>
        </form>
      </div>
    </section>
  );
}
