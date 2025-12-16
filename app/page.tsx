"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { useI18n } from "@/lib/i18n"
import { ArrowRight, Users, Building2, CheckCircle2, Code2, Database, Server } from "lucide-react"

export default function HomePage() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
              <div className="shrink-0">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  <img
                    src="/professional-headshot-senior-software-engineer-bus.jpg"
                    alt="Professional headshot"
                    className="w-full h-full object-cover rounded-xl shadow-xl ring-2 ring-border"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="font-bold mb-6 text-balance text-foreground">{t("hero.title")}</h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
                  {t("hero.subtitle")}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="text-base shadow-lg bg-accent hover:bg-accent/90">
                <Link href="/remote-engineer">
                  <Users className="mr-2 h-5 w-5" />
                  {t("hero.cta.recruiter")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-background shadow-md border-2">
                <Link href="/business-solutions">
                  <Building2 className="mr-2 h-5 w-5" />
                  {t("hero.cta.business")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-primary text-primary-foreground border-y py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-sm text-primary-foreground/80">{t("trust.years")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">CTO</div>
              <div className="text-sm text-primary-foreground/80">{t("trust.cto")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm text-primary-foreground/80">{t("trust.production")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Full</div>
              <div className="text-sm text-primary-foreground/80">{t("trust.fullstack")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Segmentation */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="font-bold text-center mb-12">{t("audience.title")}</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 shadow-lg border-2">
            <Users className="h-10 w-10 mb-4 text-accent" />
            <h3 className="font-bold mb-4">{t("audience.recruiters.title")}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{t("audience.recruiters.desc")}</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{t("audience.recruiters.point1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{t("audience.recruiters.point2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{t("audience.recruiters.point3")}</span>
              </li>
            </ul>
            <Button asChild className="shadow-md bg-accent hover:bg-accent/90">
              <Link href="/remote-engineer">
                {t("audience.recruiters.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>

          <Card className="p-8 shadow-lg border-2">
            <Building2 className="h-10 w-10 mb-4 text-accent" />
            <h3 className="font-bold mb-4">{t("audience.business.title")}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{t("audience.business.desc")}</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{t("audience.business.point1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{t("audience.business.point2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{t("audience.business.point3")}</span>
              </li>
            </ul>
            <Button asChild className="shadow-md bg-accent hover:bg-accent/90">
              <Link href="/business-solutions">
                {t("audience.business.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Problems Solved */}
      <section className="bg-card border-y py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-center mb-4">{t("problems.title")}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{t("problems.subtitle")}</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <Code2 className="h-8 w-8 mb-4 text-accent" />
              <h3 className="font-bold mb-3">{t("problems.technical")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Legacy code modernization</li>
                <li>• Performance bottlenecks</li>
                <li>• Production bugs and incidents</li>
                <li>• Scalability constraints</li>
                <li>• Technical debt management</li>
              </ul>
            </div>

            <div>
              <Database className="h-8 w-8 mb-4 text-accent" />
              <h3 className="font-bold mb-3">{t("problems.business")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Manual processes that waste time</li>
                <li>• Outdated unmaintained systems</li>
                <li>• Lack of technical ownership</li>
                <li>• Data fragmentation</li>
                <li>• Integration challenges</li>
              </ul>
            </div>

            <div>
              <Server className="h-8 w-8 mb-4 text-accent" />
              <h3 className="font-bold mb-3">{t("problems.infrastructure")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Deployment complexity</li>
                <li>• Database optimization</li>
                <li>• Cloud infrastructure setup</li>
                <li>• CI/CD pipeline creation</li>
                <li>• Monitoring and observability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold mb-4">{t("cta.title")}</h2>
          <p className="text-muted-foreground mb-8 text-balance">{t("cta.subtitle")}</p>
          <Button asChild size="lg" className="shadow-lg bg-accent hover:bg-accent/90">
            <Link href="/contact">
              {t("cta.button")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
