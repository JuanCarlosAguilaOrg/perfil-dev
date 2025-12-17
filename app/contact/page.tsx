"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { useI18n } from "@/lib/i18n"
import { Linkedin, Github, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const { lang } = useI18n()

  const content = {
    en: {
      title: "Get in Touch",
      subtitle: "Whether you're hiring for a remote position or need custom software built, let's talk.",
      remoteTitle: "Remote Job Inquiry",
      remoteDesc: "You're a recruiter or hiring manager looking for a senior remote engineer.",
      businessTitle: "Business / Project Inquiry",
      businessDesc: "You need custom software, consulting, or technical solutions for your business.",
      selectOption: "Select This Option",
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
      alternativeTitle: "O conecta mediante:",
    },
  }

  const data = content[lang]

  // === CONTACT LINKS ===
  const email = "j.carlos.aguila.7@gmail.com"

  const mailtoRemote = `mailto:${email}?subject=Remote%20Job%20Opportunity&body=Hello%20Juan%20Carlos,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20remote%20job%20opportunity%20with%20you.%0D%0A%0D%0ABest%20regards,`

  const mailtoBusiness = `mailto:${email}?subject=Business%20or%20Project%20Inquiry&body=Hello%20Juan%20Carlos,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20software%20project%20or%20consulting%20opportunity.%0D%0A%0D%0ABest%20regards,`

  const whatsappNumber = "522212082035" // ⬅️ cambia por tu número
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola%20Juan%20Carlos,%20me%20gustaría%20ponerme%20en%20contacto%20contigo.`

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bold mb-6 text-foreground">{data.title}</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {data.subtitle}
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Remote */}
            <Card className="p-8 hover:border-accent hover:shadow-lg transition-all border-2">
              <h2 className="text-2xl font-bold mb-3">{data.remoteTitle}</h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {data.remoteDesc}
              </p>

              <Button asChild variant="outline" className="w-full bg-transparent border-2">
                <Link href={mailtoRemote}>
                  {data.selectOption}
                </Link>
              </Button>
            </Card>

            {/* Business */}
            <Card className="p-8 hover:border-accent hover:shadow-lg transition-all border-2">
              <h2 className="text-2xl font-bold mb-3">{data.businessTitle}</h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {data.businessDesc}
              </p>

              <Button asChild variant="outline" className="w-full bg-transparent border-2">
                <Link href={mailtoBusiness}>
                  {data.selectOption}
                </Link>
              </Button>
            </Card>
          </div>

          {/* Alternative Contact Methods */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">
              {data.alternativeTitle}
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="border-2 bg-transparent">
                <Link
                  href="https://www.linkedin.com/in/juan-carlos-aguila-pedraza-5358b0b5/"
                  target="_blank"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>

              <Button asChild variant="outline" className="border-2 bg-transparent">
                <Link href={whatsappLink} target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Link>
              </Button>

              <Button asChild variant="outline" className="border-2 bg-transparent">
                <Link
                  href="https://github.com/JuanCarlosAguilaOrg"
                  target="_blank"
                >
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
