import { ImageResponse } from "next/og"

import { siteTitle } from "@/lib/seo"

export const runtime = "edge"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#0a0a0c",
          color: "#f8fafc",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          gap: "24px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          {siteTitle}
        </div>
        <div style={{ fontSize: 28, opacity: 0.8, maxWidth: 900 }}>
          Full-stack software engineer building modern, high-performance web
          experiences.
        </div>
      </div>
    ),
    size
  )
}
