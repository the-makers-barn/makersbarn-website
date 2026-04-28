import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

interface RenderOgImageParams {
  title: string
  eyebrow: string
}

export function renderToolOgImage({ title, eyebrow }: RenderOgImageParams): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          background: 'linear-gradient(135deg, #f4ede0 0%, #e8dcc6 100%)',
          fontFamily: 'sans-serif',
          color: '#1f130c',
        }}
      >
        <div style={{ fontSize: 28, color: '#b8894a', textTransform: 'uppercase', letterSpacing: 4, marginBottom: 20 }}>
          {eyebrow}
        </div>
        <div style={{ fontSize: 80, lineHeight: 1.1, fontWeight: 700, maxWidth: 980 }}>
          {title}
        </div>
        <div style={{ marginTop: 'auto', fontSize: 28, color: '#294b3a', fontWeight: 600 }}>
          The MakersBarn
        </div>
      </div>
    ),
    ogSize,
  )
}
