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

    // Hero (SEO reforzado)
    "hero.title": "Senior Software Engineer Building Production Systems for Business Impact",
    "hero.subtitle":
      "Senior software engineer with 9+ years of experience delivering production-ready systems. Former IT Manager with CTO-level expertise. Available for remote roles and custom business solutions.",
    "hero.cta.recruiter": "I'm a Recruiter / Hiring Remote Talent",
    "hero.cta.business": "I'm a Business / Need a Technical Solution",

    // Trust indicators
    "trust.years": "Years of Experience",
    "trust.cto": "CTO-Level Leadership",
    "trust.production": "Production-Ready Systems",
    "trust.fullstack": "Full-Stack Expertise",

    // Audience section
    "audience.title": "Who I Work With",
    "audience.recruiters.title": "Recruiters & Remote Engineering Teams",
    "audience.recruiters.desc":
      "Teams looking for a senior software engineer who works autonomously, communicates asynchronously, and delivers reliable production code without constant supervision.",
    "audience.recruiters.point1": "Autonomous remote work with async communication",
    "audience.recruiters.point2": "Legacy system maintenance and modernization",
    "audience.recruiters.point3": "Production incident response and advanced debugging",
    "audience.recruiters.cta": "View Remote Engineer Profile",

    "audience.business.title": "Businesses & Growing Companies",
    "audience.business.desc":
      "Companies that need custom software solutions, internal tools, or clear technical ownership without the overhead of a full-time in-house team.",
    "audience.business.point1": "Custom internal systems and business dashboards",
    "audience.business.point2": "Process automation and system integrations",
    "audience.business.point3": "End-to-end technical ownership and long-term support",
    "audience.business.cta": "Explore Business Solutions",

    // Problems section (SEO fuerte)
    "problems.title": "Business and Technical Problems I Solve in Production Systems",
    "problems.subtitle":
      "I help businesses and remote teams solve technical, operational, and infrastructure challenges that directly impact system stability, scalability, and business growth.",
    "problems.technical": "Technical Problems in Production Environments",
    "problems.technical.item1": "Legacy code modernization",
    "problems.technical.item2": "Performance bottlenecks",
    "problems.technical.item3": "Production bugs and incidents",
    "problems.technical.item4": "Scalability constraints",
    "problems.technical.item5": "Technical debt management",

    "problems.business": "Business and Operational Problems",
    "problems.business.item1": "Manual processes that waste time",
    "problems.business.item2": "Outdated and unmaintained systems",
    "problems.business.item3": "Lack of technical ownership",
    "problems.business.item4": "Data fragmentation",
    "problems.business.item5": "Integration challenges",
    
    "problems.infrastructure": "Infrastructure and Cloud Problems",
    "problems.infrastructure.item1": "Deployment complexity",
    "problems.infrastructure.item2": "Database optimization",
    "problems.infrastructure.item3": "Cloud infrastructure setup",
    "problems.infrastructure.item4": "CI/CD pipeline creation",
    "problems.infrastructure.item5": "Monitoring and observability",

    // CTA
    "cta.title": "Ready to Work Together?",
    "cta.subtitle":
      "Whether you're hiring for a senior remote position or need custom software built for your business, let's discuss how I can help.",
    "cta.button": "Get in Touch",

    // Remote Engineer Page
    "remote.hero.title": "Senior Remote Software Engineer",
    "remote.hero.subtitle":
      "Experienced in autonomous remote work, async communication, and delivering stable, production-ready systems for distributed teams.",
    "remote.working.title": "Remote Working Experience",
    "remote.working.desc":
      "Over 6+ years working remotely across multiple time zones, collaborating with international teams and delivering consistent, high-quality results.",
    "remote.skills.title": "Core Technical Skills",
    "remote.availability.title": "Work Availability",
    "remote.availability.desc":
      "Available for full-time remote roles, contract-based work, and part-time engagements. Flexible across time zones and working arrangements.",
    "remote.criteria.title": "What I Look For in Remote Roles",
    "remote.criteria.desc":
      "Clear expectations, autonomous environments, quality over speed, modern technology stacks, and meaningful technical challenges.",
    "remote.criteria.cta": "View Full Technical Criteria",
    "remote.contact.title": "Let's Talk",
    "remote.contact.desc":
      "If you're looking for a reliable senior engineer who can take ownership and deliver production-grade solutions, let's connect.",
    "remote.contact.cta": "Contact Me",

    // Contact page
    "contact.title": "Get in Touch",
    "contact.subtitle":
      "Whether you're hiring a senior remote engineer or need a custom technical solution, I'm available to help.",
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

    // Hero (SEO reforzado)
    "hero.title": "Ingeniero de Software Senior Construyendo Sistemas de Producción con Impacto Empresarial",
    "hero.subtitle":
      "Ingeniero de software senior con más de 9 años de experiencia en sistemas en producción. Ex-gerente de TI con experiencia a nivel CTO. Disponible para trabajo remoto y soluciones empresariales personalizadas.",
    "hero.cta.recruiter": "Soy Reclutador / Busco Talento Remoto",
    "hero.cta.business": "Soy Empresa / Necesito una Solución Técnica",

    // Trust indicators
    "trust.years": "Años de Experiencia",
    "trust.cto": "Liderazgo Nivel CTO",
    "trust.production": "Sistemas Listos para Producción",
    "trust.fullstack": "Experiencia Full Stack",

    // Audience section
    "audience.title": "Con Quién Trabajo",
    "audience.recruiters.title": "Reclutadores y Equipos de Ingeniería Remotos",
    "audience.recruiters.desc":
      "Equipos que buscan un ingeniero senior capaz de trabajar de forma autónoma, comunicarse de manera asíncrona y entregar código confiable en producción.",
    "audience.recruiters.point1": "Trabajo remoto autónomo con comunicación asíncrona",
    "audience.recruiters.point2": "Mantenimiento y modernización de sistemas legacy",
    "audience.recruiters.point3": "Gestión de incidentes y depuración en producción",
    "audience.recruiters.cta": "Ver Perfil de Ingeniero Remoto",

    "audience.business.title": "Empresas y Compañías en Crecimiento",
    "audience.business.desc":
      "Empresas que necesitan soluciones de software a la medida, herramientas internas o una clara propiedad técnica sin contratar un equipo completo.",
    "audience.business.point1": "Sistemas internos y dashboards empresariales",
    "audience.business.point2": "Automatización de procesos e integraciones de sistemas",
    "audience.business.point3": "Propiedad técnica completa y soporte continuo",
    "audience.business.cta": "Explorar Soluciones Empresariales",

    // Problems section (SEO fuerte)
    "problems.title": "Problemas Técnicos y Empresariales que Resuelvo en Sistemas de Producción",
    "problems.subtitle":
      "Ayudo a empresas y equipos remotos a resolver problemas técnicos, operativos y de infraestructura que impactan directamente en la estabilidad, escalabilidad y crecimiento del negocio.",
    "problems.technical": "Problemas Técnicos en Producción",
    "problems.technical.item1": "Modernización de código legacy",
    "problems.technical.item2": "Cuellos de botella de rendimiento",
    "problems.technical.item3": "Errores e incidentes en producción",
    "problems.technical.item4": "Limitaciones de escalabilidad",
    "problems.technical.item5": "Gestión de deuda técnica",
    "problems.business": "Problemas Empresariales y Operativos",
    "problems.business.item1": "Procesos manuales que desperdician tiempo",
    "problems.business.item2": "Sistemas obsoletos sin mantenimiento",
    "problems.business.item3": "Falta de propiedad técnica",
    "problems.business.item4": "Fragmentación de datos",
    "problems.business.item5": "Desafíos de integración",
    "problems.infrastructure": "Problemas de Infraestructura y Nube",
    "problems.infrastructure.item1": "Complejidad en despliegues",
    "problems.infrastructure.item2": "Optimización de bases de datos",
    "problems.infrastructure.item3": "Configuración de infraestructura en la nube",
    "problems.infrastructure.item4": "Creación de pipelines CI/CD",
    "problems.infrastructure.item5": "Monitoreo y observabilidad",

    // CTA
    "cta.title": "¿Listo para Trabajar Juntos?",
    "cta.subtitle":
      "Ya sea que estés contratando un ingeniero senior remoto o necesites software a la medida para tu empresa, hablemos.",
    "cta.button": "Ponte en Contacto",

    // Remote Engineer Page
    "remote.hero.title": "Ingeniero de Software Senior Remoto",
    "remote.hero.subtitle":
      "Experiencia en trabajo remoto autónomo, comunicación asíncrona y entrega de sistemas estables listos para producción.",
    "remote.working.title": "Experiencia en Trabajo Remoto",
    "remote.working.desc":
      "Más de 6 años trabajando de forma remota con equipos internacionales, entregando resultados consistentes en entornos distribuidos.",
    "remote.skills.title": "Habilidades Técnicas Clave",
    "remote.availability.title": "Disponibilidad Laboral",
    "remote.availability.desc":
      "Disponible para posiciones remotas de tiempo completo, contratos por proyecto y colaboraciones de medio tiempo.",
    "remote.criteria.title": "Qué Busco en un Rol Remoto",
    "remote.criteria.desc":
      "Expectativas claras, entornos autónomos, enfoque en calidad, stacks modernos y retos técnicos reales.",
    "remote.criteria.cta": "Ver Criterios Técnicos Completos",
    "remote.contact.title": "Hablemos",
    "remote.contact.desc":
      "Si buscas un ingeniero senior confiable que se haga cargo de sistemas críticos, conectemos.",
    "remote.contact.cta": "Contáctame",

    // Contact page
    "contact.title": "Contacto",
    "contact.subtitle":
      "Ya sea para contratación remota o soluciones técnicas personalizadas, estoy disponible para ayudarte.",
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
