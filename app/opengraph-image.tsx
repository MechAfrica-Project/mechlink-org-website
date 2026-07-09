import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

// Force Node.js runtime to read local fonts easily
export const runtime = 'nodejs';

export const alt = 'MechLink - Africa\'s Agricultural Infrastructure Engine';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  // Load TT Norms fonts into ArrayBuffers
  const ttnormsRegular = readFileSync(join(process.cwd(), 'app/fonts/TTNorms-Regular.otf'));
  const ttnormsMedium = readFileSync(join(process.cwd(), 'app/fonts/TTNorms-Medium.otf'));
  const ttnormsBold = readFileSync(join(process.cwd(), 'app/fonts/TTNorms-Bold.otf'));

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#081410', // --void in dark mode
          position: 'relative',
          fontFamily: '"TT Norms"',
        }}
      >
        {/* Subtle Geometric Grid */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.8,
          }}
        />

        {/* Deep Central Glow */}
        <div
          style={{
            position: 'absolute',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(47,203,143,0.18) 0%, rgba(8,20,16,0) 60%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Logomark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '120px',
            background: '#2FCB8F', // --accent-primary in dark mode
            borderRadius: '28px',
            marginBottom: '48px',
            boxShadow: '0 24px 48px rgba(0,0,0,0.6)',
          }}
        >
          <span style={{ fontSize: '64px', fontWeight: 900, color: '#081410' }}>M</span>
        </div>

        {/* Typography Core */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <h1
              style={{
                fontSize: '60px',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                padding: 0,
                letterSpacing: '-0.03em',
                textAlign: 'center',
                lineHeight: '1.1',
              }}
            >
              Building Africa&apos;s agricultural
            </h1>
            <h1
              style={{
                fontSize: '60px',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                padding: 0,
                letterSpacing: '-0.03em',
                textAlign: 'center',
                lineHeight: '1.1',
              }}
            >
              infrastructure engine.
            </h1>
          </div>
          <p
            style={{
              fontSize: '24px',
              fontWeight: 500,
              color: '#a7c2af', // --silver
              margin: 0,
              padding: 0,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            MechLink · Products · Services · Talent
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'TT Norms',
          data: ttnormsRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'TT Norms',
          data: ttnormsMedium,
          style: 'normal',
          weight: 500,
        },
        {
          name: 'TT Norms',
          data: ttnormsBold,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}
