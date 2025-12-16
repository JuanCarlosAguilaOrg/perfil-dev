"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { useI18n } from "@/lib/i18n"
import { Linkedin, Mail, CheckCircle2 } from "lucide-react"

export default function RemoteEngineerPage() {
  const { t, lang } = useI18n()

  const content = {
    en: {
      title: "Senior Software Engineer — Remote",
      subtitle:
        "Experienced backend and full-stack engineer specializing in production systems, legacy modernization, and reliable remote collaboration.",
      problemsTitle: "Problems I Handle",
      problems: [
        {
          title: "Legacy Systems",
          desc: "Maintaining, understanding, and gradually modernizing codebases that have been in production for years. Refactoring without breaking functionality.",
        },
        {
          title: "Production Incidents",
          desc: "Rapid debugging, root cause analysis, and implementing fixes under pressure. Experience with on-call rotations and incident response.",
        },
        {
          title: "Performance Issues",
          desc: "Identifying bottlenecks, optimizing database queries, reducing response times, and improving overall application performance.",
        },
        {
          title: "Scalability Challenges",
          desc: "Architecting systems that can grow with demand. Database design, caching strategies, and infrastructure considerations.",
        },
      ],
      techStackTitle: "Tech Stack",
      remoteTitle: "Remote Work Approach",
      remoteApproach: [
        {
          title: "Async Communication",
          desc: "Comfortable working across time zones. Detailed written updates, clear documentation, and minimal dependency on synchronous meetings.",
        },
        {
          title: "Ticket-Based Work",
          desc: "Proficient with issue trackers (Jira, Linear, GitHub Issues). Clear requirements gathering, progress tracking, and thorough testing before delivery.",
        },
        {
          title: "Clear Deliverables",
          desc: "Every task includes clear acceptance criteria. Code is reviewed, tested, and deployed with confidence. No ambiguous 'done' states.",
        },
        {
          title: "Effective Documentation",
          desc: "Minimal but sufficient documentation. Clear READMEs, inline comments where needed, and knowledge transfer for critical systems.",
        },
      ],
      ctaTitle: "Let's Connect",
      ctaSubtitle: "Reach out via LinkedIn or email to discuss remote opportunities.",
      ctaLinkedin: "Connect on LinkedIn",
      ctaEmail: "Send an Email",
    },
    es: {
      title: "Ingeniero de Software Senior — Remoto",
      subtitle:
        "Ingeniero backend y full-stack con experiencia en sistemas de producción, modernización de sistemas legacy y colaboración remota confiable.",
      problemsTitle: "Problemas que Manejo",
      problems: [
        {
          title: "Sistemas Legacy",
          desc: "Mantenimiento, comprensión y modernización gradual de bases de código que han estado en producción durante años. Refactorización sin romper funcionalidad.",
        },
        {
          title: "Incidentes de Producción",
          desc: "Depuración rápida, análisis de causa raíz e implementación de correcciones bajo presión. Experiencia con rotaciones de guardia y respuesta a incidentes.",
        },
        {
          title: "Problemas de Rendimiento",
          desc: "Identificación de cuellos de botella, optimización de consultas de base de datos, reducción de tiempos de respuesta y mejora del rendimiento general.",
        },
        {
          title: "Desafíos de Escalabilidad",
          desc: "Arquitectura de sistemas que pueden crecer con la demanda. Diseño de bases de datos, estrategias de caché y consideraciones de infraestructura.",
        },
      ],
      techStackTitle: "Stack Técnico",
      remoteTitle: "Enfoque de Trabajo Remoto",
      remoteApproach: [
        {
          title: "Comunicación Asíncrona",
          desc: "Cómodo trabajando en diferentes zonas horarias. Actualizaciones escritas detalladas, documentación clara y mínima dependencia de reuniones sincrónicas.",
        },
        {
          title: "Trabajo Basado en Tickets",
          desc: "Competente con rastreadores de problemas (Jira, Linear, GitHub Issues). Recopilación clara de requisitos, seguimiento del progreso y pruebas exhaustivas antes de la entrega.",
        },
        {
          title: "Entregables Claros",
          desc: "Cada tarea incluye criterios de aceptación claros. El código se revisa, prueba y despliega con confianza. Sin estados 'terminado' ambiguos.",
        },
        {
          title: "Documentación Efectiva",
          desc: "Documentación mínima pero suficiente. READMEs claros, comentarios en línea donde sea necesario y transferencia de conocimiento para sistemas críticos.",
        },
      ],
      ctaTitle: "Conectemos",
      ctaSubtitle: "Contáctame vía LinkedIn o correo para discutir oportunidades remotas.",
      ctaLinkedin: "Conectar en LinkedIn",
      ctaEmail: "Enviar un Correo",
    },
  }

  const data = content[lang]

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
              <div className="shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <img
                    src="/professional-headshot-senior-software-engineer-bus.jpg"
                    alt="Professional headshot"
                    className="w-full h-full object-cover rounded-xl shadow-xl ring-2 ring-border"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="font-bold mb-6 text-foreground">{data.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">{data.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems I Handle */}
      <section className="bg-muted/30 border-y py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold mb-8">{data.problemsTitle}</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {data.problems.map((problem, i) => (
                <Card key={i} className="p-6 shadow-md border-2">
                  <h3 className="font-bold text-lg mb-3">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{problem.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold mb-8">{data.techStackTitle}</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {["Laravel", "PHP", "FastAPI", "Python", "Node.js", "REST APIs", "GraphQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "Vue.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Infrastructure & DevOps</h3>
              <div className="flex flex-wrap gap-3">
                {["Docker", "PostgreSQL", "MySQL", "Redis", "AWS", "Git", "CI/CD", "Linux"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Work Approach */}
      <section className="bg-card border-y py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold mb-8">{data.remoteTitle}</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {data.remoteApproach.map((approach, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {approach.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{approach.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold mb-4">{data.ctaTitle}</h2>
          <p className="text-muted-foreground mb-8">{data.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-lg bg-accent hover:bg-accent/90">
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="mr-2 h-5 w-5" />
                {data.ctaLinkedin}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-md bg-background border-2">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                {data.ctaEmail}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
