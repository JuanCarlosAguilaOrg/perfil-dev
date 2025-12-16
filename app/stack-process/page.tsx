"use client"

import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { useI18n } from "@/lib/i18n"

export default function StackProcessPage() {
  const { lang } = useI18n()

  const content = {
    en: {
      title: "Stack & Process",
      subtitle: "Tools, technologies, and methodologies I rely on to deliver reliable software.",

      stackTitle: "Technical Stack",

      backendTitle: "Backend Development",
      backend: [
        ["Laravel", "API development, complex business logic"],
        ["FastAPI", "High-performance Python APIs"],
        ["Node.js", "Real-time systems, microservices"],
        ["REST & GraphQL", "API design and implementation"],
        ["Authentication", "JWT, OAuth, session management"],
        ["Background Jobs", "Queue systems, scheduled tasks"],
      ],

      frontendTitle: "Frontend Development",
      frontend: [
        ["React", "SPAs, dashboards, complex UIs"],
        ["Next.js", "Full-stack applications, SSR"],
        ["Vue.js", "Progressive enhancement, admin panels"],
        ["TypeScript", "Type-safe frontend code"],
        ["Tailwind CSS", "Rapid UI development"],
        ["State Management", "Context, Zustand, SWR"],
      ],

      dbTitle: "Databases & Storage",
      databases: [
        ["PostgreSQL", "Primary relational database"],
        ["MySQL", "Legacy system support"],
        ["Redis", "Caching, session storage, queues"],
        ["Database Design", "Schema design, migrations, optimization"],
        ["Query Optimization", "Indexing, explain plans"],
        ["Backups", "Automated backup strategies"],
      ],

      devopsTitle: "DevOps & Infrastructure",
      devops: [
        ["Docker", "Containerization, reproducible environments"],
        ["CI/CD", "GitHub Actions, GitLab CI"],
        ["AWS", "EC2, RDS, S3, Lambda"],
        ["Linux", "Server administration, shell scripting"],
        ["Monitoring", "Application and server monitoring"],
        ["Git", "Version control, branching strategies"],
      ],

      processTitle: "Development Process",
      process: [
        {
          title: "1. Analysis & Planning",
          desc: "Understand the problem deeply before writing code. Clarify requirements, identify edge cases, and document assumptions.",
          deliverable: "Clear task breakdown with acceptance criteria",
        },
        {
          title: "2. Design & Architecture",
          desc: "Design database schema, API contracts, and component structure. Consider scalability and maintainability.",
          deliverable: "Technical design document or architecture diagram",
        },
        {
          title: "3. Development",
          desc: "Write clean, testable code. Commit frequently and handle errors properly.",
          deliverable: "Working feature in feature branch",
        },
        {
          title: "4. Testing",
          desc: "Test happy paths and edge cases. Manual and automated testing where it matters.",
          deliverable: "Tested feature ready for review",
        },
        {
          title: "5. Deployment",
          desc: "Deploy to staging, verify, then production. Monitor immediately and prepare rollback.",
          deliverable: "Feature live in production",
        },
        {
          title: "6. Support & Iteration",
          desc: "Monitor usage, gather feedback, and iterate based on real-world usage.",
          deliverable: "Stable feature with monitoring and documentation",
        },
      ],
    },

    es: {
      title: "Stack y Proceso",
      subtitle: "Herramientas, tecnologías y metodologías que utilizo para entregar software confiable.",

      stackTitle: "Stack Técnico",

      backendTitle: "Desarrollo Backend",
      backend: [
        ["Laravel", "Desarrollo de APIs y lógica de negocio compleja"],
        ["FastAPI", "APIs en Python de alto rendimiento"],
        ["Node.js", "Sistemas en tiempo real y microservicios"],
        ["REST & GraphQL", "Diseño e implementación de APIs"],
        ["Autenticación", "JWT, OAuth, manejo de sesiones"],
        ["Procesos en Segundo Plano", "Colas y tareas programadas"],
      ],

      frontendTitle: "Desarrollo Frontend",
      frontend: [
        ["React", "SPAs, dashboards e interfaces complejas"],
        ["Next.js", "Aplicaciones full-stack y SSR"],
        ["Vue.js", "Mejora progresiva y paneles administrativos"],
        ["TypeScript", "Código tipado y seguro"],
        ["Tailwind CSS", "Desarrollo rápido de UI"],
        ["Gestión de Estado", "Context, Zustand, SWR"],
      ],

      dbTitle: "Bases de Datos y Almacenamiento",
      databases: [
        ["PostgreSQL", "Base de datos relacional principal"],
        ["MySQL", "Soporte para sistemas legacy"],
        ["Redis", "Caché, sesiones y colas"],
        ["Diseño de BD", "Esquemas, migraciones y optimización"],
        ["Optimización de Consultas", "Índices y análisis de planes"],
        ["Respaldos", "Estrategias automáticas de backup"],
      ],

      devopsTitle: "DevOps e Infraestructura",
      devops: [
        ["Docker", "Contenedores y entornos reproducibles"],
        ["CI/CD", "GitHub Actions y GitLab CI"],
        ["AWS", "EC2, RDS, S3, Lambda"],
        ["Linux", "Administración de servidores y scripting"],
        ["Monitoreo", "Monitoreo de aplicaciones y servidores"],
        ["Git", "Control de versiones y estrategias de ramas"],
      ],

      processTitle: "Proceso de Desarrollo",
      process: [
        {
          title: "1. Análisis y Planeación",
          desc: "Comprender el problema antes de escribir código. Definir requisitos y casos límite.",
          deliverable: "Desglose claro de tareas con criterios de aceptación",
        },
        {
          title: "2. Diseño y Arquitectura",
          desc: "Diseño de base de datos, APIs y componentes pensando en escalabilidad.",
          deliverable: "Documento técnico o diagrama de arquitectura",
        },
        {
          title: "3. Desarrollo",
          desc: "Código limpio, testeable y con commits frecuentes.",
          deliverable: "Funcionalidad en rama de desarrollo",
        },
        {
          title: "4. Pruebas",
          desc: "Pruebas manuales y automáticas en rutas críticas.",
          deliverable: "Funcionalidad probada lista para revisión",
        },
        {
          title: "5. Despliegue",
          desc: "Despliegue controlado y monitoreo inmediato.",
          deliverable: "Funcionalidad en producción",
        },
        {
          title: "6. Soporte e Iteración",
          desc: "Monitoreo, retroalimentación y mejoras continuas.",
          deliverable: "Funcionalidad estable y documentada",
        },
      ],
    },
  }

  const data = content[lang]

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.title}</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {data.subtitle}
          </p>

          {/* Stack */}
          <h2 className="text-3xl font-bold mb-8">{data.stackTitle}</h2>

          {[ 
            [data.backendTitle, data.backend],
            [data.frontendTitle, data.frontend],
            [data.dbTitle, data.databases],
            [data.devopsTitle, data.devops],
          ].map(([title, items], i) => (
            <div key={i} className="mb-12">
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <Card className="p-6">
                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                  {items.map(([name, desc], j) => (
                    <li key={j}>
                      <span className="font-semibold">{name}:</span> {desc}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}

          {/* Process */}
          <h2 className="text-3xl font-bold mb-8">{data.processTitle}</h2>

          <div className="space-y-6">
            {data.process.map((step, i) => (
              <Card key={i} className="p-6">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{step.desc}</p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold">Deliverable:</span>{" "}
                  {step.deliverable}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
