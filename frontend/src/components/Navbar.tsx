import { Link, useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import styles from './Navbar.module.css'

const navLinks = [
  { path: '/', label: 'INICIO' },
  { path: '/projects', label: 'PROYECTOS' },
  { path: '/about', label: 'SOBRE MI', comingSoon: true },
  { path: '/contact', label: 'CONTACTAR' },
]

const handleComingSoon = (e: React.MouseEvent, comingSoon?: boolean) => {
  if (comingSoon) {
    e.preventDefault()
    Swal.fire({
      title: 'Próximamente',
      text: 'Esta sección está en desarrollo. ¡Muy pronto estará disponible!',
      icon: 'info',
      background: '#f9f9ff',
      color: '#111c2d',
      confirmButtonColor: '#00355f',
      confirmButtonText: 'De acuerdo',
    })
  }
}

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
              onClick={(e) => handleComingSoon(e, link.comingSoon)}
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