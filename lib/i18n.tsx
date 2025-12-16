"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface I18nContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.remote": "Remote Work",
    "nav.business": "Business Solutions",
    "nav.projects": "Projects",
    "nav.stack": "Stack & Process",
    "nav.mindset": "Mindset",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Building Production Systems That Drive Business Impact",
    "hero.subtitle":
      "Senior software engineer with 9+ years of experience. Former IT Manager & CTO-level expertise. Available for remote work and custom business solutions.",
    "hero.cta.recruiter": "I'm a Recruiter / Looking for Remote Talent",
    "hero.cta.business": "I'm a Business / Looking for a Solution",

    // Trust indicators
    "trust.years": "Years Experience",
    "trust.cto": "Leadership Level",
    "trust.production": "Production Ready",
    "trust.fullstack": "Full Stack Expertise",

    // Audience section
    "audience.title": "Who I Work With",
    "audience.recruiters.title": "Recruiters & Remote Teams",
    "audience.recruiters.desc":
      "Looking for a senior engineer who can work independently, solve complex problems, and deliver reliable code without constant supervision.",
    "audience.recruiters.point1": "Autonomous remote work with async communication",
    "audience.recruiters.point2": "Legacy system maintenance and modernization",
    "audience.recruiters.point3": "Production incident response and debugging",
    "audience.recruiters.cta": "View Remote Engineer Profile",
    "audience.business.title": "Businesses & Companies",
    "audience.business.desc":
      "Need custom software solutions, internal tools, or someone to take ownership of your technical challenges without the overhead of a full-time hire.",
    "audience.business.point1": "Custom internal systems and dashboards",
    "audience.business.point2": "Process automation and integrations",
    "audience.business.point3": "Technical ownership and ongoing support",
    "audience.business.cta": "Explore Business Solutions",

    // Problems section
    "problems.title": "Problems I Solve",
    "problems.subtitle":
      "Technical challenges and business problems require different approaches but the same level of expertise",
    "problems.technical": "Technical Problems",
    "problems.business": "Business Problems",
    "problems.infrastructure": "Infrastructure Problems",

    // CTA
    "cta.title": "Ready to Work Together?",
    "cta.subtitle":
      "Whether you're hiring for a remote position or need custom software built, let's discuss how I can help.",
    "cta.button": "Get in Touch",

    // Remote Engineer Page
    "remote.hero.title": "Remote Software Engineer",
    "remote.hero.subtitle":
      "Experienced in autonomous work, async communication, and delivering production-ready code across distributed teams.",
    "remote.working.title": "Remote Working Experience",
    "remote.working.desc":
      "I've worked remotely for 6+ years across multiple time zones, collaborating with international teams and delivering consistent results.",
    "remote.skills.title": "Technical Skills",
    "remote.availability.title": "Work Availability",
    "remote.availability.desc":
      "Available for full-time remote positions, contract work, and part-time engagements. Open to various time zones and flexible working arrangements.",
    "remote.criteria.title": "What I Look For",
    "remote.criteria.desc":
      "Clear expectations, autonomous work environment, quality over speed, modern stack, and meaningful technical challenges.",
    "remote.criteria.cta": "View Full Technical Criteria",
    "remote.contact.title": "Let's Talk",
    "remote.contact.desc":
      "If you're looking for a reliable senior engineer who can work independently and deliver quality code, let's connect.",
    "remote.contact.cta": "Contact Me",

    // Contact page
    "contact.title": "Get in Touch",
    "contact.subtitle": "Whether you're hiring for a remote position or need a custom solution, I'm here to help.",
    "contact.email": "Email",
    "contact.response": "Response Time",
    "contact.response.time": "Within 24 hours",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.remote": "Trabajo Remoto",
    "nav.business": "Soluciones Empresariales",
    "nav.projects": "Proyectos",
    "nav.stack": "Stack y Proceso",
    "nav.mindset": "Mentalidad",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Construyendo Sistemas de Producción con Impacto Empresarial",
    "hero.subtitle":
      "Ingeniero de software senior con más de 9 años de experiencia. Ex-gerente de TI y experiencia a nivel CTO. Disponible para trabajo remoto y soluciones empresariales personalizadas.",
    "hero.cta.recruiter": "Soy Reclutador / Busco Talento Remoto",
    "hero.cta.business": "Soy una Empresa / Busco una Solución",

    // Trust indicators
    "trust.years": "Años de Experiencia",
    "trust.cto": "Nivel de Liderazgo",
    "trust.production": "Listo para Producción",
    "trust.fullstack": "Experiencia Full Stack",

    // Audience section
    "audience.title": "Con Quién Trabajo",
    "audience.recruiters.title": "Reclutadores y Equipos Remotos",
    "audience.recruiters.desc":
      "Buscan un ingeniero senior capaz de trabajar de forma independiente, resolver problemas complejos y entregar código confiable sin supervisión constante.",
    "audience.recruiters.point1": "Trabajo remoto autónomo con comunicación asíncrona",
    "audience.recruiters.point2": "Mantenimiento y modernización de sistemas legacy",
    "audience.recruiters.point3": "Respuesta a incidentes y depuración en producción",
    "audience.recruiters.cta": "Ver Perfil de Ingeniero Remoto",
    "audience.business.title": "Empresas y Compañías",
    "audience.business.desc":
      "Necesitan soluciones de software personalizadas, herramientas internas, o alguien que se responsabilice de sus desafíos técnicos sin el costo de una contratación a tiempo completo.",
    "audience.business.point1": "Sistemas internos y dashboards personalizados",
    "audience.business.point2": "Automatización de procesos e integraciones",
    "audience.business.point3": "Propiedad técnica y soporte continuo",
    "audience.business.cta": "Explorar Soluciones Empresariales",

    // Problems section
    "problems.title": "Problemas que Resuelvo",
    "problems.subtitle":
      "Los desafíos técnicos y problemas empresariales requieren enfoques diferentes pero el mismo nivel de experiencia",
    "problems.technical": "Problemas Técnicos",
    "problems.business": "Problemas Empresariales",
    "problems.infrastructure": "Problemas de Infraestructura",

    // CTA
    "cta.title": "¿Listo para Trabajar Juntos?",
    "cta.subtitle":
      "Ya sea que estés contratando para una posición remota o necesites software personalizado, hablemos sobre cómo puedo ayudar.",
    "cta.button": "Ponte en Contacto",

    // Remote Engineer Page
    "remote.hero.title": "Ingeniero de Software Remoto",
    "remote.hero.subtitle":
      "Con experiencia en trabajo autónomo, comunicación asíncrona y entrega de código listo para producción en equipos distribuidos.",
    "remote.working.title": "Experiencia en Trabajo Remoto",
    "remote.working.desc":
      "He trabajado de forma remota durante más de 6 años en múltiples zonas horarias, colaborando con equipos internacionales y entregando resultados consistentes.",
    "remote.skills.title": "Habilidades Técnicas",
    "remote.availability.title": "Disponibilidad Laboral",
    "remote.availability.desc":
      "Disponible para posiciones remotas a tiempo completo, trabajo por contrato y compromisos a tiempo parcial. Abierto a varias zonas horarias y acuerdos de trabajo flexibles.",
    "remote.criteria.title": "Lo Que Busco",
    "remote.criteria.desc":
      "Expectativas claras, entorno de trabajo autónomo, calidad sobre velocidad, stack moderno y desafíos técnicos significativos.",
    "remote.criteria.cta": "Ver Criterios Técnicos Completos",
    "remote.contact.title": "Hablemos",
    "remote.contact.desc":
      "Si buscas un ingeniero senior confiable que pueda trabajar de forma independiente y entregar código de calidad, conectemos.",
    "remote.contact.cta": "Contáctame",

    // Contact page
    "contact.title": "Ponte en Contacto",
    "contact.subtitle":
      "Ya sea que estés contratando para una posición remota o necesites una solución personalizada, estoy aquí para ayudar.",
    "contact.email": "Correo Electrónico",
    "contact.response": "Tiempo de Respuesta",
    "contact.response.time": "Dentro de 24 horas",
  },
}

export { translations }

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language
    if (saved && (saved === "en" || saved === "es")) {
      setLangState(saved)
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem("lang", newLang)
  }

  const t = (key: string): string => {
    return translations[lang][key as keyof typeof translations.en] || key
  }

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider")
  }
  return context
}
