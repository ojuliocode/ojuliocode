import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import pfp from "./assets/pfp.png";
import sheets from "./assets/sheets.png";
import ad from "./assets/ad.png";
import yt from "./assets/yt.png";
import "./App.css";
import { MagicFront } from "./pages/MagicFront";

function App() {
  const [count, setCount] = useState(0);
  const [showFooter, setShowFooter] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY <= 700)
        setShowFooter(1)
      else 
        setShowFooter(0)

        
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={!showFooter ? 'abs' : 'none'} >
      
        <span style={{width: '90%'}}>
        &#9888;&#65039; Oferta limitada. Torne-se um desenvolvedor frontend hoje
          mesmo
        </span>
        <a href="https://hotmart.com/pt-br/marketplace/produtos/omagicfront/Y88783634B">  <button> Quero garantir a oferta </button> </a>
      </div>
      <div className="topper">
        Esta página foi criada usando ensinamentos do Magic Front
      </div>
      <MagicFront></MagicFront>
     
    </>
  );
}

export default App;
