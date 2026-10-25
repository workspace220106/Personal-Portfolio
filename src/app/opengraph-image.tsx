import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Rajiv Agarwal — Full-stack + AI Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background:
            'radial-gradient(1200px 630px at 70% 50%, rgba(192,193,255,0.18) 0%, #000 55%)',
          color: 'white',
          fontFamily: 'sans-serif',
          padding: 72,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            letterSpacing: 4,
            fontSize: 20,
            textTransform: 'uppercase',
            color: '#c0c1ff',
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              background: '#c0c1ff',
              transform: 'rotate(45deg)',
            }}
          />
          RAJIV AGARWAL
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 128,
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: -4,
            }}
          >
            <span style={{ color: '#e5e5e5' }}>HI, I&apos;M </span>
            <span style={{ color: '#c0c1ff' }}>RAJIV</span>
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 32,
              color: '#c0c1ff',
              letterSpacing: -1,
              fontWeight: 700,
            }}
          >
            DEVELOPER + FULL-STACK ENGINEER
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 18,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          <div>Full-stack + AI, not AI on top of full-stack</div>
          <div>29 shipped projects · every one live</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
