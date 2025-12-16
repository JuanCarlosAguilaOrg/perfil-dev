"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Navigation } from "@/components/navigation"
import { useI18n } from "@/lib/i18n"
import { Linkedin, Mail, Github } from "lucide-react"

export default function ContactPage() {
  const { lang } = useI18n()
  const [inquiryType, setInquiryType] = useState<"remote" | "business" | null>(null)

  const content = {
    en: {
      title: "Get in Touch",
      subtitle: "Whether you're hiring for a remote position or need custom software built, let's talk.",
      remoteTitle: "Remote Job Inquiry",
      remoteDesc: "You're a recruiter or hiring manager looking for a senior remote engineer.",
      businessTitle: "Business / Project Inquiry",
      businessDesc: "You need custom software, consulting, or technical solutions for your business.",
      selectOption: "Select This Option",
      change: "Change",
      nameLabel: "Your Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "john@company.com",
      companyLabel: "Company Name",
      companyPlaceholder: "Acme Inc",
      roleLabel: "Role / Position",
      rolePlaceholder: "e.g. Senior Backend Engineer",
      projectLabel: "Project Type",
      projectPlaceholder: "e.g. Internal Dashboard, API Integration",
      messageLabel: "Message",
      messagePlaceholderRemote: "Tell me about the role, team, and what you're looking for...",
      messagePlaceholderBusiness: "Describe the problem you're trying to solve and what success looks like...",
      sendButton: "Send Message",
      alternativeTitle: "Or connect via:",
    },
    es: {
      title: "Ponte en Contacto",
      subtitle: "Ya sea que estés contratando para una posición remota o necesites software personalizado, hablemos.",
      remoteTitle: "Consulta de Trabajo Remoto",
      remoteDesc: "Eres un reclutador o gerente de contratación buscando un ingeniero senior remoto.",
      businessTitle: "Consulta Empresarial / de Proyecto",
      businessDesc: "Necesitas software personalizado, consultoría o soluciones técnicas para tu negocio.",
      selectOption: "Seleccionar Esta Opción",
      change: "Cambiar",
      nameLabel: "Tu Nombre",
      namePlaceholder: "Juan Pérez",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "juan@empresa.com",
      companyLabel: "Nombre de la Empresa",
      companyPlaceholder: "Acme Inc",
      roleLabel: "Rol / Posición",
      rolePlaceholder: "ej. Ingeniero Backend Senior",
      projectLabel: "Tipo de Proyecto",
      projectPlaceholder: "ej. Dashboard Interno, Integración API",
      messageLabel: "Mensaje",
      messagePlaceholderRemote: "Cuéntame sobre el rol, el equipo y lo que estás buscando...",
      messagePlaceholderBusiness: "Describe el problema que intentas resolver y cómo se ve el éxito...",
      sendButton: "Enviar Mensaje",
      alternativeTitle: "O conecta mediante:",
    },
  }

  const data = content[lang]

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bold mb-6 text-foreground">{data.title}</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">{data.subtitle}</p>

          {/* Contact Method Selection */}
          {!inquiryType && (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card
                className="p-8 cursor-pointer hover:border-accent hover:shadow-lg transition-all border-2"
                onClick={() => setInquiryType("remote")}
              >
                <h2 className="text-2xl font-bold mb-3">{data.remoteTitle}</h2>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{data.remoteDesc}</p>
                <Button variant="outline" className="w-full bg-transparent border-2">
                  {data.selectOption}
                </Button>
              </Card>

              <Card
                className="p-8 cursor-pointer hover:border-accent hover:shadow-lg transition-all border-2"
                onClick={() => setInquiryType("business")}
              >
                <h2 className="text-2xl font-bold mb-3">{data.businessTitle}</h2>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{data.businessDesc}</p>
                <Button variant="outline" className="w-full bg-transparent border-2">
                  {data.selectOption}
                </Button>
              </Card>
            </div>
          )}

          {/* Contact Form */}
          {inquiryType && (
            <Card className="p-8 border-2 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  {inquiryType === "remote" ? data.remoteTitle : data.businessTitle}
                </h2>
                <Button variant="ghost" size="sm" onClick={() => setInquiryType(null)}>
                  {data.change}
                </Button>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{data.nameLabel}</Label>
                    <Input id="name" placeholder={data.namePlaceholder} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{data.emailLabel}</Label>
                    <Input id="email" type="email" placeholder={data.emailPlaceholder} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">{data.companyLabel}</Label>
                  <Input id="company" placeholder={data.companyPlaceholder} />
                </div>

                {inquiryType === "remote" && (
                  <div className="space-y-2">
                    <Label htmlFor="role">{data.roleLabel}</Label>
                    <Input id="role" placeholder={data.rolePlaceholder} />
                  </div>
                )}

                {inquiryType === "business" && (
                  <div className="space-y-2">
                    <Label htmlFor="project">{data.projectLabel}</Label>
                    <Input id="project" placeholder={data.projectPlaceholder} />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="message">{data.messageLabel}</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder={
                      inquiryType === "remote" ? data.messagePlaceholderRemote : data.messagePlaceholderBusiness
                    }
                  />
                </div>

                <Button size="lg" className="w-full shadow-lg bg-accent hover:bg-accent/90">
                  {data.sendButton}
                </Button>
              </form>
            </Card>
          )}

          {/* Alternative Contact Methods */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-4">{data.alternativeTitle}</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="border-2 bg-transparent">
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-2 bg-transparent">
                <Link href="mailto:your.email@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-2 bg-transparent">
                <Link href="https://github.com" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
