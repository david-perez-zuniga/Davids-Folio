import { useState } from 'react'
import Swal from 'sweetalert2'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      Swal.fire({
        title: 'Mensaje entregado exitosamente',
        text: 'Gracias por saludar. Pronto me pondré en contacto contigo',
        icon: 'success',
        background: '#1e1e1e',
        color: '#ffffff',
        confirmButtonColor: '#00d26a',
        confirmButtonText: 'De acuerdo',
      })

      setFormData({ name: '', email: '', message: '' })
    } catch {
      Swal.fire({
        title: 'Error',
        text: 'Algo salió mal. Intenta de nuevo',
        icon: 'error',
        background: '#1e1e1e',
        color: '#ffffff',
        confirmButtonColor: '#00d26a',
        confirmButtonText: 'De acuerdo',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.contactContainer}>
      <h2 className="section-title">
        ¿Quieres saber más? <span className="neon-text">Contactame</span>
      </h2>

      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <h3>¿Listo para empezar un proyecto?</h3>
          <p>
            Ya sea que tengas una idea de "Gym Tech", necesites un backend
            robusto o simplemente quieras saludar. Estoy siempre abierto
            a nuevos retos.
          </p>

          <div className={styles.infoItem}>
            <span className={styles.icon}>📱</span>
            <a
              href="https://wa.me/50576357999?text=Hola%20David,%20vengo%20de%20tu%20portafolio!"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoLink}
            >
              Enviar WhatsApp
            </a>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.icon}>🐙</span>
            <a
              href="https://github.com/destripador2000"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoLink}
            >
              github.com/david
            </a>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.icon}>💼</span>
            <a
              href="https://www.linkedin.com/in/humberto-zuniga-b42140386/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoLink}
            >
              linkedin.com/in/david
            </a>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Cuéntame tu idea..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className={styles.btnSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
          </button>
        </form>
      </div>
    </section>
  )
}