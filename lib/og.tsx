import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Shared brand-navy/brand-amber OG card generator, used by every route's
 * opengraph-image.tsx. The original site emitted no og:image at all, so
 * every link shared to Slack/Facebook/etc rendered with a bare title —
 * this fixes that sitewide.
 */
export function renderOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#090909",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(233,66,162,0.35), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: "#e942a2",
              marginRight: 14,
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#e942a2",
              fontSize: 28,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 4,
            }}
          >
            {eyebrow}
          </span>
        </div>
        <div
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 980,
            display: "flex",
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 30,
              marginTop: 24,
              maxWidth: 900,
              display: "flex",
            }}
          >
            {subtitle}
          </div>
        )}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            display: "flex",
            alignItems: "center",
            color: "rgba(255,255,255,0.5)",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 2,
          }}
        >
          BELGANET STÄD OCH ALLSERVICE
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
