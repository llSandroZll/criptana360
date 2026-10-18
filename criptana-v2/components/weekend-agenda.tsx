"use client"

import React from "react"
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react"

import { AgendaEvent, EditorialDictionary } from "@/lib/criptana-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GradientHeading } from "@/components/cult/gradient-heading"

interface WeekendAgendaSectionProps {
  events: AgendaEvent[]
  dict: EditorialDictionary["agendaSection"]
}

export function WeekendAgendaSection({ events, dict }: WeekendAgendaSectionProps) {
  return (
    <section id="agenda" className="w-full py-10">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((ev, idx) => (
          <Card
            key={idx}
            className="rounded-[24px] bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-sm hover:border-amber-500/40 transition-all flex flex-col justify-between"
          >
            <CardHeader className="p-6 pb-3">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-2xl">{ev.icon}</span>
                <Badge className="bg-neutral-900 text-amber-300 dark:bg-white dark:text-neutral-900 text-[10px] font-bold border-0">
                  {ev.badge}
                </Badge>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                {ev.category}
              </p>
              <CardTitle className="text-lg font-bold text-foreground leading-snug mt-1">
                {ev.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-6 pt-0 space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {ev.description}
              </p>

              <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-3 space-y-1 text-xs">
                <span className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1">
                  <Sparkles className="size-3" />
                  Tip del fin de semana:
                </span>
                <p className="text-neutral-700 dark:text-neutral-300">
                  {ev.insiderTip}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-200/70 dark:border-neutral-800 space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5 font-medium text-foreground">
                  <Clock className="size-3.5 text-amber-600" />
                  <span>{ev.time}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-neutral-500" />
                  <span>{ev.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
