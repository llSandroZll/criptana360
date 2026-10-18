"use client"

import React from "react"
import {
  ArrowUpRight,
  BedDouble,
  CalendarCheck2,
  CheckCircle2,
  Clock,
  Flame,
  Sparkles,
  Sun,
  Wine,
} from "lucide-react"

import { CuratedItinerary, EditorialDictionary } from "@/lib/criptana-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface ItineraryCardProps {
  itinerary: CuratedItinerary
  dict: EditorialDictionary["itinerarySection"]
}

export function ItineraryCard({ itinerary, dict }: ItineraryCardProps) {
  const handleAffiliateClick = () => {
    const w = window as unknown as {
      posthog?: { capture: (ev: string, props?: Record<string, any>) => void }
    }
    w.posthog?.capture("booking_affiliate_clicked", {
      itinerary_id: itinerary.id,
      itinerary_title: itinerary.title,
      destination: itinerary.monetization.bookingUrl,
    })
  }

  return (
    <section id="itinerario-hedonista" className="w-full py-6">
      <Card className="rounded-[28px] overflow-hidden border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
        {/* Top Editorial Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Visual Hero & Vibe */}
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden">
            <img
              src={itinerary.heroImage}
              alt={itinerary.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />

            <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full text-white">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-amber-400 hover:bg-amber-400 text-black font-bold px-3 py-1 text-xs border-0 shadow-md">
                  <Flame className="size-3.5 mr-1 fill-black inline" />
                  {itinerary.badge}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-white/30 bg-black/40 text-white backdrop-blur-md text-xs"
                >
                  {dict.rule1Badge}
                </Badge>
              </div>

              <div className="space-y-3 mt-16">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
                  <Sun className="size-4" />
                  {itinerary.duration}
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-none text-white">
                  {itinerary.title}
                </h2>
                <p className="text-sm md:text-base text-neutral-200 font-medium leading-snug">
                  {itinerary.subtitle}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-neutral-300">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                    <Wine className="size-3.5 text-amber-300" />
                    {itinerary.vibe}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Curated Stop-by-Stop Timeline + Rule 3 Monetization Loop */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <CardHeader className="p-6 md:p-8 pb-4">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="size-3.5" />
                  {dict.timelineTitle}
                </span>
                <span className="text-xs text-muted-foreground">
                  {dict.updatedBadge}
                </span>
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold text-foreground">
                {dict.headline}
              </CardTitle>
              <CardDescription className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed pt-1">
                {itinerary.editorialIntro}
              </CardDescription>
            </CardHeader>

            <CardContent className="px-6 md:px-8 py-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {itinerary.stops.map((stop, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl p-4 bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-800 hover:border-amber-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 text-xs font-black px-2.5 py-0.5 rounded-md bg-neutral-900 text-amber-300 dark:bg-white dark:text-neutral-900">
                        <Clock className="size-3" />
                        {stop.time}
                      </span>
                      <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                        {stop.highlightTag}
                      </span>
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      {stop.period} · {stop.spotName}
                    </p>
                    <h4 className="text-sm font-bold text-foreground mt-0.5 mb-1.5">
                      {stop.title}
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {stop.insiderNote}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>

            <div className="px-6 md:px-8 pt-4">
              <Separator />
            </div>

            {/* CRITICAL (Rule 3): Prominent Monetization Loop */}
            <CardFooter className="p-6 md:p-8 pt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-500/15">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-600 hover:bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 border-0">
                    <BedDouble className="size-3 mr-1 inline" />
                    {dict.accommodationBadge}
                  </Badge>
                  <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">
                    {itinerary.monetization.priceHint}
                  </span>
                </div>
                <p className="text-sm font-bold text-foreground">
                  {itinerary.monetization.recommendedStay}
                </p>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                  {itinerary.monetization.stayHighlight}
                </p>
              </div>

              <Button
                asChild
                size="lg"
                onClick={handleAffiliateClick}
                data-ph-capture-attribute-itinerary={itinerary.id}
                data-ph-capture-attribute-monetization="booking-com-cta"
                className="h-12 px-6 rounded-xl bg-gradient-to-b from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 font-black text-sm md:text-base shadow-[0_8px_20px_-4px_rgba(245,158,11,0.55)] border border-amber-300 transition-all hover:scale-[1.02] active:scale-[0.99] shrink-0 cursor-pointer"
              >
                <a
                  href={itinerary.monetization.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center justify-center gap-2"
                >
                  <CalendarCheck2 className="size-5 stroke-[2.25]" />
                  <span>{itinerary.monetization.ctaLabel}</span>
                  <ArrowUpRight className="size-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </section>
  )
}
