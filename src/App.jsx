import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import pfp from "./assets/pfp.png";
import sheets from "./assets/sheets.png";
import ad from "./assets/ad.png";
import yt from "./assets/yt.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a target="_blank">
          <img src={pfp} className="logo react drop-shadow" alt="React logo" />
        </a>
      </div>
      <h1 className="unselectable">@ojuliocode</h1>
      <p className="medium-text">
        {" "}
        Desenvolvedor fullstack vidrado em ensinar programação &#128640;{" "}
      </p>
      <div className="links">
        <a target="_blank" href="https://www.instagram.com/ojuliocode">
          <h4>instagram</h4>
        </a>
        <a target="_blank" href="https://www.tiktok.com/@ojuliocode">
          <h4>tiktok</h4>
        </a>
        <a target="_blank" href="https://www.youtube.com/@ojuliocode">
          <h4>youtube</h4>
        </a>
      </div>
      <div className="card">
        <a href="https://www.youtube.com/watch?v=SYFosoes7WM" style={{
             display: 'flex', justifyContent: 'center'}} target="_blank">
          {" "}
          <img
            src={yt}
            alt="bogos"
            width={150}
            height={"auto"}
            style={{
              borderRadius: 20,
              marginTop: "auto",
              marginBottom: "auto",
            }}
          />
        </a>
        <div className="card-text">
          <h2 className="align-start">Curso de lógica</h2>
          <p  className=" max-width align-start">
            Aprenda programação do zero gratuitamente. Este curso é para você que quer aprender lógica de programação do zero
          </p>
          <p>
            <em>*Gratuito! </em>
          </p>
          <a href="https://www.youtube.com/watch?v=SYFosoes7WM" target="_blank">
            <button>Acessar</button>
          </a>
        </div>
      </div>
      <div className="card">
        <a href="https://hotmart.com/pt-br/marketplace/produtos/omagicfront/Y88783634B" target="_blank">
          {" "}
          <img
            src={ad}
            alt="bogos"
            width={150}
            height={"auto"}
            style={{
              borderRadius: 20,
              marginTop: "auto",
              marginBottom: "auto",
            }}
          />
        </a>
        <div className="card-text">
          <h2 className="align-start">Magic Front</h2>
          <p  className=" max-width align-start">
            O Magic Front é o guia moderno do Frontend. Este ebook é para você
            que quer aprender as tecnologias mais modernas do Front do zero
          </p>
          <p>
            <em>*Inclui seção sobre currículo + Linkedin! </em>
          </p>
          <a href="https://hotmart.com/pt-br/marketplace/produtos/omagicfront/Y88783634B" target="_blank">
            <button>Quero aprender Frontend</button>
          </a>
        </div>
      </div>
      <div className="card">
        <a href="https://docs.google.com/spreadsheets/d/18QtlT433tk9fB8GVQGvtkDNuCsV7uaC9oFS5JhaZdIk/edit?usp=sharing" target="_blank">
          {" "}
          <img
            src={sheets}
            alt="bogos"
            width={150}
            height={"auto"}
            style={{
              borderRadius: 20,
              marginTop: "auto",
              marginBottom: "auto",
            }}
          />
        </a>
        <div className="card-text">
          <h2 className="align-start">Vagas</h2>
          <p  className=" max-width align-start">
            Acesse a vagas de estágio e de Júnior, em primeira mão
          </p>
          <a href="https://docs.google.com/spreadsheets/d/18QtlT433tk9fB8GVQGvtkDNuCsV7uaC9oFS5JhaZdIk/edit?usp=sharing" target="_blank">
            <button>Vagas</button>
          </a>
        </div>
      </div>
      <div className="footer">
        <h4 style={{ color: "white" }}>@ojuliocode &copy; 2024</h4>
      </div>
    </>
  );
}

export default App;
