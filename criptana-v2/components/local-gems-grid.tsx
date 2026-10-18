"use client"

import React, { useState } from "react"
import {
  Clock,
  Compass,
  Flame,
  MapPin,
  Sparkles,
  Wine,
} from "lucide-react"

import { EditorialDictionary, Language, LocalGem } from "@/lib/criptana-data"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { GradientHeading } from "@/components/cult/gradient-heading"
import {
  MinimalCard,
  MinimalCardContent,
  MinimalCardDescription,
  MinimalCardFooter,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/cult/minimal-card"

interface LocalGemsGridProps {
  gems: LocalGem[]
  dict: EditorialDictionary["gemsSection"]
  lang: Language
}

export function LocalGemsGrid({ gems, dict }: LocalGemsGridProps) {
  const [selectedGem, setSelectedGem] = useState<LocalGem | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const categories = [
    { key: "all", label: dict.allCategories },
    { key: "patrimonio", label: "Patrimonio", match: "Patrimonio Vivo" },
    { key: "arquitectura", label: "Arquitectura", match: "Arquitectura & Vermut" },
    { key: "gastronomia", label: "Gastronomía", match: "Gastronomía" },
    { key: "vino", label: "Bodegas & Vino", match: "Bodegas & Vino" },
  ]

  const visibleGems =
    activeCategory === "all"
      ? gems
      : gems.filter(
          (g) =>
            g.category === categories.find((c) => c.key === activeCategory)?.match
        )

  return (
    <section id="joyas-locales" className="w-full py-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge
              variant="outline"
              className="bg-amber-500/10 text-amber-900 dark:text-amber-300 border-amber-500/30 font-semibold"
            >
              <Sparkles className="size-3.5 mr-1.5 inline text-amber-500" />
              {dict.badge}
            </Badge>
            <span className="text-xs text-muted-foreground font-medium">
              {dict.insiderTag}
            </span>
          </div>
          <GradientHeading size="lg" weight="black">
            {dict.title}
          </GradientHeading>
          <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
            {dict.subtitle}
          </p>
        </div>

        {/* Lightweight Editorial Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-neutral-900 text-amber-300 dark:bg-white dark:text-neutral-900 shadow-sm"
                    : "bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Cult MinimalCard Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleGems.map((gem) => (
          <MinimalCard
            key={gem.id}
            onClick={() => setSelectedGem(gem)}
            data-ph-capture-attribute-spot={gem.id}
            className={`group cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
              gem.featured
                ? "ring-1 ring-amber-500/40 bg-gradient-to-b from-amber-50/40 to-neutral-50 dark:from-amber-950/20 dark:to-neutral-900"
                : ""
            }`}
          >
            <div>
              <div className="relative">
                <MinimalCardImage src={gem.image} alt={gem.name} />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                  <Badge className="bg-black/80 hover:bg-black text-white backdrop-blur-md border-white/15 text-[11px] font-semibold">
                    {gem.badge}
                  </Badge>
                  {gem.featured && (
                    <Badge className="bg-amber-400 hover:bg-amber-400 text-black font-bold text-[11px] border-0">
                      <Flame className="size-3 mr-1 fill-black" />
                      Insider Pick
                    </Badge>
                  )}
                </div>
                <div className="absolute bottom-3 right-3 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/95 dark:bg-neutral-900/95 px-2.5 py-1 text-[11px] font-semibold text-neutral-900 dark:text-neutral-100 shadow-sm">
                    <Clock className="size-3 text-amber-600" />
                    {gem.insiderTiming}
                  </span>
                </div>
              </div>

              <div className="px-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                  <span className="font-medium uppercase tracking-wider text-[10px] text-amber-700 dark:text-amber-400">
                    {gem.category}
                  </span>
                  <span>{gem.price}</span>
                </div>

                <MinimalCardTitle className="text-xl font-bold group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {gem.name}
                </MinimalCardTitle>

                <MinimalCardDescription className="mt-2 text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                  “{gem.excerpt}”
                </MinimalCardDescription>
              </div>
            </div>

            <div>
              <MinimalCardContent className="px-3 pt-3 pb-3">
                <div className="rounded-xl bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/20 p-3 text-xs text-neutral-800 dark:text-neutral-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-300">
                    <Wine className="size-3.5 shrink-0" />
                    <span>{dict.planRedondo}</span>
                  </div>
                  <p className="line-clamp-2 text-neutral-700 dark:text-neutral-300">
                    {gem.insiderPairing}
                  </p>
                </div>
              </MinimalCardContent>

              <MinimalCardFooter className="px-3 pb-3 pt-1 flex items-center justify-between border-t border-neutral-200/60 dark:border-neutral-800 mt-1">
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground truncate max-w-[65%]">
                  <MapPin className="size-3.5 shrink-0 text-neutral-500" />
                  {gem.address.split(",")[0]}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 dark:text-white group-hover:translate-x-0.5 transition-transform">
                  {dict.readSecret}
                  <Compass className="size-3.5 text-amber-600" />
                </span>
              </MinimalCardFooter>
            </div>
          </MinimalCard>
        ))}
      </div>

      {/* Editorial Deep-Dive Modal */}
      <Dialog
        open={!!selectedGem}
        onOpenChange={(open) => !open && setSelectedGem(null)}
      >
        {selectedGem && (
          <DialogContent className="max-w-2xl rounded-[24px] p-0 overflow-hidden border-neutral-200 dark:border-neutral-800">
            <div className="relative h-60 w-full">
              <img
                src={selectedGem.image}
                alt={selectedGem.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-amber-400 text-black font-bold border-0">
                    {selectedGem.badge}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-white border-white/30 bg-black/40 backdrop-blur-sm"
                  >
                    {selectedGem.insiderTiming}
                  </Badge>
                </div>
                <DialogTitle className="text-2xl md:text-3xl font-black text-white">
                  {selectedGem.name}
                </DialogTitle>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <DialogHeader>
                <DialogDescription className="text-base font-medium text-neutral-900 dark:text-neutral-100 italic border-l-2 border-amber-500 pl-3">
                  “{selectedGem.excerpt}”
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-3 text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {selectedGem.fullDescription.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="rounded-2xl bg-amber-500/10 border border-amber-500/25 p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                  <Wine className="size-4" />
                  {dict.pairingTitle}
                </div>
                <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  {selectedGem.insiderPairing}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-neutral-200 dark:border-neutral-800 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-4 text-amber-600" />
                  {selectedGem.address}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4 text-amber-600" />
                  {selectedGem.hours}
                </span>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}
