import { ReactNode, ButtonHTMLAttributes } from 'react'
import './SecondaryButton.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function SecondaryButton({ children, ...props }: Props) {
  return (
    <button className="secondary-button" {...props}>
      {children}
    </button>
  )
}