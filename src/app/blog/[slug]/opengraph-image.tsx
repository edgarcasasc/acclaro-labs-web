import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/blog'; // Esto es lo que causa el error

// 1. AGREGA ESTA LÍNEA (Es la clave de la solución)
export const runtime = 'nodejs'; 

export const alt = 'Acclaro Labs Blog';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// 2. Tu función (Nota: En Next.js 15, params es una Promise)
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return new ImageResponse(<div>Post no encontrado</div>);
  }

  return new ImageResponse(
    (
      <div style={{
        background: '#0B0F19',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '80px',
        color: 'white',
      }}>
        <div style={{ fontSize: '24px', color: '#10b981', marginBottom: '20px' }}>
          ACCLARO LABS // ENGINEERING LOG
        </div>
        <div style={{ fontSize: '72px', fontWeight: 'bold', lineHeight: '1.1' }}>
          {post.title}
        </div>
        <div style={{ marginTop: 'auto', fontSize: '24px', color: '#94a3b8' }}>
          {post.date} • {post.author}
        </div>
      </div>
    ),
    { ...size }
  );
}