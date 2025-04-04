import "./styles.css";
import magiclogo from "../assets/magiclogo.webp";
import html from "../assets/html.webp";
import css from "../assets/css.webp";
import git from "../assets/git.webp";
import js from "../assets/js.webp";
import react from "../assets/react.webp";
import linkedin from "../assets/ldn.webp";
import vaguinhas from "../assets/programmer.png";
import { useState } from "react";
import jalawebp from '../assets/jalawebp.webp'

export function MagicFront() {
    const [show, setShow] = useState(0)
  const vagas =
    "https://docs.google.com/spreadsheets/d/18QtlT433tk9fB8GVQGvtkDNuCsV7uaC9oFS5JhaZdIk/edit?usp=sharing";
  const CV =
    "https://docs.google.com/document/d/1B2HGp61zn45e3rhAYMM89emdttESits7ia4AXk-Kc5I/edit?usp=sharing";
    const jalalink = 'https://jala.university'
    const vagasLink = 'https://x.com/tatidirienzo/status/1851285115910910202'
    const resumakeLink = 'https://latexresu.me/generator/profile'
    function buy(){
        console.log(show)
            setShow(1)
            setTimeout(() => {
                setShow(2)
                setTimeout(() => {
                    window.location.href = 'https://pay.hotmart.com/Y88783634B'
                }, 1100);
            }, 1800);
    }

  return (
    <div className="page-wrapper">
      { /*
      <section
        className="links"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "60px",
          marginTop: "40px"
        }}
      > 
            <img src={jalawebp} alt="" width={150} />
      <button
          style={{
            padding: 0,
            borderRadius: 0,
            backgroundColor: "transparent",
            border: "none",
            display: "flex",
            flexDirection: 'column'
          }}
        >
          <a
            style={{
              backgroundColor: "#004bd6",
              padding: 8,
              borderRadius: 10,
              fontSize: 16,
            }}
            href={jalalink}
            target="_blank"
          >
           Curso Jala University
          </a>
        </button>
      </section> 
      */
     }
      <section className="top-content">
        <section className="title">
          <img
            src={magiclogo}
            alt="fdasf"
            width={200}
            height={200}
            style={{ borderRadius: "50%" }}
            className="magic-logo"
          />
          <h1
            className="bigtitle"
            style={{ marginBottom: 0, fontSize: 40, textAlign: "center" }}
          >
            O manual do desenvolvedor Frontend
          </h1>
          <h4
            className="bigtitle"
            style={{ textAlign: "center", fontSize: 25 }}
          >
            Aprenda a desenvolver interfaces com tecnologias que
            <span className="glowing"> as maiores empresas </span> do mundo
            utilizam
          </h4>
        </section>
        <section className="price-card">
          <p> Por tempo limitado </p>
          <h4>
            {" "}
            De <span style={{ textDecoration: "line-through" }}>
              R$54,90
            </span>{" "}
            por
          </h4>
          <h3 style={{ fontSize: 27, color: show == 2 ?  'rgb(85, 145, 213)' : '#213547'}}> R$10,00</h3>
          <a href="https://pay.hotmart.com/Y88783634B">
                {" "}
                <button> Conferir meu desconto </button>{" "}
              </a>
          <p> Cartão de crédito e Pix </p>
        </section>
      </section>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 90 }}>
        <h3 style={{ fontSize: 34 }} className="bogos bigtitle">
          {" "}
          <em className="glowing"> Mensagens que recebo no Instagram </em>{" "}
        </h3>
      </div>
      <div
        className="feedback-row"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 30,
          height: 200,
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            alignItems: "end",
            color: "white",
            padding: 15,
            backgroundColor: "rgb(2, 12, 26)",
            borderRadius: 10,
          }}
          className="feedbacks"
        >
          <div className="text">
            Terminei de estudar o ebook hoje, e posso te falar que é o melhor
            conteúdo de programação a esse preço!!
          </div>
        </section>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            alignItems: "end",
            color: "white",
            padding: 15,
            backgroundColor: "rgb(2, 12, 26)",
            borderRadius: 10,
          }}
          className="feedbacks"
        >
          <div className="text">
            Parabéns pelo trabalho com o youtube e o conteúdo &#128079;
            &#128079;
          </div>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            alignItems: "end",
            color: "white",
            padding: 15,
            backgroundColor: "rgb(2, 12, 26)",
            borderRadius: 10,
          }}
          className="feedbacks"
        >
          <div className="text">Parabéns pelo conteúdo, muito bom</div>
        </section>
      </div>
      <div
        className="feedback-row"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 30,
          marginTop: 30,
          height: 200,
          alignItems: "center",
        }}
      >
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            alignItems: "end",
            color: "white",
            padding: 15,
            backgroundColor: "rgb(2, 12, 26)",
            borderRadius: 10,
          }}
          className="feedbacks"
        >
          <div className="text">
            Um dos melhores conteúdos de programação aqui no insta &#10084;
          </div>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            alignItems: "end",
            color: "white",
            padding: 15,
            backgroundColor: "rgb(2, 12, 26)",
            borderRadius: 10,
          }}
          className="feedbacks"
        >
          <div className="text">
            Eai brother. Queria te passar o feedback sobre o seu livro. Muito
            bom, explicação clara e completa
          </div>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            alignItems: "end",
            color: "white",
            padding: 15,
            backgroundColor: "rgb(2, 12, 26)",
            borderRadius: 10,
          }}
          className="feedbacks"
        >
          <div className="text">
            Comprei há um tempo e comecei a estudar agora. Parabéns pela clareza
            nas explicações. Muito sucesso você vai longe &#128074; &#128074;
          </div>
        </section>
      </div>
      <div
        className="feedback-row"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 30,
          marginTop: 30,
          height: 200,
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            alignItems: "end",
            color: "white",
            padding: 15,
            backgroundColor: "rgb(2, 12, 26)",
            borderRadius: 10,
          }}
          className="feedbacks"
        >
          <div className="text">
            Nunca vi alguém com um conteúdo tão completo com esse preço. Com
            certeza está ajudando muita gente
          </div>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            alignItems: "end",
            color: "white",
            padding: 15,
            backgroundColor: "rgb(2, 12, 26)",
            borderRadius: 10,
          }}
          className="feedbacks"
        >
          <div className="text">
            Gostei muito do ebook. Está me ajudando muito.
          </div>
        </section>
      </div>
      <section
        style={{
          marginTop: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontSize: 34 }} className="bogos bigtitle">
          {" "}
          <em className="glowing">O que vou aprender neste manual? </em>{" "}
        </h3>
        <div
          className="contentsss"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 50,
            marginTop: 50,
          }}
        >
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={html}
                alt="HTML Logo (Hypertext Markup Language)"
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 1. Introdução ao HTML </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>Primeiro contato com tags</li>
              <li>Tags semânticas</li>
              <li>Como criar um parágrafo</li>
              <li>Diferentes tipos de título</li>
              <li>Textos e formatação</li>
            </ul>
          </section>
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={html}
                alt="HTML Logo (Hypertext Markup Language)"
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 2. Aprofundando </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>Atributos</li>
              <li>Como inserir uma classe</li>
              <li>Nesting</li>
              <li>Tags não semânticas</li>
              <li>lorem</li>
            </ul>
          </section>
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={html}
                alt="HTML Logo (Hypertext Markup Language)"
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 3. Listas </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>Listas ordenadas</li>
              <li>Listas não ordenadas</li>
              <li>Atributo type de listas</li>
              <li>Mini Projeto 1</li>
            </ul>
          </section>
        </div>
        <div
          className="contentsss"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 50,
            marginTop: 50,
          }}
        >
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={css}
                alt="CSS Logo (Cascading StyleSheet)"
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 4. Introdução ao CSS </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>CSS inline</li>
              <li>Mudando cores de texto</li>
              <li>Aplicando estilo à cor de fundo</li>
              <li>Transformando textos em negrito</li>
              <li>Ênfase</li>
              <li>CSS em arquivos separados</li>
            </ul>
          </section>
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={css}
                alt="CSS Logo (Cascading StyleSheet)"
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 5. Aprofundando </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>Introdução a seletores</li>
              <li>Seletor de classe</li>
              <li>Como concatenar seletores</li>
              <li>Seletor ID</li>
              <li>Encadeamento de seletores</li>
            </ul>
          </section>
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={css}
                alt="CSS Logo (Cascading StyleSheet)"
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 6. Box Model </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>Introdução ao modelo de caixas</li>
              <li>Como funciona o box model</li>
              <li>Aplicando borda nas caixas</li>
              <li>Aplicando margin nas caixas</li>
              <li>Como funciona o padding</li>
            </ul>
          </section>
        </div>
        <div
          className="contentsss"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 50,
            marginTop: 50,
          }}
        >
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={css}
                alt="CSS Logo (Cascading StyleSheet)"
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 7. Tipos de caixas </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>Como funciona a caixa block</li>
              <li>Funcionamento do modelo inline</li>
              <li>Como alinhar elementos inline</li>
            </ul>
          </section>
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={css}
                alt="CSS Logo (Cascading StyleSheet)"
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 8. Flexbox </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>Como funciona o display: flex</li>
              <li>Distribuindo elementos na horizontal</li>
              <li>Alinhamento de elementos na horizontal</li>
              <li>Propriedade justify-content</li>
              <li>Como alinhar elementos na vertical</li>
              <li>Criando um projeto com HTML e CSS</li>
            </ul>
          </section>
        </div>
        <div
          className="contentsss"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 50,
            marginTop: 50,
          }}
        >
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={js}
                alt="JS logo (javascript)"
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 9. Introdução ao JS </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>Variáveis</li>
              <li>Diferença entre variáveis e constantes </li>
              <li>Como executar meu primeiro código JS</li>
              <li>Visualização de dados no javascript</li>
            </ul>
          </section>
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={js}
                alt="Javascript logo"
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 10. Tipos de dados </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>Números e manipulações</li>
              <li>Cadeias de caracteres (strings) </li>
              <li>Como funcionam arrays</li>
            </ul>
          </section>
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={js}
                alt="Javascript logo"
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 11. Condicionais </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>O que é um condicional</li>
              <li>Valores true e false</li>
              <li>Comentários de código</li>
              <li>if, else, else if</li>
            </ul>
          </section>
        </div>
        <div
          className="contentsss"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 50,
            marginTop: 50,
          }}
        >
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <img src={js} alt="Javascript logo" height={45} />
              <h3 style={{ color: "white" }}> 12. Métodos </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>O que são métodos</li>
              <li>Como chamar um método </li>
              <li>Como acessar propriedades do array</li>
            </ul>
          </section>
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={js}
                alt="Javascript logo"
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 13. Objetos </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>O que são objetos</li>
              <li>Como acessar um valor de objeto </li>
              <li>Como acessar funções dentro de objetos</li>
            </ul>
          </section>
        </div>
        <div
          className="contentsss"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 50,
            marginTop: 50,
          }}
        >
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={react}
                alt="React framework library logo "
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 14. Introdução ao React </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>O que é a biblioteca</li>
              <li>Para que serve o React </li>
              <li> Como instalar o React</li>
              <li> Configuração do React</li>
            </ul>
          </section>
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={react}
                alt="React framework library logo "
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 15. Componentes </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>Como é o fluxo do React</li>
              <li>Criando a minha primeira linha </li>
              <li>O que são componentes </li>
              <li>Criando meu primeiro componente</li>
            </ul>
          </section>
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={react}
                alt="React framework library logo "
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 16. Renderizando JS </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>Como interagir JS + HTML</li>
              <li>Renderizando uma lista </li>
              <li>Como renderizar condiconal</li>
              <li>Compartilhando informações </li>
            </ul>
          </section>
        </div>

        <div
          className="contentsss"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 50,
            marginTop: 50,
          }}
        >
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={git}
                alt="Git and github logo"
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 17. Introdução ao Git </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>Overview</li>
              <li>Para que serve </li>
              <li>Fluxo do Git</li>
            </ul>
          </section>
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={git}
                alt="Git and github logo"
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 18. Instalando </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>Como instalar</li>
              <li>Configurando o seu primeiro repo</li>
              <li> Criando o primeiro repositório </li>
            </ul>
          </section>
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={git}
                alt="Git and github logo"
                height={45}
                width={40}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 19. Como interagir com git </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>Principais comandos</li>
              <li>git add</li>
              <li>git commit </li>
              <li>git push </li>
              <li>git branch </li>
              <li>Linkando com github </li>
              <li>Novas modificações</li>
            </ul>
          </section>
        </div>
        <h3 style={{ fontSize: 40, margin: "0 !important" }}>
          <em className="glowing"> Extra! </em>{" "}
        </h3>
        <div
          className="contentsss"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 50,
            marginTop: 50,
          }}
        >
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <img
                src={linkedin}
                alt="Linkedin logo"
                height={45}
                width={45}
                style={{}}
              />
              <h3 style={{ color: "white" }}> 1.Montar um currículo </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>Montando um currículo do zero</li>
              <li>O que as empresas querem</li>
              <li>Informações relevantes para o CV</li>
              <li>O que é necessário e no sobre mim</li>
              <li>Devo colocar cursos?</li>
            </ul>
          </section>
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={linkedin}
                alt="Linkedin logo"
                height={45}
                width={45}
                style={{ padding: 10 }}
              />
              <h3 style={{ color: "white" }}> 2. Linkedin </h3>
            </div>
            <ul
              style={{
                display: "inline-flex",
                flexDirection: "column",
                color: "white",
                textAlign: "start",
              }}
            >
              <li>Como interagir no linkedin</li>
              <li>Criando o melhor perfil do Linkedin</li>
              <li>Como fazer uma publicação</li>
              <li>Como alcançar os recrutadores</li>
            </ul>
          </section>
        </div>
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 100,
          marginBottom: 100,
        }}
      >
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            alignItems: "end",
            color: "white",
            padding: 15,
            backgroundColor: "rgb(2, 12, 26)",
            borderRadius: 10,
            width: "fit-content",
          }}
          className="feedbacks"
        >
          <div className="text" style={{ fontSize: 18 }}>
            Nunca vi alguém com um conteúdo tão completo com esse preço. Com
            certeza está ajudando muita gente
          </div>
        </section>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <section
          className="price-card asd"
          style={{
            width: "70vw",
            margin: 10,
            marginBottom: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0, textAlign: "center", fontSize: 22 }}>
            Torne-se um desenvolvedor Frontend e faça parte dos melhores{" "}
          </h3>
          <h4 style={{ display: "inline", textAlign: "center" }}>
            De <span style={{ textDecoration: "line-through" }}>R$54,90</span>{" "}
            por <em style={{ fontSize: 30 }}>R$10,00 </em>
          </h4>
          <a href="https://pay.hotmart.com/Y88783634B">
            <button>Quero me tornar um programador</button>
          </a>
        </section>
      </div>
    </div>
  );
}
