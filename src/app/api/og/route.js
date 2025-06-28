import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get('title') || 'Prarambh Plastech';
  const subtitle = searchParams.get('subtitle') || 'Sustainable Packaging Solutions';

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const logoPath = searchParams.get('logo');
  const bgPath = searchParams.get('bg');
  const logo = logoPath?.startsWith('http') ? logoPath : `${baseUrl}${logoPath}`;
  const bg = bgPath?.startsWith('http') ? bgPath : `${baseUrl}${bgPath}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px',
            boxSizing: 'border-box',
          }}
        >
          {/* Overlay block */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1200px',
              height: '630px',
              backgroundColor: 'rgba(28, 41, 57, 0.6)',
            }}
          />

          {/* Content */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              color: '#ffffff',
              zIndex: 1,
            }}
          >
            <img
              src={logo}
              width={100}
              height={100}
              alt="Logo"
              style={{ borderRadius: '12px', marginBottom: '24px' }}
            />
            <div style={{ fontSize: 64, fontWeight: 700, lineHeight: '1.2', marginBottom: '16px' }}>
              {title}
            </div>
            <div style={{ fontSize: 36, fontWeight: 400, lineHeight: '1.4', color: '#F4FBFD' }}>
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
