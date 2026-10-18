"use client"

import React from "react"
import Link from "next/link"
import { ArrowUpRight, BedDouble, Mail, Sparkles, MapPin } from "lucide-react"

import { EditorialDictionary, Language } from "@/lib/criptana-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface EditorialFooterProps {
  dict: EditorialDictionary["footer"]
  nav: EditorialDictionary["nav"]
  lang: Language
}

export function EditorialFooter({ dict, nav, lang }: EditorialFooterProps) {
  const currentYear = new Date().getFullYear()

  const handlePartnerClick = () => {
    const w = window as unknown as {
      posthog?: { capture: (event: string, props?: Record<string, any>) => void }
    }
    w.posthog?.capture("b2b_partner_cta_clicked", {
      language: lang,
      source: "footer",
    })
  }

  const handleBookingClick = () => {
    const w = window as unknown as {
      posthog?: { capture: (event: string, props?: Record<string, any>) => void }
    }
    w.posthog?.capture("booking_affiliate_clicked", {
      source: "footer_direct_link",
      destination: "https://www.booking.com/city/es/campo-de-criptana.html?aid=2311580",
    })
  }

  return (
    <footer className="w-full mt-16 border-t border-neutral-200/80 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-950/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
        {/* Local Business & Monetization Callout Box (Rule 3) */}
        <div className="rounded-[24px] bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/25 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-amber-500/15 text-amber-900 dark:text-amber-300 border-amber-500/30 text-xs font-semibold"
              >
                <Sparkles className="size-3 mr-1 inline text-amber-500" />
                {lang === "es" ? "Comercio & Bodegas Locales" : "Local Businesses & Wineries"}
              </Badge>
            </div>
            <h3 className="text-lg md:text-xl font-black text-foreground tracking-tight">
              {dict.partnerTitle}
            </h3>
            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {lang === "es"
                ? "Colaboramos con proyectos auténticos del pueblo para incluirlos en nuestras rutas editoriales y recomendaciones de fin de semana."
                : "We partner with authentic local spots to feature them in our curated weekend itineraries and insider recommendations."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <Button
              asChild
              onClick={handlePartnerClick}
              className="rounded-xl bg-neutral-900 text-amber-300 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 font-bold text-xs h-11 px-5 shadow-sm cursor-pointer"
            >
              <a href="mailto:hola@criptana360.com?subject=Colaboraci%C3%B3n%20Criptana360">
                <Mail className="size-4 mr-2" />
                <span>{dict.partnerCta}</span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              onClick={handleBookingClick}
              className="rounded-xl border-neutral-300 dark:border-neutral-700 font-bold text-xs h-11 px-5 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 cursor-pointer"
            >
              <a
                href="https://www.booking.com/city/es/campo-de-criptana.html?aid=2311580"
                target="_blank"
                rel="noopener noreferrer sponsored"
              >
                <BedDouble className="size-4 mr-2 text-blue-600" />
                <span>{dict.bookingCta}</span>
                <ArrowUpRight className="size-3.5 ml-1.5 opacity-60" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Editorial Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
          <div className="md:col-span-5 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center size-8 rounded-xl bg-amber-400 text-neutral-950 font-black text-sm shadow-sm">
                C360
              </span>
              <span className="font-black tracking-tight text-lg leading-none">
                Criptana<span className="text-amber-600">360</span>
              </span>
            </Link>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
              {dict.tagline}
            </p>
            <p className="text-[11px] font-medium text-amber-800 dark:text-amber-400 flex items-center gap-1.5 pt-1">
              <MapPin className="size-3.5 text-amber-600 shrink-0" />
              {dict.madeWith}
            </p>
          </div>

          <div className="md:col-span-7 flex flex-wrap gap-8 justify-between md:justify-end">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                {lang === "es" ? "Secciones" : "Sections"}
              </span>
              <ul className="space-y-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                <li>
                  <a href="#itinerarios" className="hover:text-amber-600 transition-colors">
                    {nav.itineraries}
                  </a>
                </li>
                <li>
                  <a href="#agenda" className="hover:text-amber-600 transition-colors">
                    {nav.agenda}
                  </a>
                </li>
                <li>
                  <a href="#joyas-locales" className="hover:text-amber-600 transition-colors">
                    {nav.gems}
                  </a>
                </li>
                <li>
                  <a href="#itinerary-feedback-anchor" className="hover:text-amber-600 transition-colors">
                    {nav.feedback}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                {lang === "es" ? "Alojamiento & Reserva" : "Lodging & Booking"}
              </span>
              <ul className="space-y-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                <li>
                  <a
                    href="https://www.booking.com/city/es/campo-de-criptana.html?aid=2311580"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="hover:text-amber-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{nav.stayBtn}</span>
                    <ArrowUpRight className="size-3 text-muted-foreground" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 border-t border-neutral-200/60 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted-foreground">
          <p>© {currentYear} Criptana360. {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}</p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-amber-600 transition-colors font-medium">
              {lang === "es" ? "Volver arriba ↑" : "Back to top ↑"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
