import { cn } from "../lib/utils"

interface CTAButtonProps {
  text: string
  href: string
  primary?: boolean
  large?: boolean
}

export function CTAButton({ text, href, primary, large }: CTAButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all rounded-md group",
        large && "px-8 py-4 text-lg",
        primary
          ? "bg-sky-500 text-white hover:bg-sky-600"
          : "bg-transparent border border-sky-300 text-gray-700 hover:bg-sky-50",
      )}
    >
      {primary && (
        <>
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sky-400/0 via-sky-400/30 to-sky-400/0 group-hover:animate-shimmer"></span>
          <span className="absolute bottom-0 left-0 h-1 bg-sky-600"></span>
        </>
      )}
      <span className="relative">{text}</span>
    </a>
  )
}
