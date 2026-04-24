import { useEffect, useRef } from 'react'
import styles from './About.module.css'

interface Skill {
  name: string
  percentage: string
}

const skills: Skill[] = [
  { name: 'TypeScript', percentage: '75%' },
  { name: 'HTML + CSS / Frontend', percentage: '75%' },
  { name: 'FastAPI / Backend', percentage: '90%' },
  { name: 'SQL / Databases', percentage: '90%' },
]

export default function About() {
  const progressBarsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const timeout = setTimeout(() => {
      progressBarsRef.current.forEach((bar) => {
        if (bar) {
          bar.style.width = bar.getAttribute('data-target') || '0%'
        }
      })
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className={styles.aboutContainer}>
      <h2 className="section-title">
        PLAYER <span className="neon-text">STATS</span>
      </h2>

      <div className={styles.profileGrid}>
        <aside className={styles.profileCard}>
          <div className={styles.avatarFrame}>
            <img
              src="https://placehold.co/400x400/1a1a1a/00ff9d?text=DAVID"
              alt="Profile Pic"
            />
          </div>
          <div className={styles.profileData}>
            <h3 className={styles.profileName}>DAVID PEREZ</h3>
            <p className={styles.profileRole}>Backend Developer</p>
            <hr className={styles.divider} />
            <ul className={styles.dataList}>
              <li>
                <span>Edad:</span> 20
              </li>
              <li>
                <span>Ciudad:</span> Managua
              </li>
              <li>
                <span>Proximamente:</span>Ingeniero
              </li>
            </ul>
            <a
              href="/Assets/Documents/Curriculum David.pdf"
              download="CV-David Pérez.pdf"
              className={styles.btnCv}
            >
              DESCARGAR CV
            </a>
          </div>
        </aside>

        <section className={styles.statsContent}>
          <div className={styles.bioBox}>
            <h3>{'>'}Sobre mí</h3>
            <p>
              Soy un joven desarrollador apasionado por construir sistemas
              escalables y eficientes. Me encanta desarrollar, hacer ejercicio
              y sobre todo lograr lo imposible. Quiero compartirte lo que sé hacer
              y lo más importante quién soy. ¿Estás listo?, acompañame.
            </p>
          </div>

          <div className={styles.skillsBox}>
            <h3>{'>'}Conocimientos</h3>

            {skills.map((skill, index) => (
              <div key={skill.name} className={styles.skillItem}>
                <div className={styles.skillInfo}>
                  <span>{skill.name}</span>
                  <span>{skill.percentage}</span>
                </div>
                <div className={styles.progressBar}>
                  <div
                    ref={(el) => {
                      if (el) progressBarsRef.current[index] = el
                    }}
                    className={styles.progressFill}
                    style={{ width: '0%' }}
                    data-target={skill.percentage}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}