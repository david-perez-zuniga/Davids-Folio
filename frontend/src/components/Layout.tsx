import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Layout.module.css'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <div className={styles.bgOverlay} />
      
      {!isHome && (
        <nav className={styles.backNav}>
          <Link to="/" className={styles.btnBack}>
            <span className={styles.arrow}>←</span> INICIO
          </Link>
        </nav>
      )}
      
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}