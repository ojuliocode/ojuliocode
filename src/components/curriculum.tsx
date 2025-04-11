"use client"

import { useState } from "react"
import { ChevronDown, Code, GitBranch, Globe, Layers } from "lucide-react"
import { cn } from "../lib/utils"

const curriculum = [
  {
    name: "HTML",
    icon: <Globe className="h-5 w-5" />,
    color: "text-orange-500",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-200",
    modules: [
      {
        title: "1. Introdução ao HTML",
        topics: [
          "Primeiro contato com tags",
          "Tags semânticas",
          "Como criar um parágrafo",
          "Diferentes tipos de título",
          "Textos e formatação",
        ],
      },
      {
        title: "2. Aprofundando",
        topics: ["Atributos", "Como inserir uma classe", "Nesting", "Tags não semânticas", "lorem"],
      },
      {
        title: "3. Listas",
        topics: ["Listas ordenadas", "Listas não ordenadas", "Atributo type de listas", "Mini Projeto 1"],
      },
    ],
  },
  {
    name: "CSS",
    icon: <Layers className="h-5 w-5" />,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
    modules: [
      {
        title: "4. Introdução ao CSS",
        topics: [
          "CSS inline",
          "Mudando cores de texto",
          "Aplicando estilo à cor de fundo",
          "Transformando textos em negrito",
          "Ênfase",
          "CSS em arquivos separados",
        ],
      },
      {
        title: "5. Aprofundando",
        topics: [
          "Introdução a seletores",
          "Seletor de classe",
          "Como concatenar seletores",
          "Seletor ID",
          "Encadeamento de seletores",
        ],
      },
      {
        title: "6. Box Model",
        topics: [
          "Introdução ao modelo de caixas",
          "Como funciona o box model",
          "Aplicando borda nas caixas",
          "Aplicando margin nas caixas",
          "Como funciona o padding",
        ],
      },
      {
        title: "7. Tipos de caixas",
        topics: ["Como funciona a caixa block", "Funcionamento do modelo inline", "Como alinhar elementos inline"],
      },
      {
        title: "8. Flexbox",
        topics: [
          "Como funciona o display: flex",
          "Distribuindo elementos na horizontal",
          "Alinhamento de elementos na horizontal",
          "Propriedade justify-content",
          "Como alinhar elementos na vertical",
          "Criando um projeto com HTML e CSS",
        ],
      },
    ],
  },
  {
    name: "JavaScript (JS)",
    icon: <Code className="h-5 w-5" />,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    borderColor: "border-yellow-200",
    modules: [
      {
        title: "9. Introdução ao JS",
        topics: [
          "Variáveis",
          "Diferença entre variáveis e constantes",
          "Como executar meu primeiro código JS",
          "Visualização de dados no javascript",
        ],
      },
      {
        title: "10. Tipos de dados",
        topics: ["Números e manipulações", "Cadeias de caracteres (strings)", "Como funcionam arrays"],
      },
      {
        title: "11. Condicionais",
        topics: ["O que é um condicional", "Valores true e false", "Comentários de código", "if, else, else if"],
      },
      {
        title: "12. Métodos",
        topics: ["O que são métodos", "Como chamar um método", "Como acessar propriedades do array"],
      },
      {
        title: "13. Objetos",
        topics: ["O que são objetos", "Como acessar um valor de objeto", "Como acessar funções dentro de objetos"],
      },
    ],
  },
  {
    name: "React",
    icon: <Code className="h-5 w-5" />,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    borderColor: "border-cyan-200",
    modules: [
      {
        title: "14. Introdução ao React",
        topics: ["O que é a biblioteca", "Para que serve o React", "Como instalar o React", "Configuração do React"],
      },
      {
        title: "15. Componentes",
        topics: [
          "Como é o fluxo do React",
          "Criando a minha primeira linha",
          "O que são componentes",
          "Criando meu primeiro componente",
        ],
      },
      {
        title: "16. Renderizando JS",
        topics: [
          "Como interagir JS + HTML",
          "Renderizando uma lista",
          "Como renderizar condicional",
          "Compartilhando informações",
        ],
      },
    ],
  },
  {
    name: "Git",
    icon: <GitBranch className="h-5 w-5" />,
    color: "text-red-500",
    bgColor: "bg-red-100",
    borderColor: "border-red-200",
    modules: [
      {
        title: "17. Introdução ao Git",
        topics: ["Overview", "Para que serve", "Fluxo do Git"],
      },
      {
        title: "18. Instalando",
        topics: ["Como instalar", "Configurando o seu primeiro repo", "Criando o primeiro repositório"],
      },
      {
        title: "19. Como interagir com git",
        topics: [
          "Principais comandos",
          "git add",
          "git commit",
          "git push",
          "git branch",
          "Linkando com github",
          "Novas modificações",
        ],
      },
    ],
  },
]

export function Curriculum() {
  const [expandedTech, setExpandedTech] = useState<string | null>(null)
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({})

  const toggleTech = (techName: string) => {
    setExpandedTech(expandedTech === techName ? null : techName)
  }

  const toggleModule = (techName: string, moduleIndex: number) => {
    const key = `${techName}-${moduleIndex}`
    setExpandedModules((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">O que vou aprender neste manual?</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Um guia completo para você dominar as tecnologias mais utilizadas no desenvolvimento frontend
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {curriculum.map((tech) => (
            <div
              key={tech.name}
              className={cn(
                "border rounded-lg overflow-hidden transition-all duration-300 shadow-sm",
                tech.borderColor,
                expandedTech === tech.name ? "border-opacity-100" : "border-opacity-50",
              )}
            >
              <button
                onClick={() => toggleTech(tech.name)}
                className={cn(
                  "w-full flex items-center justify-between p-4 text-left transition-colors",
                  tech.bgColor,
                  expandedTech === tech.name ? "bg-opacity-100" : "bg-opacity-50",
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn("p-2 rounded-full", tech.bgColor)}>
                    <span className={tech.color}>{tech.icon}</span>
                  </div>
                  <h3 className={cn("font-bold text-lg", tech.color)}>{tech.name}</h3>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform text-gray-600",
                    expandedTech === tech.name ? "transform rotate-180" : "",
                  )}
                />
              </button>

              {expandedTech === tech.name && (
                <div className="p-4 bg-white">
                  <div className="space-y-3">
                    {tech.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="border border-gray-200 rounded-md overflow-hidden">
                        <button
                          onClick={() => toggleModule(tech.name, moduleIndex)}
                          className="w-full flex items-center justify-between p-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <span className="font-medium text-gray-700">{module.title}</span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform text-gray-600",
                              expandedModules[`${tech.name}-${moduleIndex}`] ? "transform rotate-180" : "",
                            )}
                          />
                        </button>

                        {expandedModules[`${tech.name}-${moduleIndex}`] && (
                          <div className="p-3 space-y-2">
                            {module.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>
                                <span className="text-sm text-gray-600">{topic}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
