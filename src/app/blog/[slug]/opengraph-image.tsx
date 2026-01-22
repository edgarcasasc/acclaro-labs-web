import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/blog'; // Asegúrate que la ruta sea correcta

export const runtime = 'edge';

// Configuración
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  // En Next.js 15 params es una promesa, en 14 es objeto. 
  // Usamos await por seguridad si estás en versiones recientes.
  const { slug } = await params; 
  const post = await getPostBySlug(slug);

  // Fallbacks
  const title = post?.title || 'Bitácora de Ingeniería';
  // Si tienes tags en tu MDX, úsalos, si no, usa un default
  const tag = post?.tag || 'ENGINEERING LOG'; 
  const date = post?.date ? new Date(post.date).toLocaleDateString('es-MX', { month: 'long', year: 'numeric' }) : '2026';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#020617', // Slate-950
          backgroundImage: 'radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%)',
          backgroundSize: '50px 50px',
          padding: '60px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Contenedor Principal (Tarjeta con Borde) */}
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '2px solid #334155', // Slate-700
            backgroundColor: '#0f172a', // Slate-900
            borderRadius: '20px',
            padding: '50px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            position: 'relative',
          }}
        >
          {/* Decoración: Terminal Dots */}
          <div style={{ display: 'flex', gap: '12px', position: 'absolute', top: '30px', left: '30px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div> {/* Rojo */}
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div> {/* Amber */}
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }}></div> {/* Emerald */}
          </div>

          {/* Header: Marca y Tag */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%', marginTop: '-10px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 16px',
                borderRadius: '99px',
                backgroundColor: 'rgba(16, 185, 129, 0.1)', // Emerald tint
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#34d399', // Emerald-400
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              {tag}
            </div>
          </div>

          {/* Body: Título */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
            <div style={{ display: 'flex', fontSize: 20, color: '#94a3b8', letterSpacing: '2px', textTransform: 'uppercase' }}>
               Acclaro Labs // Bitácora
            </div>
            <div
              style={{
                fontSize: 64,
                fontWeight: 800,
                color: 'white',
                lineHeight: 1.1,
                // Simulamos un Serif visualmente con sans-serif bold si no cargamos fuentes externas
                textShadow: '0 2px 10px rgba(0,0,0,0.3)', 
              }}
            >
              {title}
            </div>
          </div>

          {/* Footer: Autor y Fecha */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #334155', paddingTop: '30px' }}>
            
            {/* Autor */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#d4af37', // Oro Antiguo
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0f172a',
                fontWeight: 'bold',
                fontSize: 24
              }}>
                A
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'white', fontSize: 20, fontWeight: 600 }}>Acclaro Labs</span>
                <span style={{ color: '#64748b', fontSize: 16 }}>Engineering Team</span>
              </div>
            </div>

            {/* Fecha */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8', fontSize: 20 }}>
               <span>{date}</span>
            </div>

          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}