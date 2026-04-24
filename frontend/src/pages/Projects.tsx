import Swal from 'sweetalert2'
import styles from './Projects.module.css'

interface Project {
  title: string
  description: string
  techStack: string[]
  image: string
  demo?: string
  github?: string
}

const projects: Project[] = [
  {
    title: 'CodeEnglish',
    description:
      'Web para estudiar inglés con vocabulario, verbos, gramática y más. Stack: FastAPI, React, TypeScript, Vite, PostgreSQL.',
    techStack: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL'],
    image: '/CodeEnglish.jpeg',
    demo: 'https://code-english-beta.vercel.app/',
    github: 'https://github.com/destripador2000/CodeEnglish.git',
  },
  {
    title: 'Analítica Predictiva',
    description:
      'Sistema de procesamiento de datos en tiempo real para predecir tendencias de mercado utilizando algoritmos de machine learning.',
    techStack: ['Python', 'Pandas'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUdG9CJBasEiZcx_2BjxxN9eE5Qu2stjCumOznmgT-t5znwsxQ4jMNgzN5u8OB21wSjqLWtaVnUo-ixwa2FeXxnKJwCMMk0XBUVAkaEqusWnE3PsScXo0Kgms8D_nC8eX0zU4Cd6_qYDxThQZeZy0F1WTwVUEXpNYVzK4z75AEqWJ2ACpxZUeNUslpQgZsnZ3eMkgGO5d2ijl7DAfCy8EcKjMALSNuuR2vQgGPZj6GbBaeZdHUCSoMCWWqLuICyizq2WZNrRoW-EvF',
  },
  {
    title: 'Gestor de Tareas AI',
    description:
      'Asistente inteligente que organiza flujos de trabajo basándose en prioridades semánticas y plazos de entrega automatizados.',
    techStack: ['Python', 'OpenAI API', 'FastAPI'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAHkmyRdx4QrMUHc8ZKsShxDLig6Mj_RQaz5zhw7sGdOwMlyfBeN5jVJtQeeqF6Txqh7fFFjxxdDvc2Z03B8bcTnbDTz5xWdjElkfqGqSbZZlIPyIHOgehZ4LXJ9D6OsfuaSy9OxLzmh5aGBW8hNTYeA7zsMfzh7n7JZoIwC8GBVVPyWE4PgQjwhDUjmy9n0L4QaziZziQnljVLynneLfh3faSK4-1534QSNVsxUNOgDlPMM0brkbmDxKUBZ2LqiXroos27ACkyagh',
  },
]

export default function Projects() {
  const handleDemoClick = (demo?: string) => {
    if (demo && demo !== '#') {
      window.open(demo, '_blank', 'noopener,noreferrer')
    } else {
      Swal.fire({
        title: 'Upss!! Aún está en desarrollo',
        text: 'No te preocupes. Proximamente podrás ver en lo que estoy trabajando',
        icon: 'info',
        background: '#f9f9ff',
        color: '#111c2d',
        confirmButtonColor: '#00355f',
        confirmButtonText: 'De acuerdo',
      })
    }
  }

  return (
    <section className={styles.hero}>
      <div className={styles.bgPattern} />

      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.card}>
            <div className={styles.cardImage}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.techTags}>
                {project.techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className={`${styles.techTag} ${index > 0 ? styles.techTagSecondary : ''}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.cardActions}>
                <button
                  className={styles.btnPrimary}
                  onClick={() => handleDemoClick(project.demo)}
                >
                  Ver proyecto
                </button>
                <a
                  href={project.github || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnOutline}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>code</span>
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}