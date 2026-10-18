"use client"

import React from "react"
import { ArrowUpRight, Calendar, Clock, MapPin, Sparkles } from "lucide-react"

import { AgendaEvent, EditorialDictionary } from "@/lib/criptana-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GradientHeading } from "@/components/cult/gradient-heading"

interface WeekendAgendaSectionProps {
  events: AgendaEvent[]
  dict: EditorialDictionary["agendaSection"]
}

export function WeekendAgendaSection({ events, dict }: WeekendAgendaSectionProps) {
  const handleAgendaAction = (ev: AgendaEvent) => {
    const w = window as unknown as {
      posthog?: { capture: (event: string, props?: Record<string, any>) => void }
    }
    w.posthog?.capture("agenda_event_clicked", {
      event_title: ev.title,
      event_category: ev.category,
      action_url: ev.actionUrl,
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

      {/* 2-column on tablet, 4-column on desktop, horizontal card flow on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {events.map((ev, idx) => (
          <Card
            key={idx}
            className="rounded-[24px] bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-sm hover:border-amber-500/40 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <CardHeader className="p-5 pb-3">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-2xl">{ev.icon}</span>
                <Badge className="bg-neutral-900 text-amber-300 dark:bg-white dark:text-neutral-900 text-[10px] font-bold border-0">
                  {ev.badge}
                </Badge>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                {ev.category}
              </p>
              <CardTitle className="text-base font-bold text-foreground leading-snug mt-1 line-clamp-2">
                {ev.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-5 pt-0 space-y-3.5 flex-1 flex flex-col justify-between">
              <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {ev.description}
              </p>

              <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-2.5 space-y-1 text-xs">
                <span className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1">
                  <Sparkles className="size-3" />
                  Tip local:
                </span>
                <p className="text-neutral-700 dark:text-neutral-300 text-[11px] leading-snug">
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

                {ev.actionUrl && (
                  <div className="pt-2">
                    <a
                      href={ev.actionUrl}
                      target={ev.actionUrl.startsWith("http") ? "_blank" : undefined}
                      rel={ev.actionUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={() => handleAgendaAction(ev)}
                      className="inline-flex w-full items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 transition-colors cursor-pointer"
                    >
                      <span>{ev.actionLabel || "Ver detalles"}</span>
                      <ArrowUpRight className="size-3.5 text-amber-600" />
                    </a>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
