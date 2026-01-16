import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/mdx';

// Configuración de la imagen
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Generación de la imagen
export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = await params;
 const post = await getPostBySlug(slug);

  // Si no hay post, título por defecto
  const title = post?.meta.title || 'Acclaro Labs';
  const author = post?.meta.author || 'Edgar Casas';

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
          backgroundColor: '#0f172a', // Fondo Slate-900
          backgroundImage: 'radial-gradient(circle at 25px 25px, #334155 2%, transparent 0%), radial-gradient(circle at 75px 75px, #334155 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          color: 'white',
          padding: '40px 80px',
          textAlign: 'center',
        }}
      >
        {/* Logo / Marca */}
        <div style={{ 
            display: 'flex', 
            fontSize: 30, 
            color: '#60a5fa', // Blue-400
            marginBottom: 40,
            textTransform: 'uppercase',
            letterSpacing: '4px',
            fontWeight: 900
        }}>
          ACCLARO LABS
        </div>

        {/* Título del Post */}
        <div
          style={{
            fontSize: 70,
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 40,
            backgroundImage: 'linear-gradient(90deg, #ffffff, #94a3b8)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {title}
        </div>

        {/* Autor */}
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            fontSize: 24, 
            color: '#94a3b8' // Slate-400
        }}>
          <div style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: '#3b82f6',
              marginRight: 15,
          }}></div>
          Por {author}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}