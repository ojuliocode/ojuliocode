"use client"

import { useState } from "react"
import { FileText, Gift } from "lucide-react"
import { cn } from "../lib/utils"

const bonusContent = [
  {
    title: "1. Montar um currículo",
    topics: [
      "Montando um currículo do zero",
      "O que as empresas querem",
      "Informações relevantes para o CV",
      "O que é necessário e no sobre mim",
      "Devo colocar cursos?",
    ],
  },
  {
    title: "2. Linkedin",
    topics: [
      "Como interagir no linkedin",
      "Criando o melhor perfil do Linkedin",
      "Como fazer uma publicação",
      "Como alcançar os recrutadores",
    ],
  },
]

export function BonusContent() {
  const [expandedBonus, setExpandedBonus] = useState<number | null>(null)

  const toggleBonus = (index: number) => {
    setExpandedBonus(expandedBonus === index ? null : index)
  }

  return (
    <section className="py-20 bg-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-full mb-4">
            <Gift className="h-6 w-6 text-purple-500" />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Extra!</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Conteúdo bônus para ajudar você a se destacar no mercado de trabalho
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-6 border border-purple-200 shadow-lg">
            <div className="space-y-4">
              {bonusContent.map((bonus, index) => (
                <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
                  <button
                    onClick={() => toggleBonus(index)}
                    className={cn(
                      "w-full flex items-center gap-3 p-4 text-left transition-colors",
                      expandedBonus === index ? "bg-purple-100" : "bg-white hover:bg-gray-50",
                    )}
                  >
                    <FileText className="h-5 w-5 text-purple-500" />
                    <span className="font-medium text-gray-700">{bonus.title}</span>
                  </button>

                  {expandedBonus === index && (
                    <div className="p-4 space-y-2 bg-gray-50">
                      {bonus.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                          <span className="text-sm text-gray-600">{topic}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 border border-dashed border-purple-300 rounded-md bg-purple-50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-full">
                  <Gift className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Bônus exclusivos</h4>
                  <p className="text-sm text-gray-600">Conteúdo adicional para impulsionar sua carreira</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
