"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { CheckCircle2, Sparkles, ThumbsDown, ThumbsUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const POSTHOG_KEY =
  process.env.NEXT_PUBLIC_POSTHOG_KEY || "phc_YOUR_PROJECT_API_KEY"
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com"
const FORMBRICKS_ENV_ID =
  process.env.NEXT_PUBLIC_FORMBRICKS_ENV_ID || "YOUR_FORMBRICKS_ENVIRONMENT_ID"
const FORMBRICKS_API_HOST =
  process.env.NEXT_PUBLIC_FORMBRICKS_API_HOST || "https://app.formbricks.com"

/**
 * PostHog Analytics Provider for Next.js App Router (`app/layout.tsx`)
 * Tracks session recordings, rage-clicks, and Booking.com affiliate funnel conversions.
 */
export function PostHogAnalytics() {
  return (
    <>
      <Script
        id="posthog-array-js"
        src="https://eu-assets.i.posthog.com/static/array.js"
        strategy="afterInteractive"
        onLoad={() => {
          const w = window as unknown as { posthog?: Record<string, any> }
          if (w.posthog && POSTHOG_KEY !== "phc_YOUR_PROJECT_API_KEY") {
            w.posthog.init(POSTHOG_KEY, {
              api_host: POSTHOG_HOST,
              person_profiles: "identified_only",
              capture_pageview: true,
              capture_pageleave: true,
              autocapture: true,
              rageclick: true,
              session_recording: {
                maskAllInputs: false,
                recordCrossOriginIframes: false,
              },
            })
          }
        }}
      />
    </>
  )
}

/**
 * PostHog-native Targeted Micro-Survey ("Did this itinerary help?")
 * Captures user votes directly into PostHog events & funnels without needing an external survey tool.
 */
export function FormbricksMicroSurvey() {
  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null)

  const handleVote = (vote: "yes" | "no") => {
    setFeedback(vote)
    const w = window as unknown as {
      posthog?: { capture: (ev: string, props?: Record<string, any>) => void }
    }
    w.posthog?.capture("itinerary_feedback_submitted", {
      helpful: vote === "yes",
      response_text: vote === "yes" ? "Sí, plan cerrado" : "Me faltó algo",
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
    })
  }

  return (
    <section
      id="itinerary-feedback-anchor"
      aria-label="Micro-encuesta de utilidad del itinerario"
      className="w-full max-w-4xl mx-auto mt-16 mb-12 px-4"
    >
      <div className="rounded-[24px] bg-white dark:bg-neutral-900 p-6 md:p-8 border border-neutral-200/80 dark:border-neutral-800 shadow-[rgba(17,24,28,0.08)_0_0_0_1px,rgba(17,24,28,0.08)_0_1px_2px_-1px,rgba(17,24,28,0.04)_0_2px_4px] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Badge
              variant="outline"
              className="bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/20 text-xs font-medium"
            >
              <Sparkles className="size-3 mr-1 inline" />
              Feedback de Viajeros
            </Badge>
            <span className="text-xs text-muted-foreground">
              1 clic · Anónimo
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground">
            ¿Te ha servido este itinerario?{" "}
            <span className="text-muted-foreground font-normal text-sm md:text-base">
              / Did this itinerary help?
            </span>
          </h3>
          <p className="text-sm text-muted-foreground">
            Ajustamos nuestras rutas cada jueves según lo que realmente os
            funciona sobre el terreno.
          </p>
        </div>

        {feedback === null ? (
          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="default"
              onClick={() => handleVote("yes")}
              data-ph-capture-attribute-survey="itinerary-helpful-yes"
              className="gap-2 cursor-pointer"
            >
              <ThumbsUp className="size-4 text-amber-400" />
              Sí, plan cerrado
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleVote("no")}
              data-ph-capture-attribute-survey="itinerary-helpful-no"
              className="gap-2 cursor-pointer"
            >
              <ThumbsDown className="size-4" />
              Me faltó algo
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-2.5 text-sm font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2.5 rounded-xl">
            <CheckCircle2 className="size-4 shrink-0" />
            <span>
              ¡Gracias! Tu respuesta se ha registrado en nuestro panel editorial.
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
