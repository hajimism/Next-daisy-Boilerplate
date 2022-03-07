import { FC } from "react"

interface ExLinkProps {
  href: string
  className?: string
}

export const ExLink: FC<ExLinkProps> = ({ href, children, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={` text-cyan-800 no-underline hover:underline ${className}`}
    >
      {children}
    </a>
  )
}
