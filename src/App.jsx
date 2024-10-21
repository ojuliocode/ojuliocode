import { useState, useEffect } from "react";
import "./App.css";
import { MagicFront } from "./pages/MagicFront";

function App() {
  const [count, setCount] = useState(0);
  const [showFooter, setShowFooter] = useState(1);
  console.log("Olá! XD")
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
        <a href="https://pay.hotmart.com/Y88783634B">  <button> Quero garantir a oferta </button> </a>
      </div>
      <div className="topper">
        Esta página foi criada usando ensinamentos do Magic Front
      </div>
      <MagicFront></MagicFront>
     
    </>
  );
}

export default App;
