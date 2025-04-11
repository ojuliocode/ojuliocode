"use client"

import { useState, useEffect } from "react"
import { X, ExternalLink, Link2 } from "lucide-react"

interface ExtraLink {
  title: string
  url: string
  description?: string
}

interface ExtraLinksModalProps {
  links: ExtraLink[]
}

export function ExtraLinksModal({ links }: ExtraLinksModalProps) {
  // Inicializa com o modal fechado, mas vamos abri-lo automaticamente após o carregamento
  const [isOpen, setIsOpen] = useState(false)

  // Efeito para abrir o modal automaticamente quando a página carrega
  useEffect(() => {
    // Pequeno atraso para garantir que a página esteja totalmente carregada
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Se não houver links, não renderize nada
  if (!links || links.length === 0) {
    return null
  }

  return (
    <>
      {/* Botão para abrir o modal */}
      <button
  onClick={() => setIsOpen(true)}
  className="mx-auto mt-[15px] flex items-center gap-2 px-3 py-2 bg-sky-500 text-white rounded-full shadow-lg hover:bg-sky-600 transition-colors"
>
  <Link2 className="h-4 w-4" />
  <span className="text-sm font-medium">Links extras</span>
</button>


      {/* Overlay do modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          {/* Conteúdo do modal */}
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-hidden flex flex-col">
            {/* Cabeçalho do modal */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Links extras</h3>
              <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Corpo do modal com links */}
            <div className="p-4 overflow-y-auto flex-grow">
              <div className="space-y-4">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-gray-200 rounded-lg hover:border-sky-200 hover:bg-sky-50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <ExternalLink className="h-5 w-5 text-sky-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-sky-600">{link.title}</h4>
                        {link.description && <p className="text-sm text-gray-600 mt-1">{link.description}</p>}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Rodapé do modal */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
