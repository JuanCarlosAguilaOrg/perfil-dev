"use client"

import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { useI18n } from "@/lib/i18n"

export default function EngineeringMindsetPage() {
  const { lang } = useI18n()

  const content = {
    en: {
      title: "Engineering Mindset",
      subtitle:
        "How I think about technology decisions, trade-offs, and avoiding common pitfalls.",

      articles: [
        {
          title: "Choosing the Right Tool",
          paragraphs: [
            "Technology selection isn't about what's newest or most popular—it's about what solves the problem effectively with the lowest long-term cost.",
            "I've seen teams adopt \"exciting\" technologies that became maintenance nightmares. Boring, proven tools often win in the long run.",
          ],
          card: {
            title: "My Criteria:",
            items: [
              "Team familiarity: Can the team maintain this?",
              "Problem fit: Does it actually solve our problem?",
              "Maturity: Is it production-ready with active support?",
              "Complexity cost: Does it add more problems than it solves?",
              "Exit strategy: Can we migrate away if needed?",
            ],
          },
        },

        {
          title: "When NOT to Use Microservices",
          paragraphs: [
            "Microservices solve specific problems—primarily organizational scalability. But they introduce significant complexity: distributed tracing, service discovery, network reliability, data consistency.",
            "A well-structured monolith can scale surprisingly far. Most companies never actually need microservices—they just think they do.",
          ],
          card: {
            title: "Don't use microservices if:",
            items: [
              "Your team is smaller than 10 engineers",
              "You don't have dedicated DevOps expertise",
              "Your monolith hasn't proven to be a bottleneck yet",
              "You're in early stages and requirements change frequently",
              "You don't have proper monitoring and observability",
            ],
          },
        },

        {
          title: "Evaluating Legacy Systems",
          paragraphs: [
            "\"Legacy\" doesn't automatically mean \"bad.\" Some legacy systems have outlasted multiple rewrites because they were built correctly the first time.",
            "I've seen companies waste years rewriting perfectly functional systems. Sometimes the right answer is strategic refactoring, not replacement.",
          ],
          card: {
            title: "Questions I ask:",
            items: [
              "Does it still serve its purpose reliably?",
              "Is the code actually bad, or just old?",
              "What's the real cost of maintaining it vs rewriting it?",
              "Can we refactor incrementally instead of big-bang rewrite?",
              "What business value will we gain from replacing it?",
            ],
          },
        },

        {
          title: "Common Engineering Mistakes",
          intro:
            "I've made these mistakes myself and seen others repeat them. Here's what to avoid:",
          mistakes: [
            {
              title: "Premature Optimization",
              desc: "Optimizing before you have actual performance data is guessing. Build correctly first, measure, then optimize the real bottlenecks.",
            },
            {
              title: "Ignoring the Database",
              desc: "Most performance problems live in the database. Learn SQL deeply. Understand indexing.",
            },
            {
              title: "Over-Engineering",
              desc: "Building for imaginary future requirements that never materialize. YAGNI is real wisdom.",
            },
            {
              title: "Neglecting Error Handling",
              desc: "Production-ready code handles errors gracefully, logs properly, and fails safely.",
            },
            {
              title: "Not Reading Documentation",
              desc: "Stack Overflow answers are often outdated or wrong. Read the actual documentation.",
            },
          ],
        },

        {
          title: "The Value of Boring Technology",
          paragraphs: [
            "PostgreSQL has been around for 30+ years. Laravel is \"boring\" PHP. React is now mainstream. These technologies aren't exciting, but they're predictable, well-documented, and stable.",
            "Your competitive advantage isn't your tech stack—it's solving customer problems faster and more reliably than competitors.",
          ],
          quote:
            "Choose boring technology unless the exciting technology solves a problem you actually have.",
        },
      ],
    },

    es: {
      title: "Mentalidad de Ingeniería",
      subtitle:
        "Cómo pienso sobre decisiones tecnológicas, trade-offs y cómo evitar errores comunes.",

      articles: [
        {
          title: "Elegir la Herramienta Correcta",
          paragraphs: [
            "La selección tecnológica no se trata de lo más nuevo o popular, sino de lo que resuelve el problema con el menor costo a largo plazo.",
            "He visto equipos adoptar tecnologías \"emocionantes\" que se convirtieron en pesadillas de mantenimiento. Las herramientas probadas suelen ganar.",
          ],
          card: {
            title: "Mis Criterios:",
            items: [
              "Familiaridad del equipo: ¿pueden mantenerlo?",
              "Ajuste al problema: ¿realmente lo resuelve?",
              "Madurez: ¿está listo para producción?",
              "Costo de complejidad: ¿agrega más problemas?",
              "Estrategia de salida: ¿podemos migrar después?",
            ],
          },
        },

        {
          title: "Cuándo NO Usar Microservicios",
          paragraphs: [
            "Los microservicios resuelven problemas específicos, pero introducen una complejidad considerable.",
            "Un monolito bien estructurado puede escalar mucho más de lo que se piensa.",
          ],
          card: {
            title: "No uses microservicios si:",
            items: [
              "Tu equipo tiene menos de 10 ingenieros",
              "No cuentas con expertos DevOps dedicados",
              "Tu monolito aún no es un cuello de botella",
              "Estás en etapas tempranas con requisitos cambiantes",
              "No tienes buen monitoreo u observabilidad",
            ],
          },
        },

        {
          title: "Evaluación de Sistemas Legacy",
          paragraphs: [
            "\"Legacy\" no significa automáticamente \"malo\".",
            "A veces la respuesta correcta es refactorizar estratégicamente.",
          ],
          card: {
            title: "Preguntas que hago:",
            items: [
              "¿Sigue cumpliendo su función?",
              "¿El código es malo o solo antiguo?",
              "¿Costo real de mantener vs reescribir?",
              "¿Se puede refactorizar gradualmente?",
              "¿Qué valor de negocio se obtiene?",
            ],
          },
        },

        {
          title: "Errores Comunes de Ingeniería",
          intro: "Errores que he cometido y visto repetirse:",
          mistakes: [
            {
              title: "Optimización Prematura",
              desc: "Optimizar sin datos reales es adivinar.",
            },
            {
              title: "Ignorar la Base de Datos",
              desc: "Muchos problemas viven en la base de datos.",
            },
            {
              title: "Sobre-Ingeniería",
              desc: "Construir para requisitos imaginarios.",
            },
            {
              title: "Manejo Deficiente de Errores",
              desc: "El código productivo maneja errores correctamente.",
            },
            {
              title: "No Leer Documentación",
              desc: "La documentación oficial siempre gana.",
            },
          ],
        },

        {
          title: "El Valor de la Tecnología Aburrida",
          paragraphs: [
            "Tecnologías maduras son predecibles y estables.",
            "La ventaja competitiva está en resolver problemas, no en el stack.",
          ],
          quote:
            "Elige tecnología aburrida a menos que la emocionante resuelva un problema real.",
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

          <div className="space-y-12">
            {data.articles.map((article, i) => (
              <article key={i}>
                <h2 className="text-2xl font-bold mb-4">{article.title}</h2>

                {article.paragraphs?.map((p, j) => (
                  <p key={j} className="text-sm text-muted-foreground mb-4">
                    {p}
                  </p>
                ))}

                {article.card && (
                  <Card className="p-6 bg-muted mb-4">
                    <h3 className="font-bold mb-3">{article.card.title}</h3>
                    <ul className="space-y-2 text-sm">
                      {article.card.items.map((item, k) => (
                        <li key={k}>• {item}</li>
                      ))}
                    </ul>
                  </Card>
                )}

                {article.intro && (
                  <p className="text-sm text-muted-foreground mb-4">
                    {article.intro}
                  </p>
                )}

                {article.mistakes && (
                  <div className="space-y-4">
                    {article.mistakes.map((m, k) => (
                      <Card key={k} className="p-6">
                        <h3 className="font-bold mb-2">{m.title}</h3>
                        <p className="text-sm text-muted-foreground">{m.desc}</p>
                      </Card>
                    ))}
                  </div>
                )}

                {article.quote && (
                  <Card className="p-6 bg-muted mt-4">
                    <p className="text-sm font-semibold">{article.quote}</p>
                  </Card>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
