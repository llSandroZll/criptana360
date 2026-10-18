import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://criptana360.com")

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login", "/submit", "/auth"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
