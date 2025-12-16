"use client"

import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { useI18n } from "@/lib/i18n"

export default function ProjectsPage() {
  const { lang } = useI18n()

  const content = {
    en: {
      title: "Projects",
      subtitle: "Real problems, real solutions, real results. Case studies from production systems.",
      projects: [
        {
          title: "E-commerce Platform Migration",
          context: "Growing online retailer with 50k monthly users",
          problem: "Legacy PHP monolith causing frequent downtime and slow deployments",
          solution: "Gradual migration to microservices architecture with Laravel API and React frontend",
          result: "99.9% uptime, 40% faster page loads, deployment time reduced from 2 hours to 15 minutes",
          tags: ["Laravel", "React", "PostgreSQL", "Docker"],
        },
        {
          title: "Internal Operations Dashboard",
          context: "Manufacturing company with manual reporting process",
          problem: "Operations team spending 10+ hours weekly compiling Excel reports from multiple sources",
          solution: "Custom dashboard aggregating data from ERP, warehouse system, and sales CRM",
          result: "90% reduction in reporting time, real-time visibility, data-driven decision making",
          tags: ["Python", "FastAPI", "Vue.js", "PostgreSQL"],
        },
        {
          title: "API Integration Platform",
          context: "SaaS company needing to integrate with 20+ third-party services",
          problem: "Each integration was custom-built, leading to unmaintainable code and frequent breakages",
          solution: "Built unified integration framework with standardized authentication and error handling",
          result: "New integrations added in days instead of weeks, 80% reduction in integration bugs",
          tags: ["Node.js", "TypeScript", "Redis", "AWS Lambda"],
        },
        {
          title: "Legacy System Modernization",
          context: "Financial services firm with 10-year-old ASP.NET application",
          problem: "Critical business system that couldn't be updated due to technical debt",
          solution: "Incremental refactoring: database migration, API extraction, gradual frontend replacement",
          result: "System modernized without downtime, new features now deployable weekly",
          tags: ["Laravel", "Next.js", "MySQL", "Kubernetes"],
        },
        {
          title: "Automated Compliance Reporting",
          context: "Healthcare provider requiring monthly regulatory reports",
          problem: "Compliance team manually generating reports from multiple databases",
          solution: "Automated pipeline with data validation, transformation, and scheduled report generation",
          result: "100% accuracy in reports, compliance team refocused on analysis instead of data entry",
          tags: ["Python", "PostgreSQL", "Pandas", "Docker"],
        },
        {
          title: "Customer Portal Rebuild",
          context: "B2B service company with outdated client-facing portal",
          problem: "Customers frustrated with slow, unintuitive interface leading to support tickets",
          solution: "Complete rebuild with modern UX, real-time updates, and mobile responsiveness",
          result: "60% reduction in support tickets, 4.8/5 customer satisfaction score",
          tags: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
        },
      ],
    },
    es: {
      title: "Proyectos",
      subtitle: "Problemas reales, soluciones reales, resultados reales. Casos de estudio de sistemas en producción.",
      projects: [
        {
          title: "Migración de Plataforma E-commerce",
          context: "Minorista en línea en crecimiento con 50k usuarios mensuales",
          problem: "Monolito PHP legacy causando caídas frecuentes y despliegues lentos",
          solution: "Migración gradual a arquitectura de microservicios con API Laravel y frontend React",
          result: "99.9% uptime, páginas 40% más rápidas, tiempo de despliegue reducido de 2 horas a 15 minutos",
          tags: ["Laravel", "React", "PostgreSQL", "Docker"],
        },
        {
          title: "Dashboard de Operaciones Interno",
          context: "Empresa manufacturera con proceso de reportes manual",
          problem: "Equipo de operaciones gastando 10+ horas semanales compilando reportes Excel de múltiples fuentes",
          solution: "Dashboard personalizado agregando datos de ERP, sistema de almacén y CRM de ventas",
          result: "90% reducción en tiempo de reportes, visibilidad en tiempo real, toma de decisiones basada en datos",
          tags: ["Python", "FastAPI", "Vue.js", "PostgreSQL"],
        },
        {
          title: "Plataforma de Integración API",
          context: "Empresa SaaS necesitando integrar con 20+ servicios de terceros",
          problem: "Cada integración era construida a medida, llevando a código no mantenible y fallos frecuentes",
          solution: "Framework de integración unificado con autenticación estandarizada y manejo de errores",
          result: "Nuevas integraciones añadidas en días en lugar de semanas, 80% reducción en bugs de integración",
          tags: ["Node.js", "TypeScript", "Redis", "AWS Lambda"],
        },
        {
          title: "Modernización de Sistema Legacy",
          context: "Firma de servicios financieros con aplicación ASP.NET de 10 años",
          problem: "Sistema crítico de negocio que no podía actualizarse debido a deuda técnica",
          solution:
            "Refactorización incremental: migración de base de datos, extracción de API, reemplazo gradual de frontend",
          result: "Sistema modernizado sin caídas, nuevas funcionalidades ahora desplegables semanalmente",
          tags: ["Laravel", "Next.js", "MySQL", "Kubernetes"],
        },
        {
          title: "Reportes de Cumplimiento Automatizados",
          context: "Proveedor de salud requiriendo reportes regulatorios mensuales",
          problem: "Equipo de cumplimiento generando reportes manualmente desde múltiples bases de datos",
          solution: "Pipeline automatizado con validación de datos, transformación y generación programada de reportes",
          result:
            "100% precisión en reportes, equipo de cumplimiento reenfocado en análisis en lugar de entrada de datos",
          tags: ["Python", "PostgreSQL", "Pandas", "Docker"],
        },
        {
          title: "Reconstrucción de Portal de Cliente",
          context: "Empresa de servicios B2B con portal cliente desactualizado",
          problem: "Clientes frustrados con interfaz lenta y poco intuitiva llevando a tickets de soporte",
          solution: "Reconstrucción completa con UX moderna, actualizaciones en tiempo real y responsividad móvil",
          result: "60% reducción en tickets de soporte, calificación de satisfacción del cliente de 4.8/5",
          tags: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
        },
      ],
    },
  }

  const data = content[lang]

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-bold mb-6 text-foreground">{data.title}</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">{data.subtitle}</p>

          <div className="space-y-8">
            {data.projects.map((project, index) => (
              <Card key={index} className="p-8 hover:border-accent transition-colors shadow-md border-2">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-1">
                      {lang === "en" ? "Context" : "Contexto"}
                    </h3>
                    <p className="text-sm leading-relaxed">{project.context}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-1">
                      {lang === "en" ? "Problem" : "Problema"}
                    </h3>
                    <p className="text-sm leading-relaxed">{project.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-1">
                      {lang === "en" ? "Solution" : "Solución"}
                    </h3>
                    <p className="text-sm leading-relaxed">{project.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-1">
                      {lang === "en" ? "Result" : "Resultado"}
                    </h3>
                    <p className="text-sm font-semibold leading-relaxed">{project.result}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-lg text-xs font-medium border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
