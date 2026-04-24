import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const navLinks = [
  { path: '/', label: 'INICIO' },
  { path: '/projects', label: 'PROYECTOS' },
  { path: '/about', label: 'SOBRE MI' },
  { path: '/contact', label: 'CONTACTAR' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={`${styles.icon} material-symbols-outlined`}>terminal</span>
          <span className={styles.logoText}>DevPortfolio</span>
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${styles.navLink} ${
                location.pathname === link.path ? styles.active : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}