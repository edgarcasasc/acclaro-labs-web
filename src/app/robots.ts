import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',       // No rastrear endpoints de API
        '/dashboard/', // <--- BLOQUEO TOTAL al panel de control (Seguridad P0)
        '/admin/',     // Bloqueo a futura zona administrativa
        // NOTA: Eliminamos /_next/ y /static/ para que Google pueda "ver" el diseño CSS/JS
      ],
    },
    sitemap: 'https://acclarolabs.com/sitemap.xml',
  };
}