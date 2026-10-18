"use client"

import { useState } from "react"
import { CheckCircle2, Sparkles, ThumbsDown, ThumbsUp } from "lucide-react"

import { EditorialDictionary } from "@/lib/criptana-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface FormbricksMicroSurveyProps {
  dict: EditorialDictionary["feedback"]
}

export function FormbricksMicroSurvey({ dict }: FormbricksMicroSurveyProps) {
  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null)

  const handleVote = (vote: "yes" | "no") => {
    setFeedback(vote)
    const w = window as unknown as {
      posthog?: { capture: (ev: string, props?: Record<string, any>) => void }
    }
    w.posthog?.capture("itinerary_feedback_submitted", {
      helpful: vote === "yes",
      response_text: vote === "yes" ? dict.yesBtn : dict.noBtn,
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
              {dict.badge}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {dict.anonymous}
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground">
            {dict.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {dict.subtitle}
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
              {dict.yesBtn}
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleVote("no")}
              data-ph-capture-attribute-survey="itinerary-helpful-no"
              className="gap-2 cursor-pointer"
            >
              <ThumbsDown className="size-4" />
              {dict.noBtn}
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-2.5 text-sm font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2.5 rounded-xl">
            <CheckCircle2 className="size-4 shrink-0" />
            <span>{dict.thankYou}</span>
          </div>
        )}
      </div>
    </section>
  )
}
