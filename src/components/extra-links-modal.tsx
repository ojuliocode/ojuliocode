"use client"

import { useState, useEffect } from "react"
import { X, ExternalLink, Link2, ImageIcon } from "lucide-react" // Added ImageIcon for default

interface ExtraLink {
  title: string
  url: string
  description?: string
  image?: string // Optional image URL
}

interface ExtraLinksModalProps {
  links: ExtraLink[]
}

export function ExtraLinksModal({ links }: ExtraLinksModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (links && links.length > 0) { // Only open if there are links
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [links]) // Add links to dependency array

  if (!links || links.length === 0) {
    return null
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mx-auto mt-[15px] flex items-center gap-2 px-3 py-2 bg-sky-500 text-white rounded-full shadow-lg hover:bg-sky-600 transition-colors"
      >
        <Link2 className="h-4 w-4" />
        <span className="text-sm font-medium">Links extras</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Links extras</h3>
              <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

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
                      {link.image ? (
                        <img
                          src={link.image}
                          alt={link.title}
                          className="h-10 w-10 object-cover rounded flex-shrink-0 mt-0.5" // Adjusted size and added rounded
                        />
                      ) : (
                        <ExternalLink className="h-5 w-5 text-sky-500 mt-0.5 flex-shrink-0" />
                      )}
                      <div>
                        <h4 className="font-medium text-sky-600">{link.title}</h4>
                        {link.description && <p className="text-sm text-gray-600 mt-1">{link.description}</p>}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

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