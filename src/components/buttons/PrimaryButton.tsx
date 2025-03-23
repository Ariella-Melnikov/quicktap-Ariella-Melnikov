import { ReactNode, ButtonHTMLAttributes } from 'react'
import './PrimaryButton.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  icon?: ReactNode
}

export function PrimaryButton({ children, icon, ...props }: Props) {
  return (
    <button className="primary-button" {...props}>
      {icon && <span className="icon">{icon}</span>}
      <span className="label">{children}</span>
    </button>
  )
}