import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © 2024 Python Developer Portfolio. Built with Precision.
        </p>
        <div className={styles.links}>
          <a href="https://github.com/destripador2000" target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/humberto-zuniga-b42140386/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            LinkedIn
          </a>
          <a href="https://wa.me/50576357999" target="_blank" rel="noopener noreferrer" className={styles.link}>
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}