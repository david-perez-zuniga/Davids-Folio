import Button from '../components/Button'
import styles from './Home.module.css'

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />

      <div className={styles.panel}>
        <h2 className={styles.greeting}>Hola Soy David</h2>

        <div className={styles.roleContainer}>
          <h1 className={styles.role}>PYTHON DEV</h1>
          <div className={styles.underline} />
        </div>

        <p className={styles.description}>
          Creando soluciones web de alta precisión con Python. Enfocado en arquitectura limpia, backends escalables y un rendimiento elegante.
        </p>

        <div className={styles.actions}>
          <Button to="/projects" icon="arrow_forward">
            Ver Proyectos
          </Button>
        </div>
      </div>
    </section>
  )
}