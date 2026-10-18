"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  BedDouble,
  Compass,
  Globe,
  MapPin,
  Sparkles,
  Sun,
  Wine,
} from "lucide-react"

import {
  ALL_ITINERARIES,
  DICTIONARY,
  Language,
  LOCAL_GEMS,
  WEEKEND_AGENDA,
} from "@/lib/criptana-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { GradientHeading } from "@/components/cult/gradient-heading"
import { ItineraryCard } from "@/components/itinerary-card"
import { LocalGemsGrid } from "@/components/local-gems-grid"
import { FeedbackSurvey } from "@/components/survey"
import { WeekendAgendaSection } from "@/components/weekend-agenda"
import { ModeToggle } from "@/app/providers"

export default function Page() {
  const [lang, setLang] = useState<Language>("es")
  const [selectedItineraryIndex, setSelectedItineraryIndex] = useState<number>(0)

  const t = DICTIONARY[lang]
  const itineraries = ALL_ITINERARIES[lang]
  const activeItinerary = itineraries[selectedItineraryIndex] || itineraries[0]
  const gems = LOCAL_GEMS[lang]
  const agendaEvents = WEEKEND_AGENDA[lang]

  const toggleLanguage = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"))
  }

  return (
    <div className="min-h-screen w-full">
      {/* Editorial Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#FAFAFA]/90 dark:bg-neutral-950/90 border-b border-neutral-200/80 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center size-9 rounded-xl bg-amber-400 text-neutral-950 font-black text-base shadow-sm">
              C360
            </span>
            <div className="flex flex-col">
              <span className="font-black tracking-tight text-lg leading-none">
                Criptana<span className="text-amber-600">360</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                {lang === "es" ? "Guía local · La Mancha" : "Local guide · La Mancha"}
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
            <a
              href="#itinerarios"
              className="hover:text-amber-600 transition-colors"
            >
              {t.nav.itineraries}
            </a>
            <a
              href="#agenda"
              className="hover:text-amber-600 transition-colors"
            >
              {t.nav.agenda}
            </a>
            <a
              href="#joyas-locales"
              className="hover:text-amber-600 transition-colors"
            >
              {t.nav.gems}
            </a>
            <a
              href="#itinerary-feedback-anchor"
              className="hover:text-amber-600 transition-colors"
            >
              {t.nav.feedback}
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            {/* Direct ES/EN Language Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language between Spanish and English"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-bold bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 transition-colors cursor-pointer"
            >
              <Globe className="size-3.5 text-amber-500" />
              <span>{lang === "es" ? "EN" : "ES"}</span>
            </button>

            {/* Direct 1-Click Dark/Light Mode Toggle */}
            <ModeToggle />

            {/* Prominent High-Contrast Booking CTA */}
            <a
              href={activeItinerary.monetization.bookingUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              data-ph-capture-attribute-nav="booking-top-cta"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-[#F59E0B] hover:bg-[#D97706] text-neutral-950 shadow-[0_2px_10px_rgba(245,158,11,0.4)] border border-amber-300 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <BedDouble className="size-4 mr-0.5 text-neutral-950 stroke-[2.5]" />
              <span className="text-neutral-950 font-bold tracking-tight">
                {t.nav.stayBtn}
              </span>
              <ArrowUpRight className="size-3.5 ml-0.5 text-neutral-950 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Editorial Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="transition-opacity duration-300 opacity-100">
          {/* Editorial Hero Section */}
          <section className="py-6 md:py-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="bg-neutral-900 text-amber-300 dark:bg-white dark:text-neutral-900 font-bold px-3 py-1 border-0">
                <Sparkles className="size-3.5 mr-1.5 inline" />
                {t.hero.weekendBadge}
              </Badge>
              <Badge
                variant="outline"
                className="border-neutral-300 dark:border-neutral-700 text-xs font-medium"
              >
                <Sun className="size-3.5 mr-1 text-amber-500 inline" />
                {t.hero.sunBadge}
              </Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 space-y-4">
                <GradientHeading size="xl" weight="black">
                  {t.hero.title}
                </GradientHeading>
                <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
                  {t.hero.description}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <Button
                  asChild
                  size="lg"
                  className="w-full justify-between font-bold"
                >
                  <a href="#itinerarios">
                    <span className="flex items-center gap-2">
                      <Wine className="size-4 text-amber-400" />
                      {t.hero.ctaItinerary}
                    </span>
                    <Compass className="size-4" />
                  </a>
                </Button>
                <div className="flex items-center justify-between text-xs text-muted-foreground px-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3.5 text-amber-600" />
                    {t.hero.locationTag}
                  </span>
                  <span>{t.hero.curatedTag}</span>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-4" />

          {/* 3 pre-built weekend itineraries selector */}
          <section id="itinerarios" className="pt-8 pb-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="outline"
                    className="bg-amber-500/10 text-amber-900 dark:text-amber-300 border-amber-500/30 font-semibold"
                  >
                    <Sparkles className="size-3.5 mr-1.5 inline text-amber-500" />
                    {t.itinerariesSelector.badge}
                  </Badge>
                </div>
                <GradientHeading size="lg" weight="black">
                  {t.itinerariesSelector.title}
                </GradientHeading>
                <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
                  {t.itinerariesSelector.subtitle}
                </p>
              </div>

              {/* Itinerary Selector Tabs with Mobile Horizontal Scroll */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible no-scrollbar">
                {itineraries.map((itin, idx) => {
                  const isSelected = selectedItineraryIndex === idx
                  return (
                    <button
                      key={itin.id}
                      onClick={() => setSelectedItineraryIndex(idx)}
                      className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border shrink-0 ${
                        isSelected
                          ? "bg-amber-400 text-neutral-950 border-amber-400 shadow-md scale-[1.02]"
                          : "bg-white hover:bg-neutral-100 text-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800"
                      }`}
                    >
                      {itin.badge.split("·")[0]}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Active Curated Itinerary Showcase */}
            <ItineraryCard
              itinerary={activeItinerary}
              dict={t.itinerarySection}
            />
          </section>

          <Separator className="my-8" />

          {/* Scannable Weekend Local Agenda Section */}
          <WeekendAgendaSection events={agendaEvents} dict={t.agendaSection} />

          <Separator className="my-8" />

          {/* Curated Local Gems Grid */}
          <LocalGemsGrid gems={gems} dict={t.gemsSection} lang={lang} />

          {/* Traveler feedback (sent to PostHog) */}
          <FeedbackSurvey dict={t.feedback} />
        </div>
      </div>
    </div>
  )
}
