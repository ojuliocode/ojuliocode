import { Terminal } from "lucide-react"
import { Testimonials } from "./components/testimonials"
import { Curriculum } from "./components/curriculum"
import { BonusContent } from "./components/bonus-content"
import { CTAButton } from "./components/cta-button"
import { TopBanner } from "./components/top-banner"
import { StickyBanner } from "./components/sticky-banner"
import { ExtraLinksModal } from "./components/extra-links-modal"
import { VersionDisplay } from "./components/version-display" // <-- IMPORT HERE
/*
const extraLinks = [
  {
    title: "Crie seu primeiro site com IA aplicada em 3 aulas!",
    url: "https://rseat.in/nlw-ojuliocode",
    description: "Comece do zero absoluto, mesmo sem experiência, e inicie em programação rumo a uma carreira promissora",
    image: 'rocketseat_logo.jpg' 
  },
  {
    title: "Venha estudar na JALA University!",
    url: "https://jala-u.info/JulioCode_Jan2026",
    description: "Graduação em Engenharia de Software. Turmas de Janeiro de 2026",
    image: 'https://media.licdn.com/dms/image/v2/C4E0BAQG-Lcgr-a84FA/company-logo_200_200/company-logo_200_200/0/1654778420300?e=2147483647&v=beta&t=p2zKt9M_HvPOmKCwQBxDV2dji6JRM8Z3Rjf73nJ56-8' 
  }
]
*/
function App() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-mono">
      <TopBanner />
      <StickyBanner />
      <ExtraLinksModal links={extraLinks} />
      <section className="relative pt-10 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-sky-500 text-opacity-20 text-xs"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                {`<${["div", "span", "code", "html", "body", "header", "footer", "main", "section"][Math.floor(Math.random() * 9)]}/>`}
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-sky-100 rounded-full mb-6">
              <Terminal className="h-6 w-6 text-sky-500" />
            </div>
            <div className="text-sky-600 mb-2 text-sm tracking-widest uppercase">ojuliocode apresenta</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 glitch-text-light">Magic Front</h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 text-gray-700">O manual do desenvolvedor Frontend</h2>
            <p className="max-w-2xl text-lg text-gray-600 mb-8">
              Aprenda a desenvolver interfaces com tecnologias que as maiores empresas do mundo utilizam
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <CTAButton primary text="Conferir meu desconto" href="https://pay.hotmart.com/Y88783634B" />
              <CTAButton text="Quero me tornar um programador" href="https://pay.hotmart.com/Y88783634B" />
            </div>

            <div className="flex items-center gap-4 p-4 border border-sky-200 rounded-lg bg-sky-50">
              <div className="text-xl font-bold line-through text-gray-400">R$54,90</div>
              <div className="text-3xl font-bold text-sky-600">R$10,00</div>
              <div className="text-sm px-2 py-1 bg-sky-500 text-white rounded">Oferta Limitada</div>
            </div>
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="relative z-10 rounded-lg overflow-hidden border-2 border-sky-200 shadow-lg">
              <div className="bg-gray-100 p-1 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs text-gray-500">magic-front.jsx</div>
              </div>
              <div className="bg-white p-6 font-mono text-sm border-t border-gray-200">
                <div className="text-blue-600">
                  {"import "}
                  <span className="text-orange-500">{"React "}</span>
                  <span className="text-blue-600">{"from "}</span>
                  <span className="text-green-600">'react'</span>;
                </div>
                <div className="mt-2">
                  <span className="text-pink-600">{"const "}</span>
                  <span className="text-orange-500">{"MagicFront "}</span>
                  <span className="text-pink-600">{"= "}</span>
                  <span className="text-orange-500">{"() "}</span>
                  <span className="text-pink-600">{"=>"}</span>
                  <span className="text-orange-500">{" {"}</span>
                </div>
                <div className="ml-4 text-pink-600">{"return ("}</div>
                <div className="ml-8 text-blue-600">
                  {"<div "}
                  <span className="text-green-600">{"className"}</span>
                  <span className="text-gray-800">{"="}</span>
                  <span className="text-green-600">"developer-manual"</span>
                  <span className="text-blue-600">{">"}</span>
                </div>
                <div className="ml-12 text-blue-600">
                  {"<h1>"}
                  <span className="text-gray-800">Aprenda Frontend do Zero</span>
                  <span className="text-blue-600">{"</h1>"}</span>
                </div>
                <div className="ml-12 text-blue-600">
                  {"<p>"}
                  <span className="text-gray-800">HTML, CSS, JavaScript, React e Git</span>
                  <span className="text-blue-600">{"</p>"}</span>
                </div>
                <div className="ml-12 text-blue-600">
                  {"<button "}
                  <span className="text-green-600">{"type"}</span>
                  <span className="text-gray-800">{"="}</span>
                  <span className="text-green-600">"primary"</span>
                  <span className="text-blue-600">{">"}</span>
                  <span className="text-gray-800">Comprar Agora</span>
                  <span className="text-blue-600">{"</button>"}</span>
                </div>
                <div className="ml-8 text-blue-600">{"</div>"}</div>
                <div className="ml-4 text-pink-600">{");"}</div>
                <div className="text-orange-500">{"}"}</div>
                <div className="mt-2 text-blue-600">
                  {"export "}
                  <span className="text-pink-600">{"default "}</span>
                  <span className="text-orange-500">{"MagicFront"}</span>;
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 -left-4 h-8 bg-gradient-to-t from-white to-transparent z-20"></div>
          </div>
        </div>
      </section>

      <Testimonials />

      <Curriculum />

      <BonusContent />

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-white opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sky-600">
              Comece sua jornada como desenvolvedor Frontend hoje
            </h2>
            <p className="text-lg mb-8 text-gray-600">
              Por apenas <span className="text-sky-600 font-bold">R$10,00</span>, você terá acesso a todo o conteúdo
              necessário para iniciar sua carreira na programação.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton primary large text="Garantir minha oferta" href="https://pay.hotmart.com/Y88783634B" />
            </div>
            <div className="mt-8 text-sm text-gray-500">Formas de pagamento: Cartão de crédito e Pix</div>
          </div>
        </div>
      </section>
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Terminal className="h-5 w-5 text-sky-500 mr-2" />
              <span className="text-sky-600 font-bold">Magic Front</span>
            </div>
            <div className="text-sm text-gray-500">© 2023 ojuliocode. Todos os direitos reservados.</div>
          </div>
        </div>
      </footer>
      <VersionDisplay /> {/* <-- RENDER HERE */}
    </main>
  )
}

export default App