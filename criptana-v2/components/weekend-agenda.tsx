"use client"

import React, { useState } from "react"
import {
  ArrowUpRight,
  Calendar,
  Clock,
  Compass,
  MapPin,
  Sparkles,
  Ticket,
  UtensilsCrossed,
  X,
} from "lucide-react"

import { AgendaEvent, EditorialDictionary } from "@/lib/criptana-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { GradientHeading } from "@/components/cult/gradient-heading"

interface WeekendAgendaSectionProps {
  events: AgendaEvent[]
  dict: EditorialDictionary["agendaSection"]
}

export function WeekendAgendaSection({ events, dict }: WeekendAgendaSectionProps) {
  const [selectedEvent, setSelectedEvent] = useState<AgendaEvent | null>(null)

  const handleCardClick = (ev: AgendaEvent) => {
    setSelectedEvent(ev)
    const w = window as unknown as {
      posthog?: { capture: (event: string, props?: Record<string, any>) => void }
    }
    w.posthog?.capture("agenda_modal_opened", {
      event_id: ev.id,
      event_title: ev.title,
      event_category: ev.category,
      status_badge: ev.statusBadge,
    })
  }

  const handleExternalAction = (ev: AgendaEvent, destination: string) => {
    const w = window as unknown as {
      posthog?: { capture: (event: string, props?: Record<string, any>) => void }
    }
    w.posthog?.capture("agenda_action_clicked", {
      event_id: ev.id,
      event_title: ev.title,
      destination,
    })
  }

  return (
    <section id="agenda" className="w-full py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge
              variant="outline"
              className="bg-amber-500/10 text-amber-900 dark:text-amber-300 border-amber-500/30 font-semibold"
            >
              <Calendar className="size-3.5 mr-1.5 inline text-amber-500" />
              {dict.badge}
            </Badge>
            <span className="text-xs text-muted-foreground font-medium">
              {dict.quickUpdateNotice}
            </span>
          </div>
          <GradientHeading size="lg" weight="black">
            {dict.title}
          </GradientHeading>
          <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
            {dict.subtitle}
          </p>
        </div>
      </div>

      {/* Grid of Interactive Agenda Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {events.map((ev) => (
          <Card
            key={ev.id || ev.title}
            onClick={() => handleCardClick(ev)}
            className="group rounded-[24px] bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-sm hover:border-amber-500/60 hover:shadow-lg transition-all flex flex-col justify-between cursor-pointer active:scale-[0.99]"
          >
            <CardHeader className="p-5 pb-3">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-2xl transition-transform group-hover:scale-110">
                  {ev.icon}
                </span>
                <Badge className="bg-neutral-900 text-amber-300 dark:bg-white dark:text-neutral-900 text-[10px] font-bold border-0">
                  {ev.badge}
                </Badge>
              </div>

              {ev.statusBadge && (
                <div className="mb-1">
                  <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
                    {ev.statusBadge}
                  </span>
                </div>
              )}

              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                {ev.category}
              </p>
              <CardTitle className="text-base font-bold text-foreground leading-snug mt-0.5 line-clamp-2 group-hover:text-amber-600 transition-colors">
                {ev.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-5 pt-0 space-y-3.5 flex-1 flex flex-col justify-between">
              <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3">
                {ev.description}
              </p>

              <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-2.5 space-y-1 text-xs">
                <span className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1">
                  <Sparkles className="size-3 shrink-0" />
                  Tip local:
                </span>
                <p className="text-neutral-700 dark:text-neutral-300 text-[11px] leading-snug line-clamp-2">
                  {ev.insiderTip}
                </p>
              </div>

              <div className="pt-2.5 border-t border-neutral-200/70 dark:border-neutral-800 space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5 font-semibold text-foreground">
                  <Clock className="size-3.5 text-amber-600 shrink-0" />
                  <span>{ev.time}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px]">
                  <MapPin className="size-3.5 text-neutral-500 shrink-0" />
                  <span className="truncate">{ev.location}</span>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-neutral-100 group-hover:bg-amber-400 group-hover:text-neutral-950 dark:bg-neutral-800 dark:group-hover:bg-amber-400 dark:group-hover:text-neutral-950 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 transition-all cursor-pointer shadow-sm"
                  >
                    <span>{dict.viewDetails}</span>
                    <ArrowUpRight className="size-3.5 text-amber-600 group-hover:text-neutral-950 transition-colors" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Rich Quick View Modal (Home/Away & Theater Schedule) */}
      <Dialog
        open={!!selectedEvent}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedEvent(null)
        }}
      >
        {selectedEvent && (
          <DialogContent className="max-w-lg w-[92vw] sm:w-full rounded-[28px] max-h-[90vh] overflow-y-auto p-6 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-2xl">
            <DialogHeader className="space-y-2 text-left">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{selectedEvent.icon}</span>
                  <Badge className="bg-amber-400 text-neutral-950 font-bold border-0 text-xs">
                    {selectedEvent.badge}
                  </Badge>
                </div>
                {selectedEvent.statusBadge && (
                  <Badge
                    variant="outline"
                    className="bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/30 text-xs font-bold"
                  >
                    {selectedEvent.statusBadge}
                  </Badge>
                )}
              </div>

              <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                {selectedEvent.category}
              </p>

              <DialogTitle className="text-xl sm:text-2xl font-black text-foreground leading-tight">
                {selectedEvent.title}
              </DialogTitle>

              {selectedEvent.subheading && (
                <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 border-l-2 border-amber-500 pl-2.5">
                  {selectedEvent.subheading}
                </p>
              )}

              <DialogDescription className="sr-only">
                {selectedEvent.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 pt-2">
              {/* Detailed Synopsis / Context */}
              <div className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed bg-neutral-50 dark:bg-neutral-900/60 p-4 rounded-2xl border border-neutral-100 dark:border-neutral-800/80">
                {selectedEvent.synopsis || selectedEvent.description}
              </div>

              {/* Key Logistics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-neutral-100/70 dark:bg-neutral-900 flex items-start gap-2.5 border border-neutral-200/50 dark:border-neutral-800">
                  <Clock className="size-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground block">Horario</span>
                    <span className="text-neutral-600 dark:text-neutral-400">
                      {selectedEvent.time}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-100/70 dark:bg-neutral-900 flex items-start gap-2.5 border border-neutral-200/50 dark:border-neutral-800">
                  <MapPin className="size-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground block">Ubicación</span>
                    <span className="text-neutral-600 dark:text-neutral-400 truncate block max-w-[180px]">
                      {selectedEvent.location}
                    </span>
                  </div>
                </div>

                {selectedEvent.admission && (
                  <div className="sm:col-span-2 p-3 rounded-xl bg-neutral-100/70 dark:bg-neutral-900 flex items-start gap-2.5 border border-neutral-200/50 dark:border-neutral-800">
                    <Ticket className="size-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-foreground block">
                        {dict.admissionLabel}
                      </span>
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {selectedEvent.admission}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Local Insider Tip */}
              <div className="rounded-2xl bg-amber-500/10 border border-amber-500/25 p-3.5 space-y-1 text-xs">
                <span className="font-black text-amber-900 dark:text-amber-300 flex items-center gap-1.5 text-xs">
                  <Sparkles className="size-3.5 text-amber-600" />
                  Consejo de Local:
                </span>
                <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed text-xs">
                  {selectedEvent.insiderTip}
                </p>
              </div>

              {/* Mandatory Monetization / Pairing Loop (Rule 3) */}
              {selectedEvent.pairing && (
                <div className="rounded-2xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent border border-amber-500/30 p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <UtensilsCrossed className="size-4 text-amber-700 dark:text-amber-400" />
                    <span className="font-bold text-xs uppercase tracking-wider text-amber-900 dark:text-amber-300">
                      {dict.pairingLabel}
                    </span>
                  </div>
                  <h4 className="font-black text-sm text-foreground">
                    {selectedEvent.pairing.title}
                  </h4>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {selectedEvent.pairing.description}
                  </p>
                  <div className="pt-1">
                    <a
                      href={selectedEvent.pairing.ctaUrl}
                      onClick={() => {
                        handleExternalAction(selectedEvent, selectedEvent.pairing?.ctaUrl || "")
                        if (selectedEvent.pairing?.ctaUrl.startsWith("#")) {
                          setSelectedEvent(null)
                        }
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300 hover:text-amber-950 dark:hover:text-amber-100 underline underline-offset-4 cursor-pointer"
                    >
                      <span>{selectedEvent.pairing.ctaText}</span>
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <DialogFooter className="pt-4 flex flex-col sm:flex-row gap-2">
              {selectedEvent.actionUrl && (
                <a
                  href={selectedEvent.actionUrl}
                  target={selectedEvent.actionUrl.startsWith("http") ? "_blank" : undefined}
                  rel={selectedEvent.actionUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={() => handleExternalAction(selectedEvent, selectedEvent.actionUrl || "")}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-black bg-amber-400 hover:bg-amber-500 text-neutral-950 transition-colors shadow-sm cursor-pointer"
                >
                  <Compass className="size-4" />
                  <span>{selectedEvent.actionLabel || "Abrir en Google Maps"}</span>
                </a>
              )}
              <Button
                variant="outline"
                onClick={() => setSelectedEvent(null)}
                className="rounded-xl text-xs font-semibold"
              >
                {dict.closeLabel}
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}
