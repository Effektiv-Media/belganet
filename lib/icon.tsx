import { ImageResponse } from "next/og";

/**
 * Brand monogram used for the favicon and Apple touch icon: a pink "B" on
 * the dark brand colour. Generated in code because the logo file is a wide
 * wordmark, which is unreadable at favicon size. Google shows the favicon
 * next to every mobile result and requires a square that is a multiple of
 * 48px, so the favicon is 192×192.
 */
export function renderIcon(size: number, { rounded = true }: { rounded?: boolean } = {}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#14111a",
          // iOS masks the touch icon itself, so it must be a full square.
          borderRadius: rounded ? size * 0.22 : 0,
          color: "#e942a2",
          fontSize: size * 0.68,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
          lineHeight: 1,
        }}
      >
        B
      </div>
    ),
    { width: size, height: size },
  );
}
