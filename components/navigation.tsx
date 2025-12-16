"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n"

export function Navigation() {
  const pathname = usePathname()
  const { lang, setLang, t } = useI18n()

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/remote-engineer", label: t("nav.remote") },
    { href: "/business-solutions", label: t("nav.business") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/stack-process", label: t("nav.stack") },
    { href: "/engineering-mindset", label: t("nav.mindset") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <nav className="border-b border-border bg-primary shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-mono text-lg font-bold text-primary-foreground">
            JCAP
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  pathname === link.href
                    ? "text-primary-foreground font-semibold"
                    : "text-primary-foreground/70 hover:text-primary-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-1 ml-4 pl-4 border-l border-primary-foreground/20">
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "text-sm px-2 py-1 rounded transition-colors",
                  lang === "en"
                    ? "text-primary-foreground font-semibold bg-primary-foreground/10"
                    : "text-primary-foreground/70 hover:text-primary-foreground",
                )}
              >
                EN
              </button>
              <span className="text-primary-foreground/40">|</span>
              <button
                onClick={() => setLang("es")}
                className={cn(
                  "text-sm px-2 py-1 rounded transition-colors",
                  lang === "es"
                    ? "text-primary-foreground font-semibold bg-primary-foreground/10"
                    : "text-primary-foreground/70 hover:text-primary-foreground",
                )}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
