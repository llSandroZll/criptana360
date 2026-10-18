import "./globals.css"
import { ReactNode } from "react"
import localFont from "next/font/local"

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { PostHogAnalytics } from "@/components/analytics"

import { ThemeProvider } from "./providers"

export const fontSans = localFont({
  src: "../fonts/haskoy.ttf",
  variable: "--font-sans",
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title:
    "Criptana360 · Guía Editorial e Itinerarios de Fin de Semana en Campo de Criptana",
  description:
    "Olvida los directorios interminables. Descubre Campo de Criptana con itinerarios de fin de semana diseñados por locales: molinos al atardecer, bodegas y mesa con vistas.",
  keywords:
    "Campo de Criptana, Turismo Campo de Criptana, Sierra de los Molinos, Pósito Real, Fin de Semana en La Mancha, Bodegas Símbolo, Las Musas",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${fontSans.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen bg-[#FAFAFA] dark:bg-background text-foreground antialiased">
        <PostHogAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <main className="bg-[#FAFAFA] dark:bg-background text-foreground flex flex-col justify-center items-center w-full">
              <div className="w-full">{children}</div>
            </main>
          </TooltipProvider>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
