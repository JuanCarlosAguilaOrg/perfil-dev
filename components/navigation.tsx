"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

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
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-lg font-bold text-primary-foreground"
          >
            JCAP
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  pathname === link.href
                    ? "text-primary-foreground font-semibold"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Language */}
            <div className="flex items-center gap-1 ml-4 pl-4 border-l border-primary-foreground/20">
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "text-sm px-2 py-1 rounded",
                  lang === "en"
                    ? "bg-primary-foreground/10 text-primary-foreground font-semibold"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                )}
              >
                EN
              </button>
              <span className="text-primary-foreground/40">|</span>
              <button
                onClick={() => setLang("es")}
                className={cn(
                  "text-sm px-2 py-1 rounded",
                  lang === "es"
                    ? "bg-primary-foreground/10 text-primary-foreground font-semibold"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                )}
              >
                ES
              </button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-primary-foreground/20 bg-primary">
          <div className="flex flex-col px-4 py-4 gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm",
                  pathname === link.href
                    ? "text-primary-foreground font-semibold"
                    : "text-primary-foreground/70"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Language mobile */}
            <div className="flex gap-2 pt-2 border-t border-primary-foreground/20">
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "text-sm px-3 py-1 rounded",
                  lang === "en"
                    ? "bg-primary-foreground/10 text-primary-foreground font-semibold"
                    : "text-primary-foreground/70"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={cn(
                  "text-sm px-3 py-1 rounded",
                  lang === "es"
                    ? "bg-primary-foreground/10 text-primary-foreground font-semibold"
                    : "text-primary-foreground/70"
                )}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
