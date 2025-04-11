"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react"

const testimonials = [
  "Terminei de estudar o ebook hoje, e posso te falar que é o melhor conteúdo de programação a esse preço!!",
  "Parabéns pelo trabalho com o youtube e o conteúdo 👏👏",
  "Parabéns pelo conteúdo, muito bom",
  "Um dos melhores conteúdos de programação aqui no insta ❤️",
  "Eai brother. Queria te passar o feedback sobre o seu livro. Muito bom, explicação clara e completa",
  "Comprei há um tempo e comecei a estudar agora. Parabéns pela clareza nas explicações. Muito sucesso você vai longe 👍 👍",
  "Nunca vi alguém com um conteúdo tão completo com esse preço. Com certeza está ajudando muita gente",
  "Gostei muito do ebook. Está me ajudando muito.",
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Mensagens que recebo no Instagram</h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-lg p-8 border border-sky-200 shadow-lg">
            <div className="absolute -top-4 -left-4 bg-sky-500 rounded-full p-2">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>

            <div className="min-h-[120px] flex items-center justify-center">
              <p className="text-lg text-center italic text-gray-700">"{testimonials[currentIndex]}"</p>
            </div>

            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-200 hover:bg-sky-50 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <div className="flex items-center gap-1">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === currentIndex ? "bg-sky-500" : "bg-gray-300"}`}
                  ></div>
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-200 hover:bg-sky-50 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
