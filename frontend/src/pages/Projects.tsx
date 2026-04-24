import { useState } from 'react'
import Swal from 'sweetalert2'
import styles from './Projects.module.css'

interface Project {
  title: string
  description: string
  techStack: string[]
  image: string
  demo?: string
  github?: string
  comingSoon?: boolean
}

const projects: Project[] = [
  {
    title: 'Iron Log',
    description:
      'Aplicación full-stack para el seguimiento de rutinas de gimnasio. Gestiona pesos, repeticiones y progreso histórico.',
    techStack: ['Html + CSS', 'SQLite', 'FastAPI', 'TypeScript'],
    image: '/Assets/Image/fondo_body.jpg',
    demo: '#',
    github: 'https://github.com/destripador2000/IronLog',
  },
  {
    title: 'Coming Soon',
    description:
      'Nuevo proyecto en fase de planificación. Preparando el stack tecnológico para el siguiente nivel.',
    techStack: ['Loading...'],
    image: 'https://placehold.co/600x400/0f0f0f/333333?text=LOCKED',
    comingSoon: true,
  },
  {
    title: 'Coming Soon',
    description:
      'Próximamente más desarrollos enfocados en soluciones web modernas y escalables.',
    techStack: ['Loading...'],
    image: 'https://placehold.co/600x400/0f0f0f/333333?text=LOCKED',
    comingSoon: true,
  },
]

export default function Projects() {
  const [showDemoAlert] = useState(() => {
    return (e: React.MouseEvent<HTMLAnchorElement>, demo?: string) => {
      e.preventDefault()
      if (demo === '#') {
        Swal.fire({
          title: 'Upss!! Aún está en desarrollo',
          text: 'No te preocupes. Proximamente podrás ver en lo que estoy trabajando',
          icon: 'info',
          background: '#1e1e1e',
          color: '#ffffff',
          confirmButtonColor: '#00d26a',
          confirmButtonText: 'De acuerdo',
        })
      }
    }
  })

  return (
    <section className={styles.projectsSection}>
      <h2 className="section-title">
        FEATURED <span className="neon-text">WORKOUTS</span>
      </h2>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <article
            key={project.title}
            className={`${styles.projectCard} ${project.comingSoon ? styles.comingSoon : ''}`}
          >
            <div className={styles.cardImage}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>

              <div className={styles.techStack}>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`${styles.techTag} ${project.comingSoon ? styles.skeleton : ''}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.cardLinks}>
                <a
                  href={project.demo || '#'}
                  className={`${styles.btnCard} ${!project.comingSoon ? '' : styles.disabled}`}
                  onClick={(e) => showDemoAlert(e, project.demo)}
                >
                  Demo
                </a>
                {!project.comingSoon && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.btnCard} ${styles.outline}`}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}