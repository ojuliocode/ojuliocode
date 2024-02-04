import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import pfp from "./assets/pfp.png";
import ad from "./assets/ad.png";
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
      </div>
      <div className="footer">
        <h4 style={{ color: "white" }}>@ojuliocode &copy; 2024</h4>
      </div>
    </>
  );
}

export default App;
