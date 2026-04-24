import type { ReactNode, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  icon?: string
  to?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  icon,
  to,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
        {icon && <span className={styles.icon}>{icon}</span>}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  )
}