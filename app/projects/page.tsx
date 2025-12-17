"use client"

import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { useI18n } from "@/lib/i18n"

export default function ProjectsPage() {
  const { lang } = useI18n()

  const content = {
  en: {
    title: "Projects",
    subtitle:
      "Real-world platforms in production: SaaS, electronic invoicing, AI automation, and enterprise integrations.",
    projects: [
      {
        title: "Electronic Invoicing Platform (SAT Integration)",
        context: "Company operating a legacy PHP invoicing system",
        problem:
          "Legacy PHP system with low maintainability, scalability issues, and limited integration capabilities",
        solution:
          "Full migration to a modern JavaScript-based architecture. Backend built with Adonis.js and PostgreSQL, frontend developed using Vue.js and Quasar, with direct integration to SAT APIs for electronic invoicing and stamping",
        result:
          "Significant improvements in performance, scalability, and maintainability, enabling reliable electronic invoicing in production",
        tags: ["Adonis.js", "Vue.js", "Quasar", "PostgreSQL", "SAT API"],
      },
      {
        title: "AI-Powered Subscription Billing SaaS",
        context: "SaaS platform offering subscription-based electronic billing",
        problem:
          "Manual support processes and lack of intelligent assistance increased operational load",
        solution:
          "Development of a SaaS platform with FastAPI backend and React frontend, Stripe integration for recurring payments, and an AI agent built with LangChain and ChatGPT-like models to automate support and operational assistance",
        result:
          "Automated customer support flows, reduced human workload, and improved operational efficiency",
        tags: ["Python", "FastAPI", "React", "Stripe", "LangChain", "AI"],
      },
      {
        title: "Affiliate Invoicing Platform with AI Agents",
        context: "Platform for reselling electronic invoicing through affiliates",
        problem:
          "High volume of repetitive support and billing inquiries impacting response times",
        solution:
          "Backend built with Adonis.js and frontend with Vue.js + Vuetify. Local LLM execution using Ollama and implementation of two AI agents: technical support and WhatsApp-based billing assistant",
        result:
          "Reduced manual support, faster response times, and improved user experience through automation",
        tags: ["Adonis.js", "Vue.js", "Vuetify", "Ollama", "LLM", "WhatsApp"],
      },
      {
        title: "Digital Menu Integration for Enterprise Group",
        context: "Large corporate group requiring embedded digital menu integration",
        problem:
          "Need to embed a digital menu into an existing enterprise application without disrupting core systems",
        solution:
          "Microservices-based architecture consuming the main API. Frontend built with Vue.js and Vuetify, backend with Laravel. Deployed across testing and production environments using Docker and Oracle Cloud infrastructure",
        result:
          "Successful enterprise integration with scalable, isolated services and zero impact on the core application",
        tags: ["Laravel", "Vue.js", "Vuetify", "Docker", "Oracle Cloud", "Microservices"],
      },
      {
        title: "Food Recommendation System",
        context: "Web platform focused on personalized food recommendations",
        problem:
          "Lack of personalized recommendations based on customer behavior and external factors",
        solution:
          "Monolithic Laravel-based platform recommending dishes based on consumption history, purchase profile, and weather conditions",
        result:
          "Improved customer engagement through personalized and contextual recommendations",
        tags: ["Laravel", "Blade", "Vue.js", "Livewire", "PHP"],
      },
      {
        title: "Legacy Desktop System Migration to Web",
        context: "Company with a lost Visual Basic desktop system source code",
        problem:
          "Critical desktop system could not be maintained or extended due to missing source code",
        solution:
          "Complete rebuild from scratch using Laravel, preserving and reusing the existing production MySQL database",
        result:
          "Modern web platform deployed on physical servers, restoring system continuity and long-term maintainability",
        tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "Monolithic"],
      },
      {
        title: "Loyalty Points Platform",
        context: "Gas station network implementing a customer loyalty program",
        problem:
          "Manual tracking of purchases and point redemptions",
        solution:
          "Laravel-based web platform to register purchases, calculate loyalty points, and send redemption notifications via email",
        result:
          "Automated loyalty management and improved customer retention",
        tags: ["Laravel", "PHP", "MySQL", "Email", "Loyalty System"],
      },
      {
        title: "Bachoco Food Service Mobile Application",
        context: "Internal sales team at Bachoco Food Service",
        problem:
          "Inefficient process for generating and sending wholesale product quotations",
        solution:
          "Mobile application built with Ionic and a PHP backend to generate and send quotations efficiently",
        result:
          "Faster quotation workflows and improved communication with clients",
        tags: ["Ionic", "PHP", "Mobile App", "Play Store"],
      },
    ],
  },

  es: {
    title: "Proyectos",
    subtitle:
      "Plataformas reales en producción: SaaS, facturación electrónica, automatización con IA e integraciones empresariales.",
    projects: [
      {
        title: "Plataforma de Facturación Electrónica (Integración SAT)",
        context: "Empresa con sistema legacy de facturación en PHP",
        problem:
          "Sistema PHP heredado con baja mantenibilidad, problemas de escalabilidad y limitadas integraciones",
        solution:
          "Migración completa a una arquitectura moderna en JavaScript. Backend con Adonis.js y PostgreSQL, frontend con Vue.js y Quasar, e integración directa con APIs del SAT para timbrado",
        result:
          "Mejoras significativas en rendimiento, escalabilidad y mantenibilidad en producción",
        tags: ["Adonis.js", "Vue.js", "Quasar", "PostgreSQL", "SAT API"],
      },
      {
        title: "SaaS de Facturación por Suscripción con IA",
        context: "Plataforma SaaS de facturación bajo modelo de suscripción",
        problem:
          "Procesos de soporte manuales y alta carga operativa",
        solution:
          "Desarrollo de un sistema SaaS con backend en FastAPI y frontend en React, integración de Stripe para pagos recurrentes y agente inteligente con LangChain y modelos tipo ChatGPT",
        result:
          "Automatización de flujos de atención, reducción de carga humana y mayor eficiencia operativa",
        tags: ["Python", "FastAPI", "React", "Stripe", "LangChain", "IA"],
      },
      {
        title: "Sistema de Afiliados con Agentes de IA",
        context: "Plataforma de reventa de timbrados mediante afiliados",
        problem:
          "Alto volumen de consultas repetitivas de soporte y facturación",
        solution:
          "Backend con Adonis.js y frontend con Vue.js + Vuetify. Implementación de Ollama para ejecutar LLM locales y creación de agentes de soporte técnico y facturación vía WhatsApp",
        result:
          "Reducción de soporte manual y mejora significativa en la experiencia del usuario",
        tags: ["Adonis.js", "Vue.js", "Vuetify", "Ollama", "LLM", "WhatsApp"],
      },
      {
        title: "Integración de Menú Digital para Grupo Empresarial",
        context: "Grupo corporativo de gran escala",
        problem:
          "Necesidad de integrar un menú digital de forma embebida en su aplicación principal",
        solution:
          "Arquitectura de microservicios consumiendo API principal. Frontend en Vue.js + Vuetify y backend en Laravel, con despliegue en Docker sobre infraestructura de Oracle",
        result:
          "Integración empresarial exitosa sin impacto en el sistema principal",
        tags: ["Laravel", "Vue.js", "Vuetify", "Docker", "Oracle", "Microservicios"],
      },
      {
        title: "Sistema de Recomendación de Platillos",
        context: "Plataforma web de recomendación gastronómica",
        problem:
          "Falta de personalización en recomendaciones de consumo",
        solution:
          "Plataforma monolítica en Laravel que recomienda platillos según consumo, perfil de compra y clima",
        result:
          "Mayor engagement del usuario mediante recomendaciones personalizadas",
        tags: ["Laravel", "Blade", "Vue.js", "Livewire", "PHP"],
      },
      {
        title: "Migración de Sistema Visual Basic a Web",
        context: "Empresa con sistema de escritorio sin código fuente",
        problem:
          "Sistema crítico imposible de mantener por pérdida del código original",
        solution:
          "Reconstrucción completa desde cero en Laravel respetando la base de datos de producción existente",
        result:
          "Plataforma web moderna desplegada en servidores físicos",
        tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "Monolítico"],
      },
      {
        title: "Plataforma de Plan de Lealtad",
        context: "Red de gasolineras",
        problem:
          "Gestión manual de puntos y redenciones",
        solution:
          "Sistema web en Laravel para registro de compras, cálculo de puntos y envío de notificaciones por correo",
        result:
          "Automatización del programa de lealtad y mejora en retención de clientes",
        tags: ["Laravel", "PHP", "MySQL", "Lealtad", "Email"],
      },
      {
        title: "Aplicación Móvil Bachoco Food Service",
        context: "Colaboradores internos de Bachoco",
        problem:
          "Proceso lento para generar y enviar cotizaciones mayoristas",
        solution:
          "Aplicación móvil desarrollada con Ionic y backend en PHP para generación eficiente de cotizaciones",
        result:
          "Agilización del proceso comercial y mejor comunicación con clientes",
        tags: ["Ionic", "PHP", "Mobile App", "Play Store"],
      },
    ],
  },
};


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
