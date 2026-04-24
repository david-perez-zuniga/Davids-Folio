import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgPattern} />

      <div className={styles.card}>
        <h2 className={styles.title}>¡Hablemos!</h2>
        <p className={styles.subtitle}>
          ¿Tienes una idea en mente o simplemente quieres saludar? Me encantaría
          saber de ti. Mi buzón siempre está abierto para nuevas colaboraciones o
          retos técnicos.
        </p>

        <div className={styles.grid}>
          <a
            className={styles.contactCard}
            href="mailto:davidhumbertop503@gmail.com"
          >
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>Gmail</span>
              <span className={styles.contactValue}>davidhumbertop503@gmail.com</span>
            </div>
          </a>

          <a
            className={styles.contactCard}
            href="https://www.linkedin.com/in/humberto-zuniga-b42140386/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">group</span>
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>LinkedIn</span>
              <span className={styles.contactValue}>in/david</span>
            </div>
          </a>

          <a
            className={styles.contactCard}
            href="https://wa.me/50576357999?text=Hola%20David,%20vengo%20de%20tu%20portafolio!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">chat</span>
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>WhatsApp</span>
              <span className={styles.contactValue}>+505 7635 7999</span>
            </div>
          </a>

          <a
            className={styles.contactCard}
            href="https://github.com/destripador2000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">code</span>
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>GitHub</span>
              <span className={styles.contactValue}>github.com/david</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}