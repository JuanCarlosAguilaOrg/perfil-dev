"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { useI18n } from "@/lib/i18n"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function BusinessSolutionsPage() {
  const { t, lang } = useI18n()

  const content = {
    en: {
      heroTitle: "Custom Software Solutions for Your Business",
      heroSubtitle:
        "Turn technical challenges into business advantages. From internal tools to full-stack applications, I build software that solves real problems.",

      problemsTitle: "Business Problems I Solve",
      problems: [
        {
          title: "Manual Processes Eating Your Time",
          desc: "Repetitive tasks, data entry, report generation—all can be automated. I build tools that free up your team to focus on what matters.",
        },
        {
          title: "Unmaintained or Outdated Systems",
          desc: "Your business relies on software that hasn't been updated in years. It works, but barely. I can modernize it, maintain it, or rebuild it properly.",
        },
        {
          title: "Lack of Technical Ownership",
          desc: "You need someone to actually own your technical infrastructure, not just patch things when they break. I provide ongoing technical leadership without the overhead of a full-time CTO.",
        },
      ],

      solutionsTitle: "Solutions I Offer",
      solutions: [
        {
          title: "Internal Systems",
          desc: "Custom-built tools for your specific workflow—CRMs, inventory systems, project trackers.",
        },
        {
          title: "Dashboards & Reporting",
          desc: "Real-time visibility into your business metrics with clean, actionable dashboards.",
        },
        {
          title: "Process Automation",
          desc: "Scripts, workflows, and integrations that eliminate repetitive manual work.",
        },
        {
          title: "API Integrations",
          desc: "Connect your existing tools together so data flows seamlessly between systems.",
        },
      ],

      processTitle: "How We Work Together",
      process: [
        {
          step: "1",
          title: "Technical Diagnosis",
          desc: "We start with a conversation about your problem. I'll ask questions, understand your workflow, and identify the root cause—not just symptoms.",
        },
        {
          step: "2",
          title: "Clear Proposal",
          desc: "You get a detailed proposal: scope, timeline, cost, and what success looks like.",
        },
        {
          step: "3",
          title: "Phased Development",
          desc: "Work happens in stages. You see progress regularly and provide feedback.",
        },
        {
          step: "4",
          title: "Functional Delivery",
          desc: "You receive working software—deployed, tested, and documented.",
        },
        {
          step: "5",
          title: "Ongoing Support",
          desc: "After launch, I'm available for maintenance, updates, and expansion.",
        },
      ],

      valueTitle: "What You Get",
      values: [
        {
          title: "Stability",
          desc: "Software that doesn't break. Tested thoroughly and deployed carefully.",
        },
        {
          title: "Continuity",
          desc: "Clear documentation and maintainable code. No vendor lock-in.",
        },
        {
          title: "Business Thinking",
          desc: "Solutions focused on ROI, not just technical elegance.",
        },
      ],

      ctaTitle: "Let's Discuss Your Project",
      ctaSubtitle:
        "Schedule a conversation to explore how custom software can solve your business challenges.",
      ctaButton: "Schedule a Conversation",
    },

    es: {
      heroTitle: "Soluciones de Software a la Medida para tu Negocio",
      heroSubtitle:
        "Convierte retos técnicos en ventajas competitivas. Desde herramientas internas hasta aplicaciones completas, desarrollo software que resuelve problemas reales.",

      problemsTitle: "Problemas de Negocio que Resuelvo",
      problems: [
        {
          title: "Procesos Manuales que Consumen Tiempo",
          desc: "Tareas repetitivas, captura de datos y reportes pueden automatizarse para liberar a tu equipo.",
        },
        {
          title: "Sistemas Obsoletos o sin Mantenimiento",
          desc: "Software crítico que sigue funcionando, pero apenas. Puedo modernizarlo o reconstruirlo correctamente.",
        },
        {
          title: "Falta de Responsabilidad Técnica",
          desc: "Necesitas a alguien que realmente se haga cargo de tu infraestructura técnica, no solo apagar incendios.",
        },
      ],

      solutionsTitle: "Soluciones que Ofrezco",
      solutions: [
        {
          title: "Sistemas Internos",
          desc: "Herramientas hechas a la medida para tus flujos de trabajo.",
        },
        {
          title: "Dashboards y Reportes",
          desc: "Visibilidad en tiempo real de métricas clave del negocio.",
        },
        {
          title: "Automatización de Procesos",
          desc: "Workflows e integraciones que eliminan trabajo manual.",
        },
        {
          title: "Integraciones API",
          desc: "Conecta tus sistemas para que la información fluya sin fricción.",
        },
      ],

      processTitle: "Cómo Trabajamos",
      process: [
        {
          step: "1",
          title: "Diagnóstico Técnico",
          desc: "Analizamos el problema real, no solo los síntomas.",
        },
        {
          step: "2",
          title: "Propuesta Clara",
          desc: "Alcance, tiempos, costos y objetivos bien definidos.",
        },
        {
          step: "3",
          title: "Desarrollo por Fases",
          desc: "Avances visibles y retroalimentación constante.",
        },
        {
          step: "4",
          title: "Entrega Funcional",
          desc: "Software listo para usarse, documentado y desplegado.",
        },
        {
          step: "5",
          title: "Soporte Continuo",
          desc: "Mantenimiento y evolución del sistema.",
        },
      ],

      valueTitle: "Lo que Obtienes",
      values: [
        {
          title: "Estabilidad",
          desc: "Software confiable y probado.",
        },
        {
          title: "Continuidad",
          desc: "Código mantenible y documentado.",
        },
        {
          title: "Visión de Negocio",
          desc: "Decisiones técnicas alineadas al ROI.",
        },
      ],

      ctaTitle: "Hablemos de tu Proyecto",
      ctaSubtitle:
        "Agenda una llamada para explorar cómo el software a la medida puede ayudarte.",
      ctaButton: "Agendar Conversación",
    },
  }

  const data = content[lang]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.heroTitle}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {data.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Problems */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">{data.problemsTitle}</h2>

          <div className="space-y-6">
            {data.problems.map((item, i) => (
              <Card key={i} className="p-6">
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">{data.ctaTitle}</h2>
          <p className="text-muted-foreground mb-8">{data.ctaSubtitle}</p>
          <Button asChild size="lg">
            <Link href="/contact">
              {data.ctaButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
