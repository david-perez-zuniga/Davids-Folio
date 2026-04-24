import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const phrases = ['Scalable Backends', 'Clean Frontend', 'My Dreams']

export default function Home() {
  const [text, setText] = useState('')
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      const current = phrases[currentPhrase]
      
      if (isDeleting) {
        setText(current.substring(0, index - 1))
        setIndex(index - 1)
      } else {
        setText(current.substring(0, index + 1))
        setIndex(index + 1)
      }

      if (!isDeleting && index === current.length) {
        setIsDeleting(true)
      } else if (isDeleting && index === 0) {
        setIsDeleting(false)
        setCurrentPhrase((currentPhrase + 1) % phrases.length)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [currentPhrase, isDeleting, index])

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h2 className={styles.subtitle}>HOLA, SOY DAVID</h2>
        <h1 className={styles.title}>
          BACKEND <span className="neon-text">DEV</span>
        </h1>

        <div className={styles.dynamicRoleContainer}>
          <span className={styles.rolePrefix}>I build </span>
          <span className={styles.roleText}>{text}</span>
          <span className={styles.cursor}>|</span>
        </div>

        <div className={styles.ctaContainer}>
          <Link to="/projects" className={`${styles.btn} ${styles.btnPrimary}`}>
            VER PROYECTOS
          </Link>
          <Link to="/about" className={`${styles.btn} ${styles.btnOutline}`}>
            SOBRE MÍ
          </Link>
          <Link to="/contact" className={`${styles.btn} ${styles.btnOutline}`}>
            CONTACTAR
          </Link>
        </div>
      </div>
    </section>
  )
}